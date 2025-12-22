import React from "react";
import HeaderSection from "../header/HeaderSection";
import CtaSection6 from "../cta/CtaSection6";
import ContactInfoSection from "../contact/ContactInfoSection";
import FooterSection from "../footer/FooterSection";
import SectionErrorBoundary from "../error-boundaries/SectionErrorBoundary";
import MobileMenuModal from "../modal/MobileMenuModal";
import { useCustomContext } from "../../context/context";
interface Props {
  children: React.ReactNode;
}
const CustomLayout = ({ children }: Props) => {
  const { isMenuOpen, toggleMobileMenu } = useCustomContext();
  return (
    <>
      <SectionErrorBoundary sectionName="Header">
        <HeaderSection />
      </SectionErrorBoundary>

      {children}

      <SectionErrorBoundary sectionName="CTA">
        <CtaSection6 variant />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="Contact Info">
        <ContactInfoSection />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="Footer">
        <FooterSection />
      </SectionErrorBoundary>
      <SectionErrorBoundary sectionName="Mobile Menu">
        <MobileMenuModal isOpen={isMenuOpen} toggle={toggleMobileMenu} />
      </SectionErrorBoundary>
    </>
  );
};

export default CustomLayout;
