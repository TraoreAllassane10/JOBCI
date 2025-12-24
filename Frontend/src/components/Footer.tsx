import { Facebook, Instagram } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mx-5 mt-10 flex justify-between">
      <div className="flex gap-2 place-items-center text-(--text-secondary)">
        <Logo />
        <span> | Copyright @ Allassane Traore | </span>
        <span>Tous les droits sont réservés</span>
      </div>

      <div className="flex gap-2 place-items-center">
        <Link to="/">
          <Facebook />
        </Link>
        <Link to="/">
          <Instagram />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
