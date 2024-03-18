import styled from "styled-components";
import footerBG from "../../../../assets/images/nft/v2_footer_bg.png";
import AboutBG from "../../../../assets/images/nft/pexels-petar-avramoski-6178937.jpg";
import bannerBg from "../../../../assets/images/ezgif-7-506df574a7.gif";

const FooterStyleWrapper = styled.footer`
  background: url(${bannerBg});
  background-size: 160% auto;
  background-repeat: no-repeat;
  padding-top: 655px;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 80%;
  }
`;


export default FooterStyleWrapper;
