import React from "react";
import "./index.scss";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import img from "../../assets/images/icons/remove-from-cart.svg";
import { useNavigate } from "react-router-dom";
import emptyCart from "../../assets/images/imgs/empty-cart.jpg";
import {
  decrement,
  increment,
  removeFromCart,
} from "../../context/slices/cartSlice";
export interface ProductsSchema {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  images: string[];
  quantity: number;
}

const CartComponent: React.FC = () => {
  const navigate = useNavigate();
  const cart = useSelector((s: any) => s.cart.value);
  const dispatch = useDispatch();
  const productItems: JSX.Element[] = cart?.map((product: ProductsSchema) => (
    <React.Fragment key={product.id}>
      <tr key={product.id}>
        <td>
          <div className="product__details">
            <img
              onClick={() => dispatch(removeFromCart(product))}
              src={img}
              className="remove__from__cart"
              alt=""
            />
            <img src={product.images[0]} alt={product.title} />
            <p title={product.description}>{product.description}</p>
          </div>
        </td>
        <td>
          <div className="detail__quantity">
            <button
              disabled={product.quantity <= 1}
              onClick={() => dispatch(decrement(product))}
            >
              <FiMinus />
            </button>
            <span>{product.quantity}</span>
            <button
              disabled={product.quantity >= 10}
              onClick={() => dispatch(increment(product))}
            >
              <FiPlus />
            </button>
          </div>
        </td>
        <td>
          <h4>${Math.round(product.price)}</h4>
        </td>
        <td>
          <h4>${Math.round(product.price) * product.quantity}</h4>
        </td>
      </tr>
    </React.Fragment>
  ));

  let totalPrice: number = cart.reduce(
    (sum: number, item: ProductsSchema) =>
      (sum += Math.round(item.price) * item.quantity),
    0
  );
  return (
    <>
      {cart.length ? (
        <div className="container">
          <div className="cart__box">
            <div className="cart__products">
              <div className="cart__products-hero">
                <h1>Your cart.</h1>
                <h3>{cart.length} items</h3>
              </div>
              <div className="line"></div>
              <table>
                <thead>
                  <tr>
                    <th>PRODUCT DETAILS</th>
                    <th>AMOUNT</th>
                    <th>PRICE</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>{productItems}</tbody>
              </table>
            </div>
            <div className="cart__summary">
              <h4>Order summary</h4>
              <div className="row">
                <p>{cart.length} ITEMS</p>
                <h5>${totalPrice}</h5>
              </div>

              <select>
                <option value="shipping">Shipping</option>
              </select>
              <label htmlFor="Promocode">Promocode</label>
              <div className="promocode">
                <input type="text" id="Promocode" placeholder="Promocode" />
              </div>
              <div className="line"></div>
              <div className="row">
                <p>Total amount</p>
                <h5>${totalPrice}</h5>
              </div>
              <button onClick={() => navigate("/checkout")}>Continue</button>
            </div>
          </div>
        </div>
      ) : (
        <section id="empty-cart">
          <div className="container emp">
            <div className="empty-cart-image">
              <img src={emptyCart} alt="empty-cart" />
            </div>
            <h1>Your cart is currently empty.</h1>
            <p>
              Before proceed to checkout you must add some products to your
              shopping cart. You will find a lot of interesting products on our
              "Shop" page.
            </p>
            <button onClick={() => navigate("/")}> Home</button>
          </div>
        </section>
      )}
    </>
  );
};

export default CartComponent;
