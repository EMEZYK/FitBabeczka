import { Header } from "./Header.styled";

const HeaderComponent = () => {
  return (
    <Header>
      <img src="photos/headerPhoto.svg" alt=""></img>
      <div className="about">
        <div className="about-page">
          Oryginalne przepisy na zdrowe słodkości
        </div>
        <div className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
