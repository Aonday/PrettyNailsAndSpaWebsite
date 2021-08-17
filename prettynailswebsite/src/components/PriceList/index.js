import React,{useState} from 'react'
/*import { Document, Page, pdfjs } from 'react-pdf';*/
/*import prettynailspricelist from "/prettynailspricelist.pdf";*/
import pricelistpic from '../../images/prettynailspricelistpic.png';
import {
    pricy, PriceListContainer
  
} from './PriceListElements';

  
const PriceList = () => {
  
    return (
        <div>
            <PriceListContainer>
            <img className="menuphoto" src={pricelistpic} alt="MENU" width="100%" height="100%"/>
            </PriceListContainer>
        </div>
    );
};


export default PriceList;


