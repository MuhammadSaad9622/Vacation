import SectionTitle from "../../../../common/sectionTitle";
import Counter from "../../../../common/counter";

import aboutImageLeft from "../../../../assets/images/nft/about_image_left.png";
import aboutImageRight from "../../../../assets/images/nft/about_image_right.png";
import AboutInfoCardList from "../aboutInfoCardList";
import AboutStyleWrapper from "./About.style";

const About = () => {
  return (
    <AboutStyleWrapper className="v2_about_us_section" id="about">
      <div className="v2_about_overlay"></div>
      <div className="container">
        <SectionTitle
          className="text-center"
          isCenter={true}
          title="About Us"
          subtitle=""
        />
        <div className="v2_about_us_content" >
          <div className="v2_about_us_text">
            <p>
            A Symphony of Dreams and Innovation

In the tapestry of modern investment, where threads of tradition and innovation intertwine, VACA404 emerges as a bold stroke of color, redefining the canvas. At the heart of VACA404 lies a revolutionary vision: to democratize the luxury of pristine beachfront real estate, making it accessible through the magic of blockchain technology. But VACA404 is more than a platform; it's a sanctuary for dreamers, a citadel for pioneers, and a beacon for those yearning to reclaim their financial destiny from the tumultuous seas of global economics.

            </p>
            <p>
            Our journey began not with a mere idea, but with a profound belief in the power of unity and technology to forge a future where everyone has a key to the kingdom of luxury. The Genesis Round is not just the inception of this journey; it's a covenant between VACA404 and our earliest believers, promising a voyage towards prosperity and an escape to idyllic shores once reserved for the whispers of the elite.

            </p>
            <p>
            Imagine holding a talisman that opens doors to hidden gardens, secret retreats, and lands of opulence—this is the essence of our ERC-404 token. Crafted with precision and foresight, the ERC-404 is your portal to a realm where each property is a masterpiece, each investment a testament to your vision. It represents a fusion of the tangible and the digital, offering a fortress of security in the volatile world of fiat currencies, and a bridge to a future painted with the hues of luxury and stability.
            </p>
            <p>
            Within the annals of VACA404, every member is a storyteller, every investment a legacy. We are not merely curating properties; we are weaving a narrative of transformation and empowerment. Our selected destinations – Dubai, Thailand, Bali – are not just coordinates on a map but chapters in an epic saga of rebirth, where ancient lands meet futuristic visions, creating sanctuaries that promise both retreat and return.
            </p>

            <p> Joining VACA404 is an act of valor, a declaration of independence from the constraints of traditional investment pathways. It's a pledge to stand at the vanguard of an investment revolution, armed with the power of blockchain and the wisdom of strategic diversification. As a member of the Genesis Round, you are not just an investor but a pioneer, a guardian of the future, and a builder of dreams.</p>
<p>We extend to you an invitation not just to invest, but to be immortalized in the annals of a new age. VACA404 is your Odyssey, a journey that begins with a single step into the Genesis Round but stretches into horizons yet unimagined. Here, your dreams of luxury, freedom, and strategic foresight converge into a reality as tangible as the earth beneath your feet and as boundless as your imagination.

Welcome to VACA404, where the legacy of tomorrow is written by the visionaries of today.
</p>

</div>
</div>
      </div>
    </AboutStyleWrapper>
  );
};

export default About;
