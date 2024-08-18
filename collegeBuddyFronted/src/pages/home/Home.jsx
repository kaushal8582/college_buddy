import React from "react";
import Nav from "../../components/navComponent/Nav";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import AboutComponent from "../../components/aboutComponent/AboutComponent";
import OurCoursesComponent from "../../components/ourCourse/OurCoursesComponent.jsx";
import OurResourceComponent from "../../components/OurResource/OurResourceComponent.jsx";
import ConsultancyComponent from "../../components/consultancy/ConsultancyComponent .jsx";
import FooterComponent from "../../components/footerComponents/FooterComponent.jsx";
import TestimonialCard from "../../components/testimonialCard/TestimonialCard.jsx";
import FeedbackSection from "../../components/Feedbacks/FeedbackSection.jsx";
import NavbarMenu from "../../components/Navigation/NavbarMenu.jsx";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutComponent />
      <OurCoursesComponent />
      <FeedbackSection />
      <OurResourceComponent />
      <ConsultancyComponent />
    </Layout>
  );
};

export default Home;
