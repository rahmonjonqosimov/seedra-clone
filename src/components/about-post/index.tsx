import React from "react";
import "../about-posts/index.scss";
import img1 from "../../assets/images/imgs/about-post-img1.png";
import img2 from "../../assets/images/imgs/about-post-img2.png";

const AboutPost: React.FC = () => {
  return (
    <section>
      <div className="container about">
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
        <div className="about-post">
          <div className="about-post__img">
            <img src={img2} alt="image" />
          </div>
          <div className="about-post__content">
            <h2>Our story</h2>
            <p>
              SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
              professional instructions created by PhD Helga George <br />
              <br />
              Be sure of our quality - the freshest batches of this season.
              Non-GMO, Heirloom - our seeds were tested and have the best
              germination ratings. <br />
              Your easy growing experience is our guarantee Spinach commom
              culinary uses: salads, soups, smoothies, lasagne, pizza, pies,
              risotto, and more
              <br /> <br />
              Proudly sourced in the USA - our garden seeds are grown,
              harvested, and packaged in the USA. We support local farmers and
              are happy to produce this American-made product
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPost;
