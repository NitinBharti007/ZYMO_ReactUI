import React from 'react';
import Navbar from './component/Navbar';
import MainSection from './component/MainSection';
import WhyZymo from './component/WhyZymo';
import ZymoBenifits from './component/ZymoBenefits';
import ReferAndEarn from './component/ReferAndEarn';
import CarSelection from './component/CarSelection';
import FeaturedIn from './component/FeaturedIn';
import Testimonials from './component/Testimonials';
import CompareAndChoose from './component/CompareAndChoose';
import YouTubeVideo from './component/YoutubeVid';
import FAQ from './component/FAQ';
import Search from './component/Search';
import Services from './component/Services';
import Footer from './component/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <MainSection/>
      <WhyZymo/>
      <ZymoBenifits/>
      <ReferAndEarn/>
      <CarSelection/>
      <FeaturedIn/>
      <Testimonials/>
      <CompareAndChoose/>
      <YouTubeVideo/>
      <FAQ/>
      <Search/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
