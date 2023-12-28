import React from 'react';
import { CourseList } from './CourseContent';
import { DescriptionList } from '../Description/Description';

function Course(props) {
 
   const renderCourseList = CourseList.map((course)=>{
    return(
      <section class="course_section container bg-white  p-3 mt-3 mb-3 rounded d-flex flex-column
      gap-4">
               <h1>{course.title}</h1>
         <section
            class="course_description d-flex justify-content-between row mb-2">
            <p class="col-md-8">{course.content}</p>
            <div
               class="col d-flex justify-content-md-end justify-content-sm-start mt-sm-2">
               <button class="bg-light border-0 rounded p-3"
               onClick={props.viewCourse}><b>View All</b></button>
            </div>
         </section>
         <section>
             <div class="d-flex row ">
              <img src={course.images[0]}
               class="col-4 "
               />  
              <img src={course.images[1]} 
               class="col-4"
               />  
              <img src={course.images[2]}
              class="col-4"
              />                 
             </div>
             <div
             class="mt-2 d-flex flex-wrap justify-content-md-between justify-content-start flex-md-row flex-column">
             <div class="duration d-flex gap-2 ">
                <span class="text-center rounded border p-2">{course.duration}</span>
                <span class="text-center rounded border p-2">{course.difficulty_level}</span>
             </div>
             <p class="fw-bold mt-2">{course.instructor}</p>
             </div>
             
             <div class="card mt-2 mb-4">
                <div class="card-header h5 bg-white">Curriculum</div>
                <div class="card-body row d-flex justify-content-evenly">
                    <div class="curriculum col-md-2 col-sm-12 p-3 text-md-center border border-top-0 border-start-0 border-bottom-0 ">
                     <h1>01</h1>
                     <p class="fw-medium">{course.topics[0]}</p> 
                    </div>
                    <div class="curriculum col-md-2 col-sm-12 p-3 text-md-center border border-top-0 border-start-0 border-bottom-0 ">
                     <h1>02</h1>
                     <p class="fw-medium">{course.topics[1]}</p> 
                    </div>
                    <div class="curriculum col-md-2 col-sm-12 p-3 text-md-center border border-top-0 border-start-0 border-bottom-0 ">
                     <h1>03</h1>
                     <p class="fw-medium">{course.topics[2]}</p> 
                    </div>
                    <div class="curriculum col-md-2 col-sm-12 p-3 text-md-center border border-top-0 border-start-0 border-bottom-0 ">
                     <h1>04</h1>
                     <p class="fw-medium">{course.topics[3]}</p> 
                    </div>
                    <div class="col-md-2 col-sm-12 p-3  text-md-center ">
                     <h1>05</h1>
                     <p class="fw-medium">{course.topics[4]}</p> 
                    </div>
                </div>
             </div>
         </section>
     </section>
    );
   })


   return (
         <div className='bg-light'>
         {DescriptionList.filter(description=>{
          return(description.title==='course')
         }).map((description)=>{
            return(
              <section class="description_section container mt-5 mb-5 border-bottom">
              <div class="description_container row ">
                <h1 class="col-md-6 col-12">{description.heading}</h1>
                <p class="col-md-6 col-12">{description.content}</p>
              </div>
            </section>
            );
         })
         }
        
         {renderCourseList}
        </div>
  
  )
}

export default Course;
