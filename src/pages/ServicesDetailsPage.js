import React from 'react';
import ServiceDashboard from "../components/ServiceDetailsComponents/ServiceMainPage";
import ServiceItemList from "../components/ServiceDetailsComponents/ServiceItemList";
import WhyChooseThisService from "../components/ServiceDetailsComponents/WhyChooseThisService";
import CostCalculator from "../components/ServiceDetailsComponents/ServiceCostCalculator";

export default function ServicesDetailsPage() {
  return (
     <>
         <ServiceDashboard/>
         <ServiceItemList/>
         <WhyChooseThisService/>
         <CostCalculator/>
     </>
  );
}
