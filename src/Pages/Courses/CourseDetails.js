import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CourseDetailsCard from './CourseDetailsCard';
import Courses from './Courses';

const CourseDetails = () => {
    const info = useLoaderData();
    return (
        <div className="container">
            <h3 className="text-center mt-2 mt-md-3">Our Courses </h3>
            <div className="border-4 m-2">
            <Courses></Courses>
            </div>
            <div className="flex flex-col sm:flex-row lg:space-x-6 justify-center " >
                {
                    info?.map(catInfo=><CourseDetailsCard 
                        key={catInfo.id}
                        catagoryInfo={catInfo}                    
                    ></CourseDetailsCard>                        
                        )
                }
            </div>
            
        </div>
    );
};

export default CourseDetails;