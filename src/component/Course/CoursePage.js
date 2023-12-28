import {React,useState} from 'react'
import Course from './Course'
import CourseOpenPage from './CourseOpenPage'

function CourseContent() {
    const [state, setState] = useState('courses')
    return (
        <div>
            {state === 'courses' && (
                <Course viewCourse={() => setState('coursePage')} />
            )}

            {state === 'coursePage' && <CourseOpenPage/>}
        </div>
    )
}

export default CourseContent;