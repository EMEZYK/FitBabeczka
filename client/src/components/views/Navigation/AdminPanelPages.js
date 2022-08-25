import Navbar from "../../ui/Navigation/Navbar";

const AdminPanelPages = () => {
  const pages = [
    { source: "/user/home", name: "Mój profil" },
    { source: "/user/menu", name: "Menu" },
    { source: "/user/logout", name: "Wyloguj się", icon: "/icons/login.svg" },
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
