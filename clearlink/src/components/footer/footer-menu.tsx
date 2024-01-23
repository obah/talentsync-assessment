export type FooterMenuProps = {
  title: string;
  items: {
    name: string;
    link: string;
  }[];
};

function FooterMenu({ title, items }: FooterMenuProps) {
  return (
    <>
      <p>{title}</p>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export { FooterMenu };
