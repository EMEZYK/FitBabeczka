import Navbar from "../../ui/Navbar/Navigation";
const LandingPanelPages = () => {
  const pages = [
    { source: "/przepisy", name: "Przepisy" },
    { source: "/kontakt", name: "O mnie " },
    { source: "/user/login", name: "Login", icon: "/icons/login.svg" },
  ];
  return pages.map((page) => (
    <Navbar
      source={page.source}
      name={page.name}
      icon={page.icon}
      key={page.name}
    />
  ));
};

export default LandingPanelPages;
