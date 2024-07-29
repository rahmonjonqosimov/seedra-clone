import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./index.scss";
import { MdMarkEmailUnread } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
interface ContactForm {
  username: string;
  email: string;
  message: string;
}

let initialState: ContactForm = {
  username: "",
  email: "",
  message: "",
};

const BOT__TOKEN: string = "7039163383:AAHAschkQDggIAsrj6Oj6R3odtcTRRPXhms";
const USER__ID: string = "5980648858";

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState<ContactForm>(initialState);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      formData.email.trim() &&
      formData.message.trim() &&
      formData.username.trim()
    ) {
      let text: string = "Contact %0A";
      text += `Fullname: <b>${formData.username}</b> %0A`;
      text += `Email: <b>${formData.email}</b> %0A%0A`;
      text += `Messege: <b>${formData.message}</b>`;

      let url: string = `https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${USER__ID}&text=${text}`;
      let api: XMLHttpRequest = new XMLHttpRequest();
      api.open("GET", url, true);
      api.send();
      setFormData(initialState);
    } else {
      alert("Fill out the form");
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="contact">
            <div className="contact__context">
              <div className="contact__context-top">
                <h2>Contact us</h2>
                <p>
                  Send for us your request and we will get in touch with you as
                  soon as possible
                </p>
              </div>
              <div className="contact__context-bottom">
                <div className="contact__context-bottom-detail">
                  <div className="contact__context-bottom-detail-icon">
                    <PiPhoneCallFill color="#359640" size={21} />
                  </div>
                  <h5>+998 97 667 68 68</h5>
                </div>
                <div className="contact__context-bottom-detail">
                  <div className="contact__context-bottom-detail-icon">
                    <MdMarkEmailUnread color="#359640" size={21} />
                  </div>
                  <h5>qosimovrahmonjon33@gmail.com</h5>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__form-inputs">
                <label htmlFor="">Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="username"
                  placeholder="Your name"
                />
              </div>
              <div className="contact__form-inputs">
                <label htmlFor="">Email</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Your email"
                />
              </div>
              <div className="contact__form-inputs">
                <label htmlFor="">Message</label>
                <textarea
                  name="message"
                  rows={10}
                  placeholder="Your message"
                  onChange={handleChange}
                />
              </div>
              <button>Send request</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
