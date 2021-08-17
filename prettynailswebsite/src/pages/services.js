import React from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import PriceList from '../components/PriceList';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Services = () => {
    return (
        <div>
            <PriceList/>
            <InfoSection {...homeObjThree} /> 
            <Footer />
        </div>
    );
};

export default Services;
