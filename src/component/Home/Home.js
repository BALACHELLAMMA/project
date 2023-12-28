import React from 'react'
import AbstractIcon from '../../assets/img/Abstract Line.svg'
import LightiningIcon from '../../assets/img/lightining_icon.svg'
import zapier from '../../assets/img/zapier_icon.svg'
import spotify from '../../assets/img/spotify_icon.svg'
import zoom from '../../assets/img/zoom_icon.svg'
import amazon from '../../assets/img/amazon_icon.svg'
import adobe from '../../assets/img/adobe_icon.svg'
import notion from '../../assets/img/notion_icon.svg'
import netflix from '../../assets/img/netflix_icon.svg'
import videoImg from '../../assets/img/video_img.svg'

import '../../component/Home/Home.css'

import { Link } from 'react-router-dom'
import CourseSection from '../CourseSection/CourseSection'
import TestimonialSection from '../TestimonialSection/TestimonialSection'
import PricingSection from '../PricingSection/PricingSection'
import FAQSection from '../FAQSection/FAQSection'
import BenefitSection from '../BenefitSection/BenefitSection'


function Home() {
  return (
    <div className=''>
      <section className="hero_section container 
      d-flex flex-column align-items-center justify-content-center">
        <div className="position-relative  p-4">
          <img src={AbstractIcon} alt="abstract_icon"
            className="position-absolute top-0 start-0" />
          <div
            className="hero_section_heading rounded bg-white d-flex p-2 gap-3 w-100">
            <img src={LightiningIcon} alt="lightining_icon" id="lightining_icon" />
            <h1 className="fw-medium fs-md-3 fs-sm-6 mt-md-3 mt-sm-2"><span>Unlock</span>
              Your Creative Potential</h1>
          </div>
        </div>
        <h4 className="text-wrap text-center">with Online Design and Development
          Courses.</h4>
        <p className="text-center fw-medium text-wrap">Learn from Industry Experts
          and Enhance Your Skills.</p>
        <div className="view_pricing_explore_courses d-flex gap-3">
          <button className="explore_courses_button text-white fw-medium rounded border-0 p-2">Explore
            Courses</button>
          <button className="view_pricing_button bg-white rounded border-0 fw-medium">View
            Pricing</button>
        </div>
      </section>

      <section className="container card_section mt-5">
         <div
           className="card_container  d-flex  bg-white rounded p-3 row ">
           <div className="img_container border col  p-md-4">
             <Link>
               <img src={zapier} alt="zapier" className="card-img"/>
             </Link>
           </div>
           <div className="img_container col p-md-4">
             <Link>
               <img src={spotify} alt="spotify" className="card-img" />
             </Link>
           </div>
           <div className="img_container col  p-md-4 p-3">
             <Link>
               <img src={zoom} alt="zoom" className="card-img" />
             </Link>
           </div>
           <div className="img_container col  p-md-4 p-3">
             <Link>
               <img src={amazon} alt="amazon" className="card-img"/>
             </Link>
           </div>
           <div className="img_container col  p-md-4 p-3">
             <Link >
               <img src={adobe} alt="adobe" className="card-img"/>
             </Link>
           </div>
           <div className="img_container col p-md-4 p-3">
             <Link href="#">
               <img src={notion} alt="notion" className="card-img" />
             </Link>
           </div>
           <div className=" col p-md-4 p-3">
             <Link href="#">
               <img src={netflix} alt="netflix" className="card-img" />
             </Link>
           </div>
         </div>
       </section>

      <section className='container'>
       <img src={videoImg} className="w-100"/>
      </section>

      <BenefitSection/>
      <CourseSection/>
      <TestimonialSection/>
      <PricingSection/>
      <FAQSection/>
    </div>
  )
}

export default Home;