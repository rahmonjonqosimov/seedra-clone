import React from "react";
import img1 from "../../assets/images/imgs/about-post-img1.png";
import "./index.scss";
const AboutPosts: React.FC = () => {
  return (
    <section>
      <div className="container about__section">
        <div className="about-post">
          <div className="about-post__content">
            <h2>Seedra helps to grow fast and efficiant</h2>
            <p>
              SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
              professional instructions created by PhD Helga George <br />{" "}
              <br />
              Be sure of our quality - the freshest batches of this season.
              Non-GMO, Heirloom - our seeds were tested and have the best
              germination ratings. <br />
              Your easy growing experience is our guarantee Spinach commom
              culinary uses: salads, soups, smoothies, lasagne, pizza, pies,
              risotto, and more <br />
              <br />
              Proudly sourced in the USA - our garden seeds are grown,
              harvested, and packaged in the USA. We support local farmers and
              are happy to produce this American-made product
            </p>
          </div>
          <div className="about-post__img">
            <img src={img1} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPosts;
