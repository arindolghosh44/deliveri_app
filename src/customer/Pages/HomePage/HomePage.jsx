import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarosel from "../../components/HomeSectionCarosuel/HomeSectionCarosel";
import { Men_kurta } from "../../../Data/Men_kurta";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-1 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel data={Men_kurta}  sectionName={"Men Kurta"}/>
        <HomeSectionCarosel data={Men_kurta} sectionName={"Men Shoes"}/>
        <HomeSectionCarosel data={Men_kurta} sectionName={"women sharee"}/>
        <HomeSectionCarosel data={Men_kurta} sectionName={"women Shoes"}/>
        <HomeSectionCarosel data={Men_kurta} sectionName={"women nightsuits"}/>
       
      </div>
      
    </div>
  );
};

export default HomePage;
