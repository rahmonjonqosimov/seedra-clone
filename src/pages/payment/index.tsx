import React, { ChangeEvent, useState } from "react";
import "./index.scss";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { PatternFormat } from "react-number-format";
import img1 from "../../assets/images/icons/pay.svg";
import img2 from "../../assets/images/icons/visa.svg";
import img3 from "../../assets/images/icons/mastercard.svg";
import img4 from "../../assets/images/icons/pay-pal.svg";
import { useSelector } from "react-redux";
import Shopping from "../../components/shop";
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

export interface initialStateSchema {
  card_type: string;
  card_number: string;
  date: string;
  ccv: string;
}

const initialState: initialStateSchema = {
  card_number: "",
  card_type: "",
  date: "",
  ccv: "",
};

const Payment: React.FC = () => {
  const [payment, setPayment] = useState<initialStateSchema>(initialState);
  const [cardType, setCardType] = useState<string>("");
  const [shopModel, setShopModel] = useState<initialStateSchema | null>(null);
  console.log(shopModel);

  const navigate = useNavigate();

  const cart = useSelector((s: any) => s.cart.value);
  const totalPrice: number = cart?.reduce(
    (acc: number, item: ProductsSchema) =>
      acc + Math.round(item.price) * item.quantity,
    0
  );

  const handleCardTypeChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = (event) => {
    setCardType(event.target.value);
  };

  const handlePaymentChange: (e: ChangeEvent<HTMLInputElement>) => void = (
    e
  ) => {
    const { value, name } = e.target;
    setPayment((prev: initialStateSchema) => ({ ...prev, [name]: value }));
  };

  const handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void = (
    event
  ) => {
    event.preventDefault();
    setPayment((prev: initialStateSchema) => ({
      ...prev,
      ["card_type"]: cardType,
    }));
    setShopModel(payment);
  };

  return (
    <>
      {shopModel ? (
        <Shopping setShopModel={setShopModel} shopModel={shopModel} />
      ) : (
        <></>
      )}
      <div className="payment">
        <form onSubmit={handleSubmit} action="" className="payment__form">
          <div className="payment__hero">
            <GoArrowLeft onClick={() => navigate("/checkout")} />
            <h2>Payment info</h2>
          </div>
          <p>Card type</p>
          <div className="card__type__wrapper">
            <label className={cardType == "Pay" ? "show" : ""} htmlFor="pay1">
              <input
                type="radio"
                checked={cardType === "Pay"}
                onChange={handleCardTypeChange}
                value="Pay"
                id="pay1"
                name="card"
                required
              />
              <img src={img1} alt="Pay" />
            </label>
            <label className={cardType == "Visa" ? "show" : ""} htmlFor="pay2">
              <input
                checked={cardType === "Visa"}
                onChange={handleCardTypeChange}
                type="radio"
                value="Visa"
                id="pay2"
                name="card"
                required
              />
              <img src={img2} alt="Pay" />
            </label>
            <label
              className={cardType == "Master Card" ? "show" : ""}
              htmlFor="pay3"
            >
              <input
                checked={cardType === "Master Card"}
                onChange={handleCardTypeChange}
                type="radio"
                id="pay3"
                value="Master Card"
                name="card"
                required
              />
              <img src={img3} alt="Pay" />
            </label>
            <label
              className={cardType == "PayPal" ? "show" : ""}
              htmlFor="pay4"
            >
              <input
                checked={cardType === "PayPal"}
                onChange={handleCardTypeChange}
                type="radio"
                id="pay4"
                value="PayPal"
                name="card"
                required
              />
              <img src={img4} alt="Pay" />
            </label>
          </div>

          <div className="card__box">
            <label htmlFor="card">Card number</label>
            <PatternFormat
              value={payment.card_number}
              valueIsNumericString
              format="#### #### #### ####"
              mask=" "
              name="card_number"
              onChange={handlePaymentChange}
              placeholder="0000 0000 0000 0000"
              id="card"
              required
            />
          </div>
          <div className="row">
            <div className="card__box">
              <label htmlFor="date">Expiring date</label>
              <input
                value={payment.date}
                onChange={handlePaymentChange}
                type="date"
                name="date"
                required
                id="date"
              />
            </div>
            <div className="card__box">
              <label htmlFor="ccv">CCV</label>
              <PatternFormat
                required
                value={payment.ccv}
                onChange={handlePaymentChange}
                valueIsNumericString
                format="####"
                mask=" "
                id="ccv"
                name="ccv"
                placeholder="1234"
              />
            </div>
          </div>
          <div className="line"></div>
          <div className="qator">
            <p>Total amount</p>
            <h4>${totalPrice}</h4>
          </div>
          <button>
            <span>${totalPrice}</span>
            <span>
              Continue <GoArrowRight />{" "}
            </span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Payment;
