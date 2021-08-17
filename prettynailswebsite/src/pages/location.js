import React from 'react'
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import { homeObjFour } from '../components/InfoSection/Data';
import Googlemap from '../components/Googlemap';
/*<InfoSection {...homeObjFour} />*/
const Location = () => {
    return (
        <div>
            
            <Googlemap/>
            <Footer />
        </div>
    );
};

export default Location;
