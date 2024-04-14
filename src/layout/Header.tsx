import Link from "components/shared/Link";
import { Link as CustomLink } from "react-router-dom";
import { links } from "./links";
import Logo from "assets/svg/logo.svg";

export function Header() {
  return (
    <header className="container mx-auto px-10  border-b border-gray-normal py-sp6">
      <nav className="flex justify-between items-center">
        <CustomLink draggable={false} to="/">
          <img src={Logo} alt="Logo" className="text-primary" />
        </CustomLink>
        <ul className="list-disc gap-sp10 md:flex hidden">
          {links.map((link, key) => (
            <li key={key}>
              <Link to={link.link} className="body-1" variant="primary">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to={"/transactions"}
          className="body-1 marker:text-secondary hover:border-secondary"
          variant="primary"
        >
          Recent transactions
        </Link>

      </nav>
    </header>
  );
}
