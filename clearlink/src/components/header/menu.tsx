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
      childmenu: {
        name: "",
        link: "",
      },
    },
  ];

  return (
    <nav>
      <ul>
        {menu_items.map((item) => (
          <li key={item.name}>
            {item.name}
            <span>
              <Icons.ChevronDown />
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { Menu };
