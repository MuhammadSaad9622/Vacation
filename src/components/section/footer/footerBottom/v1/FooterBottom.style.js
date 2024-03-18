import styled from "styled-components";

const FooterBottomStyleWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: -40px;
  margin-top: 494px;
  background:#FFFF;

  .v2_main_footer {
    width: 100%;
    margin: auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }

  .v2_footer_menu {
    max-width: 550px;
    width: 100%;
  }

  .v2_footer_logo {
    margin-bottom: 46px;
  }

  .bottom_footer_menulist {
    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 0 10px 0;
      padding: 0;

      a {
        color: #7f7f7f;
        font-size: 20px;
        line-height: 40px;
        text-align: center;
        text-decoration: none;
        font-weight: bold; /* Added font-weight property */
    }
    a:hover {
      color: #FF5A5F; /* Change color to white on hover */
  }
    
    }
  }

  .v2_footer_copiright_text {
    margin-bottom: 40px;
    color: #FF5A5F;
  }

  .v2_footer_shapes_left {
    position: absolute;
    left: 0px;
    bottom: 0px;
  }

  .v2_footer_shapes_right {
    position: absolute;
    right: 0px;
    bottom: 0px;
  }

  @media only screen and (max-width: 991px) {
    margin-top: 260px;
  }

  @media only screen and (max-width: 767px) {
    .v2_footer_shapes_left,
    .v2_footer_shapes_right {
      display: none;
    }
  }

  @media only screen and (max-width: 575px) {
    .bottom_footer_menulist {
      ul {
        flex-direction: column;
      }
    }
  }
`;

export default FooterBottomStyleWrapper;
