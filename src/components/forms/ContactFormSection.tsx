import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import clsx from "clsx";

interface Props {
  variant?: boolean;
}

const ALERT_DURATION = 4000;

const ContactFormSection = ({ variant }: Props) => {
  const [alert, setAlert] = useState<{
    type: "success" | "danger";
    message: string;
  } | null>(null);

  // Auto-dismiss alert
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), ALERT_DURATION);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      const form = e.currentTarget;

      const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
      const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
      const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
      const subject = (form.elements.namedItem("subject") as HTMLInputElement).value.trim();
      const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

      setAlert(null);

      if (!name) {
        e.preventDefault();
        setAlert({ type: "danger", message: "Name is required." });
        toast.error("Please enter your name.");
        return;
      }

      if (!email || !validateEmail(email)) {
        e.preventDefault();
        setAlert({ type: "danger", message: "Valid email is required." });
        toast.error("Invalid email address.");
        return;
      }

      if (!phone) {
        e.preventDefault();
        setAlert({ type: "danger", message: "Phone number is required." });
        toast.error("Please enter your phone number.");
        return;
      }

      if (!subject || subject.length < 3) {
        e.preventDefault();
        setAlert({ type: "danger", message: "Subject must be at least 3 characters." });
        toast.error("Invalid subject.");
        return;
      }

      if (!message || message.length < 10) {
        e.preventDefault();
        setAlert({
          type: "danger",
          message: "Message must be at least 10 characters long.",
        });
        toast.error("Message is too short.");
        return;
      }

      // ✅ allow FormSubmit
      toast.success("Sending message...");
    },
    []
  );

  return (
    <div role="region" aria-labelledby="contact-form-heading">
      <form
        action="https://formsubmit.co/codewithfaiz@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
        className="contact-form-box fade-in"
      >
        {/* FormSubmit config */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New Contact Message" />
        <input type="hidden" name="_template" value="table" />

        <div
          className={`row g-4 align-items-center ${
            variant ? "justify-content-center" : ""
          }`}
        >
          <div className="col-lg-6 col-md-6">
            <div className="form-clt">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="form-clt">
              <input type="email" name="email" id="email2" placeholder="Email address" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="form-clt">
              <input type="tel" name="phone" id="phone" placeholder="Phone number" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="form-clt">
              <input type="text" name="subject" id="subject" placeholder="Your subject" />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-clt">
              <textarea
                name="message"
                id="message"
                placeholder="Write a message..."
              />
            </div>
          </div>

          <div className="col-lg-12">
            <div className={variant ? "contact-button text-center" : ""}>
              <button type="submit" className={clsx("theme-btn")}>
                {variant ? "Send Your Message" : "Contact Us"}
                <i className="far fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        {alert && (
          <div className={`alert alert-${alert.type} mt-3`} role="alert">
            {alert.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactFormSection;
