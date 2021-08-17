// THIS PAGE WILL BE THE HOME PAGE
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoNailSection from '../components/InfoNailSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import { nailSectionObj } from '../components/InfoNailSection/Datas';


const Home = () => {
 
    
    return (
        // THE ORDERING OF THIS WILL AFFECT THE LAYERING/LAYOUT OF COMPNENTS, info, pass in the data that has already 
        // been created in infosection -> Data.js (go to inforsecion->index.js to actuall pass in the changes)
        <div>
            <HeroSection />
            <InfoNailSection {...nailSectionObj} /> 
            <InfoSection {...homeObjOne} /> 
            <InfoSection {...homeObjTwo} /> 
            <InfoSection {...homeObjThree} />   
            <Footer />
        </div>
    )
    }

export default Home;




