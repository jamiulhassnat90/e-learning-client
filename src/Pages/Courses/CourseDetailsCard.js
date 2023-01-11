import React from "react";

const CourseDetailsCard = ({ catagoryInfo }) => {
  const {title,details} = catagoryInfo;
  return (
    <div className="flex flex-col">
      <div className="card w-50 bg-white-800 text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-black">{title}</h2>
          <p className="text-green-500">{details.split(/\s+/).slice(0, 20).join(" ")}</p>
          <div className="card-actions justify-end">
            <button className="btn">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsCard;
