import './App.css';
import { Routes, Route } from "react-router-dom";
import React from "react";
import MainPage from "./pages/MainPage";
import InfoBar from "./components/CommonComponents/InfoBar";
import Navbar from "./components/CommonComponents/Navbar";
import ServicesDetailsPage from "./pages/ServicesDetailsPage";
import ContactUsForm from "./components/HomePageComponents/ContactUs";
import Footer from "./components/CommonComponents/Footer";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GetQuote from "./pages/FreeQuote";

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
                <Route path='/servicedetails' element={<ServicesDetailsPage/>}></Route>
                 <Route path='/quote' element={<GetQuote/>}></Route>
             </Routes>
             <Footer/>
         </ThemeProvider>
     </>
  );
}

export default App;
