import ChatWidget from "../Components/ChatWidget"
import ContactPage from "../Components/ContactPage"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import ScrollButton from "../Components/ScrollButton"
import SubHero from "../Components/SubHero"
import withSEO from '../HOC/withSEO';

function Contact() {
  return(
    <>
    <Navbar/>
    <SubHero
        sName="sub-hero"
        sText="Contact Us"
        />
        <div className="container"><ContactPage/></div>
    
    <ScrollButton/>
    <ChatWidget/>
    <Footer/>
    </>
  )
}
export default withSEO(Contact, 'Contact Us | VR2 Technologies', 'digital marketing company, business growth, global audience, ROI, competitive edge', 'Feel free to reach out through the contact form or find our contact information below to explore how we can boost your business growth and achieve success.');