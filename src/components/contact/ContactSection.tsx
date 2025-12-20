import ContactFormSection from "../forms/ContactFormSection";
import Image from "../utils/Image";

const ContactSection = () => {
  return (
    <section className="contact-section section-padding bg-cover fix">
      <div className="container">
        <div className="contect-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="section-title mb-0">
                  <span className="fade-in">Contact Us</span>
                  <h2 className="char-animation">
                    Let Us Take Your Product
                    <br /> To The Next Level
                  </h2>
                </div>
                <ContactFormSection />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contect-image float-bob-y">
                <Image
                  src="assets/img/contact/hh-5.webp"
                  alt="img"
                  width={560}
                  height={530}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
