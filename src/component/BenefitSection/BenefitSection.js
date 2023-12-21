import React from 'react'
import { Benefitlist } from './BenefitData'
import benefitImage from '../../assets/img/benefit_arrow.svg'



function BenefitSection() {


    const RenderBenefit = Benefitlist.map((benefit) => {
        return (
            <div class="benefit_sub_container bg-white col p-4 rounded "
            style={{width:"370px"}}>
            <div class="number_container d-flex justify-content-end"><h1>{benefit.benefit_number}</h1></div>
            <div class="benefit_text_container">
               <h4>{benefit.title}</h4>
               <p>{benefit.desc}</p>
            </div>
            <div
               class="benefit_button_container d-flex justify-content-end">
               <button class="rounded border-0 "><img
                     src={benefitImage} /></button>
            </div>
         </div>
        );
    });
    return (
        <React.Fragment>
            <div className='container mt-5 mb-5'>
            <h1>Benefits</h1>
             <section
            className="benefits_description d-flex justify-content-between row mb-5">
            <p className="col-md-8">Lorem ipsum dolor sit amet consectetur. Tempus
               tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim
               lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat
               senectus in.</p>
            <div
               class="col d-flex justify-content-md-end justify-content-sm-start mt-sm-2">
               <button class="bg-white border-0 rounded p-3"><b>View All</b></button>
            </div>
            </section>
            {/* <section className="benefits_container container  d-flex flex-column gap-3"> */}
            <div className="row row-cols-md-3 gap-2">
                    {RenderBenefit}
                </div>
            {/* </section> */}
            </div>
        </React.Fragment>
    )
}

export default BenefitSection;