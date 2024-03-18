import React, { useState } from "react";
import SectionTitle from "../../../../common/sectionTitle";
import AboutInfoCardList from "../aboutInfoCardList";
import data from "../../../../assets/data/about/aboutv1";
import aboutThumb1 from "../../../../assets/images/nft/cute-travel-suitcase-guitar-mascot-shape-vector-illustration-163457686-3556141427.jpg";
import aboutThumb2 from "../../../../assets/images/nft/cute-travel-suitcase-holding-compass-mascot-shape-vector-illustration-163457923-2645189423.jpg";
import AboutStyleWrapper from "./About.style";

const About = () => {
  const { aboutDescription1, aboutDescription2, aboutDescription3, aboutDescription4, aboutDescription5, aboutDescription6 } = data;

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <AboutStyleWrapper id="about">
      <div className="v2_about_overlay"></div>
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-md-6">
            <div className="v1_about_us_right_sect">
              <SectionTitle title="How it Works" subtitle="" />
              <div className="v1_about_us_right_text">
                <p>{aboutDescription1}</p>
                <p>{aboutDescription2}</p>
                {showMore && (
                  <>
                    <p>{aboutDescription3}</p>
                    <p>{aboutDescription4}</p>
                    <p>{aboutDescription5}</p>
                    <p>{aboutDescription6}</p>
                  </>
                )}
                <button onClick={toggleShowMore}>
                  {showMore ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="v1_about_us_left_sect sm-mt-60">
              <div className="v1_about_us_img_card v1_about_us_img_card1">
                <div className="v1_about_us_img v1_about_us_img1">
                  <img src={aboutThumb1} alt="img" />
                </div>
                <div className="v1_about_us_img1_shapes">
                  <div className="v1_about_us_img1_shapes_left">
                    <div className="shape_1"></div>
                    <div className="shape_2"></div>
                  </div>
                  <div className="v1_about_us_img1_shapes_right">
                    <div className="shape_3"></div>
                  </div>
                </div>
              </div>
              <div className="v1_about_us_img_card v1_about_us_img_card2">
                <div className="v1_about_us_img v1_about_us_img2">
                  <img src={aboutThumb2} alt="img" />
                </div>
                <div className="v1_about_us_img2_shapes">
                  <div className="v1_about_us_img2_shapes_left">
                    <div className="shape_1"></div>
                    <div className="shape_2"></div>
                  </div>
                  <div className="v1_about_us_img2_shapes_right">
                    <div className="shape_3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about card  */}
        <AboutInfoCardList />
      </div>
    </AboutStyleWrapper>
  );
};

export default About;
