import React from 'react';

const CookiePoliciesSection: React.FC = () => {
  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="breadcrumb-section fix bg-cover">
        <div className="container">
          <div className="row">
            <div className="page-heading">
              <h2 className="char-animation">Cookie Policy</h2>
              <p className="fade-in">
                Your data privacy and protection are our top priorities under GDPR regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COOKIE POLICY CONTENT ================= */}
      <section className="gdpr-section fix section-padding">
        <div className="container">
          <div className="gdpr-wrapper">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="gdpr-content">
                  <div className="section-title text-center mb-5">
                    <span className="fade-in">Cookie Policy</span>
                    <h2 className="char-animation">
                      Cookies Policy
                    </h2>
                    <p className="mt-2 text-muted">
                      <strong>Effective Date:</strong> December 26, 2025
                    </p>
                  </div>

                  <div className="gdpr-content-wrapper">
                    <div className="policy-section mb-5">
                      <h3 className="mb-3">
                        <i className="flaticon-cookie"></i>
                        What Are Cookies?
                      </h3>
                      <p className="mb-3">
                        Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and understanding how you use our site. This Cookies Policy explains what cookies are, how we use them, and your choices regarding cookies.
                      </p>
                    </div>

                    <div className="policy-section mb-5">
                      <h3 className="mb-3">
                        <i className="flaticon-settings"></i>
                        How We Use Cookies
                      </h3>
                      <p className="mb-3">
                        We use cookies for several purposes:
                      </p>
                      <ul className="mb-3">
                        <li>• Improve website performance and load times</li>
                        <li>• Remember preferences and session activity</li>
                        <li>• Analyze traffic and interaction trends</li>
                        <li>• Enable security features and prevent fraud</li>
                        <li>• Personalize content and advertisements</li>
                      </ul>
                      <p className="mb-3">
                        By using our website, you consent to the use of cookies in accordance with this policy. You can manage your cookie preferences through your browser settings, but please note that disabling cookies may affect your experience on our site.
                      </p>
                    </div>

                    <div className="policy-section mb-5">
                      <h3 className="mb-3">
                        <i className="flaticon-list"></i>
                        Types of Cookies We Use
                      </h3>
                      <ol className="mb-3">
                        <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable core functionality such as page navigation, access to secure areas, and basic site features.</li>
                        <li><strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously. This allows us to improve our site's performance (e.g., Google Analytics).</li>
                        <li><strong>Functionality Cookies:</strong> These remember choices you make to improve your experience, such as language preferences or region settings.</li>
                        <li><strong>Advertising Cookies:</strong> These are used to deliver relevant advertisements to you based on your interests. They may also limit the number of times you see an ad.</li>
                        <li><strong>Third-Party Cookies:</strong> These are set by external services that appear on our pages, such as social media plugins or embedded content from YouTube or LinkedIn.</li>
                      </ol>
                    </div>

                    <div className="policy-section mb-5">
                      <h3 className="mb-3">
                        <i className="flaticon-privacy"></i>
                        Managing Your Cookie Preferences
                      </h3>
                      <p className="mb-3">
                        You have the right to decide whether to accept or reject cookies. You can control cookies through your browser settings. Here are links to help you manage cookies in popular browsers:
                      </p>
                      <ul className="mb-3">
                        <li><a href="https://support.google.com/chrome/answer/95647"
                                className="text-sky-600 underline">Google Chrome</a></li>
                        <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies"
                                className="text-sky-600 underline">Mozilla Firefox</a></li>
                        <li><a href="https://support.microsoft.com/en-us/microsoft-edge"
                                className="text-sky-600 underline">Microsoft Edge</a></li>
                        <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                                className="text-sky-600 underline">Safari</a></li>
                      </ul>
                      <p className="mb-3">
                        Please note that if you disable cookies, some features of our website may not function properly.
                      </p>
                    </div>

                    <div className="policy-section mb-5">
                      <h3 className="mb-3">
                        <i className="flaticon-update"></i>
                        Updates to This Policy
                      </h3>
                      <p className="mb-3">
                        We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page.
                      </p>
                    </div>

                    <div className="policy-section mb-5">
                      <h3 className="mb-3">
                        <i className="flaticon-contact"></i>
                        Contact Us
                      </h3>
                      <p className="mb-3">
                        If you have any questions about this Cookies Policy or our use of cookies, please contact us:
                      </p>
                      <ul className="mb-3">
                        <li><strong>Email:</strong> <a href="mailto:info@codelinkup.com"
                                className="text-sky-600 underline">info@codelinkup.com</a></li>
                        <li><strong>Phone:</strong> +00 (47) 939 4888</li>
                        <li><strong>Address:</strong>A 27/G, Sector 16, Noida, Gautam Budha Nagar U.P. - 201301</li>
                      </ul>
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

export default CookiePoliciesSection;
