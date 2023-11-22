import dashboardDataHelper from "@/helpers/dashboardDataHelper";
import NavbarItems from "./components/NavbarItems";
import NavbarFooter from "./components/NavbarFooter";

const Navbar = (): JSX.Element => {
  const { dashboardNav } = dashboardDataHelper();
  return (
    <section className="dashboard-nav">
      <div className="logo">
        <img src={dashboardNav.logo} alt="" />
        <h4
          dangerouslySetInnerHTML={{ __html: dashboardNav.logo_title }}
          className="mx-2"
        />
      </div>
      <NavbarItems />
      <NavbarFooter />
    </section>
  );
};

export default Navbar;
