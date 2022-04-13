import Navbar from "../../ui/Navbar/Navigation";

const AdminPanelPages = () => {
  const pages = [
    { source: "/user/home", name: "Mój profil" },
    { source: "/user/menu", name: "Menu" },
    { source: "/user/login", name: "Wyloguj się", icon: "/icons/login.svg" },
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

export default AdminPanelPages;