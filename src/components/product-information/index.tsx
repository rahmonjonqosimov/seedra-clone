import React, { useState } from "react";
import "./index.scss";
import { FiPlus } from "react-icons/fi";

const ProductInformation: React.FC = () => {
  const questions: string[] = [
    "For seller: are these seeds organic? it does matter if they are organic, seeds can hold pesticides from the plant they grow from.",
    "Can they be grown on hydroponic systems",
    "They did not germinate even when i followed directions. What should i do?",
  ];
  const [openSections, setOpenSections] = useState<any>(
    new Array(questions.length).fill(false)
  );

  const toggleLinks: (index: number) => void = (index) => {
    setOpenSections((prevState: boolean[]) => {
      const newState: boolean[] = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const item = questions.map((el: string, inx: number) => (
    <div key={inx} className="row__card">
      <div className="content">
        <p>{el}</p>
        <button
          className={openSections[inx] ? "btn-close" : ""}
          onClick={() => toggleLinks(inx)}
        >
          <FiPlus />
        </button>
      </div>
      <div className={`answer ${openSections[inx] ? "show" : ""}`}>
        <div className="line"></div>
        <p>
          I have heat mats and artificial light. I planted them in all purpose
          potting soil. Moist not wet. Placed them on a heat mat. If not
          available, somewhere where it's 72 degrees. Add natural light, but I
          used artificial light. Takes 10- 15 days because of there hard shell
          on the seed.{" "}
        </p>
      </div>
    </div>
  ));
  return (
    <section className="product__information">
      <div className="container">
        <h1 className="product__title">Product information.</h1>
        <div className="line"></div>
        <div className="information__wrapper">
          <ul>
            <li>
              EEDRA Cilantro Seeds - contains 300 seeds in 1 Pack and
              professional instructions created by PhD Helga George
            </li>
            <li>
              Be sure of our quality - the freshest batches of this season.
              Non-GMO, Heirloom - our seeds were tested and have the best
              germination ratings. Your easy growing experience is our guarantee
            </li>
            <li>
              Cilantro common culinary uses: salsa, guacamole, pesto, salads,
              chutney, baked breads, pad thai, pico de gallo, rice, grilled
              shrimp skewers, falafel, and more
            </li>
            <li>
              Proudly sourced in the USA - our garden seeds are grown,
              harvested, and packaged in the USA. We support local farmers and
              are happy to produce this American-made product
            </li>
            <li>
              SEEDRA customer service - please contact us directly through
              Amazon with any questions or concerns about our products. We care
              about each customer and do our best to provide you with 100%
              satisfaction
            </li>
          </ul>
          <div className="information__card">
            <div className="row">
              <p>Package Dimensions</p>
              <h5>5.51 x 3.5 x 0.35 inches</h5>
            </div>
            <div className="line"></div>
            <div className="row">
              <p>Item Weight</p>
              <h5>0.317 ounces</h5>
            </div>
            <div className="line"></div>
            <div className="row">
              <p>ASIN</p>
              <h5>B08Z3HN5MP</h5>
            </div>
          </div>
        </div>
        <div className="questions">
          <h1 className="product__title">Frequently asked questions.</h1>
          <div className="questions__wrapper">
            <div className="questions__card">{item}</div>
            <div className="form">
              <h4>Didn’t find answer?</h4>
              <p>Ask your own!</p>
              <textarea name="" id="" placeholder="Type here"></textarea>
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInformation;
