import { Link } from "react-router-dom";

interface Props {
  variant?: boolean;
}
const FooterBottomSection = ({ variant }: Props) => {
  return (
    <div className={`footer-bottom ${variant ? "bg-4" : ""}`}>
      <div className="container">
        <div className="footer-wrapper d-flex align-items-center justify-content-between">
          <p>
            Copyright {new Date().getFullYear()} All - Rights Reserved By Codelinkup
          </p>

          <ul className="footer-menu">
            <li>
              <Link to="/privacy">Privacy policy.</Link>
            </li>
            <li>
              <Link to="/termsandconditions">Terms And Conditions.</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterBottomSection;
