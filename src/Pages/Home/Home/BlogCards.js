import React from "react";
import { Link } from "react-router-dom";

const BlogCards = () => {
  return (
    <div>      

        <h3 className="text-center mt-10 text-green-500 text-3xl font-bold">Latest blogs</h3>
        <div className="divider"></div> 
   
    <div className="flex flex-col sm:flex-row lg:space-x-6 justify-center mt-10">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className="max-h-40">
          <img src="https://i.ibb.co/C6wbZsk/zhnn5s13hmguxkhwtgqh.webp" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Why are you using firebase?</h2>
          <p>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works...</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary"><Link to={"/blog"}>Read more</Link></button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className="max-h-40">
          <img src="https://i.ibb.co/Kj32B58/1-k-JDkep-Po-Jw-Mf-15sp-FBs-VQ.png" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">why we use node js?</h2>
          <p>Because Node. js is single-threaded, we use it primarily for non-blocking, event-driven servers...</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary"><Link to={"/blog"}>Read more</Link></button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className="max-h-40">
          <img src="https://i.ibb.co/PZrtNZ9/d2kflp5t0kl302gfq567.webp" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">What is private route?</h2>
          <p> PrivateRoute component is the blueprint for all private routes in the application. If the user...</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary"><Link to={"/blog"}>Read more</Link></button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BlogCards;
