import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  position: relative;
  width: 90%;
  justify-content: center;
  align-items: center;

  .about {
    position: absolute;
    top: 25%;
    left: 0;
    min-height: 50%;
    width: 40%;
    margin-left: 20px;
    padding: 10px;
    color: #ffff;
    font-size: clamp(0.8rem, 2vw, 0.5rem);
    background-color: rgba(56, 56, 56, 0.3);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }

  .about-page {
    font-size: clamp(0.8rem, 2vw, 1.2rem);
    font-weight: bold;
    width: 30vw;
    text-align: left;
    margin-bottom: 10px;
  }

  .description {
    text-align: left;
  }
`;
