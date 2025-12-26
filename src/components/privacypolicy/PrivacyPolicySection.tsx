import React from "react";

const PrivacyPolicySection: React.FC = () => {
  return (
    <>
      <section className="breadcrumb-section fix bg-cover">
        <div className="container">
          <div className="row">
            <div className="page-heading">
              <h2 className="char-animation">Privacy Policy</h2>
              <p className="fade-in">
                We prioritize your privacy through responsible data handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-policy-section fix section-padding">
        <div className="container">
          <div className="privacy-policy-wrapper">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="privacy-policy-content">
                  <div className="section-title text-center mb-4">
                    <span className="fade-in">Our Commitment</span>
                    <h2 className="char-animation">
                      Privacy Policy for CodeLinkup
                    </h2>
                  </div>

                  <div className="privacy-content">
                    <p className="mb-4">
                      This Privacy Policy explains how CodeLinkup collects,
                      uses, and safeguards your information when you visit our website or use our services.
                    </p>

                    <div className="policy-section mb-5">
                      <h3 className="mb-3">
                        <i className="flaticon-check-circle"></i>
                        Information We Collect
                      </h3>
                      <p className="mb-3">
                        We may collect the following types of information:
                      </p>
                      <ul className="list-items">
                        <li>
                          <i className="flaticon-check"></i>
                          Personal details such as name, email address, phone number, and company information
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Usage data including IP address, browser type, and website navigation patterns
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Information provided through contact forms or service inquiries
                        </li>
                      </ul>
                    </div>

                    <div className="policy-section mb-5">
                      <h3 className="mb-3">
                        <i className="flaticon-shield"></i>
                        How We Use Your Information
                      </h3>
                      <p className="mb-3">
                        Your information helps us provide better services:
                      </p>
                      <ul className="list-items">
                        <li>
                          <i className="flaticon-check"></i>
                          Respond to your inquiries and provide customer support
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Improve our website and services based on user feedback
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Send relevant updates and marketing communications (with consent)
                        </li>
                      </ul>
                    </div>

                    <div className="policy-section mb-5">
                      <h3 className="mb-3">
                        <i className="flaticon-lock"></i>
                        Your Rights
                      </h3>
                      <p className="mb-3">
                        You have the following rights regarding your personal data:
                      </p>
                      <ul className="list-items">
                        <li>
                          <i className="flaticon-check"></i>
                          Access and review your personal information
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Request correction or deletion of your data
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Withdraw consent for marketing communications
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Request data portability
                        </li>
                      </ul>
                    </div>

                    <div className="policy-section mb-5">
                      <h3 className="mb-3">
                        <i className="flaticon-cookie"></i>
                        Cookies and Tracking
                      </h3>
                      <p className="mb-3">
                        We use cookies and similar technologies to enhance your browsing experience and analyze website traffic.
                        You can control cookie preferences through your browser settings.
                      </p>
                    </div>

                    <div className="policy-section">
                      <h3 className="mb-3">
                        <i className="flaticon-phone-call"></i>
                        Contact Us
                      </h3>
                      <p className="mb-4">
                        If you have any questions about this Privacy Policy or our data practices,
                        please contact us:
                      </p>
                      <div className="contact-info">
                        <div className="info-item mb-2">
                          <strong>Email:</strong> info@codelinkup.com
                        </div>
                        <div className="info-item">
                          <strong>Phone:</strong> +91 120-4178702
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicySection;
