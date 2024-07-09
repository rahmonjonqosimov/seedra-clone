import React, { useState } from "react";
import "./index.scss";
import { initialStateSchema } from "../../pages/payment";
import { useSelector, useDispatch } from "react-redux";
import { deleteAllCart } from "../../context/slices/cartSlice";
import { ProductsSchema } from "../cart";
import { useNavigate } from "react-router-dom";
interface SchemaUser {
  name: string;
  tel: string;
  state: string;
  sity: string;
  adress: string;
  zip: string;
}

interface ShoppingPropsSchema {
  shopModel: initialStateSchema | null;
  setShopModel: React.Dispatch<React.SetStateAction<initialStateSchema | null>>;
}

const BOT__TOKEN: string = "7039163383:AAHAschkQDggIAsrj6Oj6R3odtcTRRPXhms";
const USER__ID: string = "5980648858";

// https://api.telegram.org/bot[your_token]/getUpdates
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]

const Shopping: React.FC<ShoppingPropsSchema> = ({
  shopModel,
  setShopModel,
}) => {
  const cart = useSelector((s: any) => s.cart.value);
  const user: SchemaUser = JSON.parse(sessionStorage.getItem("user") || "{}");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalPrice = cart?.reduce(
    (sum: number, item: ProductsSchema) =>
      sum + Math.round(item.price) * item.quantity,
    0
  );

  const handleOrderProduct: () => void = () => {
    // user
    let text: string = "User %0A%0A";
    text += `User Name: ${user.name} %0A`;
    text += `Tel: ${user.tel} %0A`;
    text += `State: ${user.state} %0A`;
    text += `Address: ${user.adress} %0A`;
    text += `Sity: ${user.sity} %0A`;

    // payment
    text += `Card number: ${shopModel?.card_number}%0A`;
    text += `Card type: ${shopModel?.card_type}%0A`;
    text += `Date: ${shopModel?.date}%0A%0A`;

    // products
    cart?.map((el: ProductsSchema, inx: number) => {
      text += `Product ${inx + 1} %0A`;
      text += `Title: ${el.title} %0A`;
      text += `Quantity: ${el.quantity} %0A`;
      text += `Price: $${el.price} %0A%0A`;
    });

    // total price
    text += `Total price: $${totalPrice} %0A%0A`;

    // send request
    let url = `https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${USER__ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.onreadystatechange = () => {
      if (api.readyState === 4) {
        setLoading(false);
        if (api.status === 200) {
          dispatch(deleteAllCart());
          setShopModel(null);
          navigate("/cart");
        } else {
          console.error("Failed to send message", api.statusText);
        }
      }
    };
    api.send();

    // localStorage.removeItem("cart");
    // setShopModel(null);
    // navigate("/cart");
  };

  const shopItem = cart?.map((item: ProductsSchema) => (
    <div className="shop__card" key={item.id}>
      <img
        src={item.images[0]}
        height={100}
        style={{ objectFit: "contain" }}
        width={100}
        alt={item.title}
      />
      <h3>{item.title}</h3>
      <p>
        Quantity: <span>{item.quantity}</span>
      </p>
    </div>
  ));

  return (
    <>
      <div onClick={() => setShopModel(null)} className="shop__owerlay"></div>
      <div className="shopping">
        <h2>Selected products</h2>
        <div className="shop__wrapper">{shopItem}</div>
        <button disabled={loading} onClick={handleOrderProduct}>
          {loading ? "Loading..." : "Send"}
        </button>
      </div>
    </>
  );
};

export default Shopping;
