import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  position: relative;
  width: 85%;
  justify-content: center;
  align-items: center;

  img {
    width: 100vw;
  }

  .about {
    position: absolute;
    top: 20%;
    left: 2%;
    min-height: 55%;
    width: 31%;
    padding: 10px;
    color: #000;
    font-size: clamp(0.8rem, 2vw, 0.5rem);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }

  .about-page {
    font-size: clamp(0.8rem, 2vw, 1.4rem);
    font-weight: bold;
    text-align: left;
    margin-bottom: 20px;
  }

  .description {
    text-align: left;
  }
`;
