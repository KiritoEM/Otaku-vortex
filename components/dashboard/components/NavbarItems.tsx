import dashboardDataHelper from "@/helpers/dashboardDataHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const NavbarItems = (): JSX.Element => {
  const { dashboardNav } = dashboardDataHelper();
  const router = useRouter();
  return (
    <div className="menu-items">
      <ul>
        {dashboardNav.navItems.map((items, index) => (
          <li key={index}>
            <a
              href={`${items.href}`}
              className={router.pathname === items.href ? "active" : ""}
            >
              {items.icon !== undefined && (
                <FontAwesomeIcon icon={items.icon} className="icon" />
              )}

              {items.label}
            </a>
          </li>
        ))}

        <li></li>
      </ul>
    </div>
  );
};

export default NavbarItems;
