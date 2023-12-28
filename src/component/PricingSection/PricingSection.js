import React, { useState } from 'react'
import '../PricingSection/PricingSection.css'
import { PricingFeaturesData } from './PricingFeaturesData';
import ButtonColor from './ButtonColor';


function PricingSection() {

  const RenderPricingFeatures = PricingFeaturesData.map((feature)=>{
     return(
        <div class="col">
        <div class="card border-0 p-2 bg-light">
           <div class="card-body d-flex flex-column">
              <div class="bg-light rounded">
                 <h3 class="plan_type p-3 rounded text-center">{feature.plan}</h3>
                 <div class="text-center p-4"> <h2>
                       <span class="price fw-bold">${feature.price}</span>
                       /month
                    </h2></div>
                 <div
                    class="available_features_container bg-white border p-3 d-flex flex-column gap-2">
                    <h3 class="text-center fw-medium">Available Features</h3>
                    <div
                       class="d-flex gap-3 border rounded align-content-center p-2">
                       <img src={feature.features[0][0]} alt='available_icon'/>
                       <p class="mt-2">{feature.features[0][1]}</p>
                    </div>
                    <div
                       class="d-flex gap-3 border rounded align-content-center p-2">
                       <img src={feature.features[1][0]} alt='available_icon' />
                       <p class="mt-2">{feature.features[1][1]}</p>
                    </div>
                    <div
                       class="d-flex gap-3 border rounded align-content-center p-2">
                       <img src={feature.features[2][0]} alt='available_icon'/>
                       <p class="mt-2">{feature.features[2][1]}</p>
                    </div>
                    <div
                       class="d-flex gap-3 border rounded align-content-center p-2">
                       <img src={feature.features[3][0]} alt='available_icon' />
                       <p class="mt-2">{feature.features[3][1]}</p>
                    </div>
                    <div
                       class="d-flex gap-3 border rounded align-content-center p-2">
                       <img src={feature.features[4][0]} alt='available_icon'/>
                       <p class="mt-2">{feature.features[4][1]}</p>
                    </div>
                    <div
                       class="d-flex gap-3 border rounded align-content-center p-2">
                       <img src={feature.features[5][0]} alt='unavailable_icon' />
                       <p class="mt-2">{feature.features[5][1]}</p>
                    </div>
                    <div
                       class="d-flex gap-3 border rounded align-content-center p-2">
                       <img src={feature.features[6][0]} alt='available_icon' />
                       <p class="mt-2">{feature.features[6][1]}</p>
                    </div>
                 </div>
                 <button
                    class="get_started_button border-0 w-100 fw-bold text-white">Get
                    it Started</button>
    
              </div>
           </div>
        </div>
        </div>
     )
  })

  return (
    <React.Fragment>
         <div className='container mt-5 mb-5'>
         <section
            className="pricing_description d-flex justify-content-md-center row mb-5">
            <div
               className='bg-white rounded d-flex gap-1  mt-sm-2 p-2'
               style={{width: "200px"}}>
               <button class="monthly_button text-white border-0 rounded p-3" 
              ><b>Monthly</b></button>
               <button class="yearly_button border-0 rounded p-3"><b>Yearly</b></button>
            </div>
         </section>
         <div className='row row-cols-1 row-cols-md-2 g-4 bg-white rounded p-4'>
            {RenderPricingFeatures}
         </div>
         </div>
    </React.Fragment>
  )
};

export default PricingSection;