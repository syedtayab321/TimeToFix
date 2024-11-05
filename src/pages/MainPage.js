import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/home.css';
import Home from "../components/HomePageComponents/HomePageComponent";
import MaintenanceStats from "../components/HomePageComponents/Mantainance";
import Services from "../components/HomePageComponents/Services";
import AboutUs from "../components/HomePageComponents/AboutUs";
import UserReviews from "../components/HomePageComponents/Reviews";
import BlogPosts from "../components/HomePageComponents/BlogPosts";
import OurHistory from "../components/HomePageComponents/OurHostory";
import ContactUsForm from "../components/HomePageComponents/ContactUs";
export default function MainPage() {
  return (
    <>
        <Home/>
        <MaintenanceStats/>
        <Services/>
        <AboutUs/>
        <UserReviews/>
        <BlogPosts/>
        <OurHistory/>
        <ContactUsForm/>
    </>
  );
}
