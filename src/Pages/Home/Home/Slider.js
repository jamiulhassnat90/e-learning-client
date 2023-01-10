import React from 'react';

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
          <img
            
            src="https://i.ibb.co/3fKC1jZ/istockphoto-1059546642-1024x1024.jpg"
            alt="Old Furniture Shop"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/YZ7NsvC/istockphoto-1319504124-1024x1024.jpg"
            alt="Old Furniture Shop"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/PZP97kr/istockphoto-1343476473-1024x1024.jpg"
            alt="Old Furniture Shop"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
        </div>
    );
};

export default Slider;