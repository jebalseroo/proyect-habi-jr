import styled from "styled-components";

const menus = styled.div`
  .navMenu {
    position: absolute;
    top: 8%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .navMenu a {
    color: #f6f4e6;
    text-decoration: none;
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 500;
    display: inline-block;
    width: auto;
    margin: 0 10px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .navMenu a:hover {
    color: #fddb3a;
  }

  .navMenu .dot {
    width: 6px;
    height: 6px;
    background: #fddb3a;
    border-radius: 50%;
    opacity: 0;
    -webkit-transform: translateX(30px);
    transform: translateX(30px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .navMenu a:nth-child(1):hover ~ .dot {
    -webkit-transform: translateX(110px);
    transform: translateX(40px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    opacity: 1;
  }

  .navMenu a:nth-child(2):hover ~ .dot {
    -webkit-transform: translateX(110px);
    transform: translateX(130px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    opacity: 1;
  }

  .navMenu a:nth-child(3):hover ~ .dot {
    -webkit-transform: translateX(200px);
    transform: translateX(245px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    opacity: 1;
  }

  .navMenu a:nth-child(4):hover ~ .dot {
    -webkit-transform: translateX(285px);
    transform: translateX(375px);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    opacity: 1;
  }
`;
export default menus;
