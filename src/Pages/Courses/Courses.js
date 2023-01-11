import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses,setCourses] = useState();
    useEffect(()=>{
        fetch('https://e-learning-server-psi.vercel.app/courses')
            .then((res)=>res.json())
            .then((data)=>setCourses(data));
    },[])
    return (
        <div>
            {
                courses?.map(course=>                    
                <p key={course.id}>
                     <Link to={`/courses/${course.id}`}>{course.name}</Link>
                </p>
                     )
            }
        </div>
    );
};

export default Courses;