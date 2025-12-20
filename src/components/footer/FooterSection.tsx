import { Link } from "react-router-dom";
import NewsletterForm from "../forms/NewsletterForm";
import FooterBottomSection from "./FooterBottomSection";
import Image from "../utils/Image";



const FooterSection = () => {
  return (
    <section
  className="footer-section fix"
  style={{ backgroundColor: "#6c57d2" }}
>
      <div className="container">
        <div className="footer-widget-wrapper">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-footer-widget"
                data-aos="fade-up"
                data-aos-delay="200" // stagger delay for each card
                data-aos-duration="1000" // smooth animation duration
                data-aos-easing="ease-out-cubic" // smooth easing
                data-aos-once="true"
              >
                <div className="widget-head">
                  <Link to="/">
                    <Image
                      src="assets\img\footer\footer-logo.png"
                      alt="img"
                      width={100}
                      height={90}
                    />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    CodelinkUp is your trusted partner for comprehensive SEO and
                    digital marketing solutions.
                  </p>
                  <div className="social-icon">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-dribbble"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5">
              <div
                className="single-footer-widget"
                data-aos="fade-up"
                data-aos-delay="400" // stagger delay for each card
                data-aos-duration="1000" // smooth animation duration
                data-aos-easing="ease-out-cubic" // smooth easing
                data-aos-once="true"
              >
                <div className="widget-head">
                  <h3>Our Services</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link to="/service">Digital Marketing solutions</Link>
                  </li>
                  <li>
                    <Link to="/service">Web Development</Link>
                  </li>
                  <li>
                    <Link to="/service">App Development</Link>
                  </li>
                  <li>
                    <Link to="/service">Custom Software Development</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-2">
              <div
                className="single-footer-widget"
                data-aos="fade-up"
                data-aos-delay="600" // stagger delay for each card
                data-aos-duration="1000" // smooth animation duration
                data-aos-easing="ease-out-cubic" // smooth easing
                data-aos-once="true"
              >
                <div className="widget-head">
                  <h3>Quick Link</h3>
                </div>
                <ul className="footer-contect">
                  <li>
                    <div className="icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="content">
                      <h5>Call Us</h5>
                      <p>
                        <a href="tel:+00479394888">+00 (47) 939 4888</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="content">
                      <h5>Mail Us</h5>
                      <p>
                        <a
                          href="mailto:info@codelinkup.com"
                          className="text-white"
                        >
                          info@codelinkup.com
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="content">
                      <h5>New York, USA</h5>
                      <p className="text-white">27 Division 10002 Main road</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-footer-widget"
                data-aos="fade-up"
                data-aos-delay="800" // stagger delay for each card
                data-aos-duration="1000" // smooth animation duration
                data-aos-easing="ease-out-cubic" // smooth easing
                data-aos-once="true"
              >
                <div className="widget-head">
                  <h3>Subscribe Our Newsletter</h3>
                </div>
                <div className="footer-content">
                  <p>
                    Stay updated with our latest news and offers. Subscribe to our
                    newsletter.
                  </p>
                  <NewsletterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBottomSection />
    </section>
  );
};

export default FooterSection;
