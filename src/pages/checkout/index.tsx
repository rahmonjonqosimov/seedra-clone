import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PatternFormat } from "react-number-format";
import "./index.scss";
interface ProductsSchema {
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

export interface initialStateSchema {
  name: string;
  tel: string;
  state: string;
  sity: string;
  adress: string;
  zip: string;
}

const initialState: initialStateSchema = {
  name: "",
  tel: "",
  state: "",
  sity: "",
  adress: "",
  zip: "",
};

const Checkout: React.FC = () => {
  const [data, setData] = useState<initialStateSchema>(initialState);

  const navigate = useNavigate();
  const cart = useSelector((s: any) => s.cart.value);
  const totalPrice: number = cart.reduce(
    (sum: number, item: ProductsSchema) =>
      sum + Math.round(item.price) * item.quantity,
    0
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cartItem = cart?.map((product: ProductsSchema) => (
    <div className="box" key={product.id}>
      <p>{product.title}</p>
      <div className="row">
        <h4>${Math.round(product.price)}</h4>
        <p>Total count: {product.quantity}</p>
      </div>
      <div className="line"></div>
    </div>
  ));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/payment");
    sessionStorage.setItem("user", JSON.stringify(data));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev: initialStateSchema) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container">
      <div className="cart__box">
        <div className="cart__products">
          <div className="cart__products-hero">
            <h1>
              <GoArrowLeft onClick={() => navigate("/cart")} /> Checkout
            </h1>
            <h3>{cart.length} items</h3>
          </div>
          <form onSubmit={handleSubmit} className="checkout__form">
            <h3>Personal info</h3>
            <div className="row">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  value={data.name}
                  onChange={handleChange}
                  name="name"
                  type="text"
                  id="name"
                  required
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone number</label>
                <PatternFormat
                  value={data.tel}
                  onChange={handleChange}
                  name="tel"
                  format="+998 (##) ### ## ##"
                  allowEmptyFormatting
                  mask="_"
                />
              </div>
            </div>
            <h3>Adress</h3>
            <div className="row">
              <div>
                <label htmlFor="state">State</label>
                <input
                  value={data.state}
                  onChange={handleChange}
                  type="text"
                  name="state"
                  id="state"
                  required
                  placeholder="Name of state"
                />
              </div>
              <div>
                <label htmlFor="sity">Sity</label>
                <input
                  value={data.sity}
                  onChange={handleChange}
                  type="text"
                  id="sity"
                  name="sity"
                  required
                  placeholder="Name of city"
                />
              </div>
            </div>
            <div className="row">
              <div>
                <label htmlFor="adress">Adress</label>
                <input
                  value={data.adress}
                  onChange={handleChange}
                  type="text"
                  name="adress"
                  id="adress"
                  required
                  placeholder="1901 Thornridge Cir. Shiloh, Hawaii 81063"
                />
              </div>
              <div>
                <label htmlFor="zip">ZIP code</label>
                <input
                  value={data.zip}
                  onChange={handleChange}
                  name="zip"
                  type="text"
                  id="zip"
                  required
                  placeholder="ZIP code"
                />
              </div>
            </div>
            <button>Continue</button>
          </form>
        </div>
        <div className="cart__summary">
          <h3>Your cart</h3>
          {cartItem}
          <div className="row">
            <p>Total amount</p>
            <h4>${totalPrice}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
