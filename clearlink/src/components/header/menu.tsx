import { Icons } from "../icons";

function Menu() {
  type MenuItemType = {
    name: string;
    link: string;
    childmenu?: {
      name: string;
      link: string;
    };
  };

  const menu_items: MenuItemType[] = [
    {
      name: "products",
      link: "/",
      childmenu: {
        name: "",
        link: "",
      },
    },
    {
      name: "solutions",
      link: "/",
      childmenu: {
        name: "",
        link: "",
      },
    },
    {
      name: "resources",
      link: "/",
      childmenu: {
        name: "",
        link: "",
      },
    },
    {
      name: "pricing",
      link: "/",
    },
  ];

  return (
    <nav>
      <ul>
        {menu_items.map((item) => (
          <li key={item.name} className="nav-item">
            {item.name}
            {item.childmenu ? (
              <span className="dropdown-icon">
                <Icons.ChevronDown />
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { Menu };
