import "../styles/Footer.css";
import { socialLinks } from "./data";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        {socialLinks.map(({ id, href, icon }) => {
          return (
            <a key={id} href={href}>
              {icon}
            </a>
          );
        })}
      </div>
      <p>&copy; {new Date().getFullYear()} Rohitashva.com</p>
    </div>
  );
};

export default Footer;
