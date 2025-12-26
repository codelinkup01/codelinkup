import React from "react";

const GDPRSection: React.FC = () => {
  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="breadcrumb-section fix bg-cover">
        <div className="container">
          <div className="row">
            <div className="page-heading">
              <h2 className="char-animation">GDPR Compliance</h2>
              <p className="fade-in">
                Your data privacy and protection are our top priorities under GDPR regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GDPR CONTENT ================= */}
      <section className="gdpr-section fix section-padding">
        <div className="container">
          <div className="gdpr-wrapper">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="gdpr-content">
                  <div className="section-title text-center mb-5">
                    <span className="fade-in">Data Protection</span>
                    <h2 className="char-animation">
                      General Data Protection Regulation (GDPR)
                    </h2>
                    <p className="mt-2 text-muted">
                      <strong>Effective Date:</strong> December 2025
                    </p>
                  </div>

                  <div className="gdpr-content-wrapper">
                    <div className="policy-section mb-5">
                      <h3 className="mb-3">
                        <i className="flaticon-shield"></i>
                        Data Controller Responsibilities
                      </h3>
                      <p className="mb-3">
                        As a Data Controller, CodeLinkup is responsible for your personal data under GDPR regulations.
                        We are committed to protecting your privacy and ensuring compliance with all data protection laws.
                      </p>
                    </div>

                    <div className="policy-section mb-5">
                      <h3 className="mb-3">
                        <i className="flaticon-document"></i>
                        Legal Basis for Processing
                      </h3>
                      <p className="mb-3">
                        We collect and process your information based on the following legal grounds:
                      </p>
                      <ul className="list-items">
                        <li>
                          <i className="flaticon-check"></i>
                          Your explicit consent for specific processing activities
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Performance of a contract with you
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Legitimate business interests that don't override your rights
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Compliance with legal obligations
                        </li>
                      </ul>
                      <p className="mt-3">
                        We retain your data only as long as necessary for the purposes outlined or as required by law.
                      </p>
                    </div>

                    <div className="policy-section mb-5">
                      <h3 className="mb-3">
                        <i className="flaticon-user"></i>
                        Your Data Protection Rights
                      </h3>
                      <p className="mb-3">
                        If you're an EEA resident, you have the following rights under GDPR:
                      </p>
                      <ul className="list-items">
                        <li>
                          <i className="flaticon-check"></i>
                          <strong>Access:</strong> Request a copy of your personal data
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          <strong>Rectification:</strong> Correct inaccurate or incomplete data
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          <strong>Erasure:</strong> Request deletion of your personal data
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          <strong>Restrict Processing:</strong> Limit how we use your data
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          <strong>Data Portability:</strong> Receive your data in a structured format
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          <strong>Object:</strong> Object to processing based on legitimate interests
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          <strong>Withdraw Consent:</strong> Withdraw consent at any time
                        </li>
                      </ul>
                    </div>

                    <div className="policy-section mb-5">
                      <h3 className="mb-3">
                        <i className="flaticon-analytics"></i>
                        Log Files & Analytics
                      </h3>
                      <p className="mb-3">
                        We collect certain information automatically through log files, including:
                      </p>
                      <ul className="list-items">
                        <li>
                          <i className="flaticon-check"></i>
                          IP addresses for location and security purposes
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Browser types and versions for compatibility
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Internet Service Providers (ISPs)
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Date and time stamps of visits
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Referring and exit pages
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Click counts and user behavior patterns
                        </li>
                      </ul>
                      <p className="mt-3">
                        This data is used for website analytics, security, and improving user experience. It is not personally identifiable without additional information.
                      </p>
                    </div>

                    <div className="policy-section mb-5">
                      <h3 className="mb-3">
                        <i className="flaticon-cookie"></i>
                        Cookies and Tracking Technologies
                      </h3>
                      <p className="mb-3">
                        We use cookies and similar technologies for various purposes:
                      </p>
                      <ul className="list-items">
                        <li>
                          <i className="flaticon-check"></i>
                          Store user preferences and settings
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Analyze website traffic and user behavior
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Customize user experience and content
                        </li>
                        <li>
                          <i className="flaticon-check"></i>
                          Provide targeted advertising (with consent)
                        </li>
                      </ul>
                      <p className="mt-3">
                        For more information, please see our{" "}
                        <a href="/cookiePolicy" className="text-primary">Cookies Policy</a>.
                      </p>
                    </div>

                    <div className="policy-section mb-5">
                      <h3 className="mb-3">
                        <i className="flaticon-advertising"></i>
                        Google DoubleClick DART Cookies
                      </h3>
                      <p className="mb-3">
                        Google uses DART cookies to serve ads based on your visits to our website and other sites on the internet.
                        You may opt out of the use of DART cookies by visiting the{" "}
                        <a
                          href="https://policies.google.com/technologies/ads"
                          className="text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google Ads Privacy Policy
                        </a>.
                      </p>
                    </div>

                    <div className="policy-section mb-5">
                      <h3 className="mb-3">
                        <i className="flaticon-handshake"></i>
                        Advertising Partners
                      </h3>
                      <p className="mb-3">
                        Our advertising partners may use cookies, JavaScript, and similar technologies for ad tracking and optimization.
                        We do not have control over third-party cookies and recommend reviewing their privacy policies.
                      </p>
                      <ul className="list-items">
                        <li>
                          <i className="flaticon-check"></i>
                          <a
                            href="https://policies.google.com/technologies/ads"
                            className="text-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Google Ad Policies
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="policy-section mb-5">
                      <h3 className="mb-3">
                        <i className="flaticon-external-link"></i>
                        Third-Party Privacy Policies
                      </h3>
                      <p>
                        Our GDPR policy does not apply to external websites or third-party services linked from our site.
                        We encourage you to review the privacy policies of any third-party websites you visit.
                      </p>
                    </div>

                    <div className="policy-section mb-5">
                      <h3 className="mb-3">
                        <i className="flaticon-child"></i>
                        Children's Privacy
                      </h3>
                      <p className="mb-3">
                        We do not knowingly collect personally identifiable information from children under 13 years of age.
                        If you believe your child has provided personal information to us, please contact us immediately.
                      </p>
                    </div>

                    <div className="policy-section mb-5">
                      <h3 className="mb-3">
                        <i className="flaticon-check-circle"></i>
                        Consent & Updates
                      </h3>
                      <p className="mb-3">
                        By using our website, you consent to this GDPR policy and agree to its terms.
                        We may update this policy periodically to reflect changes in our practices or legal requirements.
                      </p>
                    </div>

                    <div className="policy-section">
                      <h3 className="mb-3">
                        <i className="flaticon-phone-call"></i>
                        Contact Information
                      </h3>
                      <p className="mb-4">
                        If you have any questions about this GDPR policy or wish to exercise your data protection rights,
                        please contact us:
                      </p>
                      <div className="contact-info">
                        <div className="info-item mb-2">
                          <strong>Company:</strong> CodeLinkup
                        </div>
                        <div className="info-item mb-2">
                          <strong>Email:</strong> info@codelinkup.com
                        </div>
                        <div className="info-item mb-2">
                          <strong>Phone:</strong> +91 120-4178-702
                        </div>
                        <div className="info-item">
                          <strong>Address:</strong> A 27/G, Sector 16, Noida, Gautam Budha Nagar U.P. - 201301
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

export default GDPRSection;
