import React from 'react'
import { Benefitlist } from './BenefitData'
import benefitImage from '../../assets/img/benefit_arrow.svg'
// import '../BenefitSection/BenefitSection.css'


function BenefitSection() {
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

            <div className='d-flex flex-column gap-2'>
                <div className="row gap-1">
                    {Benefitlist.filter(benefit => {
                        return (benefit.id <= 3);
                    }).map((benefit) => (
                            <div class="col-md  benefit_sub_container bg-white   p-4 rounded ms-1"
                            >
                                <div class="number_container d-flex justify-content-end"><h1>{benefit.benefit_number}</h1></div>
                                <div class="benefit_text_container">
                                    <h4>{benefit.title}</h4>
                                    <p>{benefit.desc}</p>
                                </div>
                                <div
                                    class="benefit_button_container d-flex justify-content-end">
                                    <button class="rounded border-0 "><img
                                        src={benefitImage} alt='benefitImage'/></button>
                                </div>
                            </div>
                    ))}
                </div>
                <div className="row gap-1">
                    {Benefitlist.filter(benefit => {
                        return (benefit.id >3);
                    }).map((benefit) => (
                              <div class="col-md benefit_sub_container bg-white  p-4 rounded ms-1"
                            >
                                <div class="number_container d-flex justify-content-end"><h1>{benefit.benefit_number}</h1></div>
                                <div class="benefit_text_container">
                                    <h4>{benefit.title}</h4>
                                    <p>{benefit.desc}</p>
                                </div>
                                <div
                                    class="benefit_button_container d-flex justify-content-end">
                                    <button class="rounded border-0 "><img
                                        src={benefitImage} alt='benefitImage'/></button>
                                </div>
                            </div>
                    ))}
                </div>
            </div>    
            </div>
        </React.Fragment>
    )
}

export default BenefitSection;