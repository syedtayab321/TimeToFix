import './App.css';
import { Routes, Route } from "react-router-dom";
import React from "react";
import MainPage from "./pages/MainPage";
import InfoBar from "./components/CommonComponents/InfoBar";
import Navbar from "./components/CommonComponents/Navbar";
import ServicesDetailsPage from "./pages/ServicesDetailsPage";
import Footer from "./components/CommonComponents/Footer";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GetQuote from "./pages/FreeQuote";
import AcServicePage from "./pages/AcServicePage";
import DuctCleaningPage from "./pages/DuctCleaningPage";
import BlogPosts from "./components/HomePageComponents/BlogPosts";
import UserReviews from "./components/HomePageComponents/Reviews";
import AboutUs from "./components/HomePageComponents/AboutUs";
import FaqPage from "./pages/Faqs";
import ComparisonPage from "./pages/ComparisonPage";

const theme = createTheme({
  palette: {
    primary: { main: '#3f51b5' },
    secondary: { main: '#f50057' },
  },
});
function App() {
  return (
     <>
         <ThemeProvider theme={theme}>
             <InfoBar />
             <Navbar />
             <Routes>
                <Route path="/" element={<MainPage />} />
                 <Route path="/blogs" element={<BlogPosts />} />
                 <Route path="/reviews" element={<UserReviews />} />
                 <Route path="/aboutus" element={<AboutUs />} />
                 <Route path="/faqs" element={<FaqPage/>} />
                  <Route path="/comparison" element={<ComparisonPage/>} />
                 <Route path='/servicedetails' element={<ServicesDetailsPage/>}></Route>
                 <Route path='/quote' element={<GetQuote/>}></Route>
                 <Route path='/acService' element={<AcServicePage/>}></Route>
                 <Route path='/DuctCleaningService' element={<DuctCleaningPage/>}></Route>
             </Routes>
             <Footer/>
         </ThemeProvider>
     </>
  );
}

export default App;
