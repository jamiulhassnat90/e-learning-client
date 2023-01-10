import React from "react";

const Blog = () => {
  return (
    <div className="text-left bg-slate-100 rounded-3xl m-10 p-10 mx-auto">
      <h1 className="bg-slate-800 text-3xl p-3 text-white rounded">
        {/* //Blog question and answer */}
        Question:1: What is Node? How does Node work?
      </h1>
      <p className="text-bg-slate-400 text-2xl p-10">
        It is used for server-side programming, and primarily deployed for
        non-blocking, event-driven servers, such as traditional web sites and
        back-end API services, but was originally designed with real-time,
        push-based architectures in mind. Every browser has its own version of a
        JS engine, and node. It is a used as backend service where javascript
        works on the server-side of the application. This way javascript is used
        on both frontend and backend. Node. js runs on chrome v8 engine which
        converts javascript code into machine code, it is highly scalable,
        lightweight, fast, and data-intensive.
      </p>
      <h1 className="bg-slate-800 text-3xl p-3 text-white rounded">
        Question:2: How does the private route work?
      </h1>
      <p className="text-bg-slate-400 text-2xl p-10">
        The private route component is similar to the public route, the only
        change is that redirect URL and authenticate condition. If the user is
        not authenticated he will be redirected to the login page and the user
        can only access the authenticated routes If he is authenticated (Logged
        in).
      </p>
      <h1 className="bg-slate-800 text-3xl p-3 text-white rounded">
        Question:3: What is a unit test? Why should we write unit tests?
      </h1>
      <p className="text-bg-slate-400 text-2xl p-10">
        Firebase helps you develop high-quality apps, grow your user base, and
        earn more money. Each feature works independently, and they work even
        better together. Usually, authentication by a server entails the use of
        a user name and password. Other ways to authenticate can be through
        cards, retina scans, voice recognition, and fingerprints.
      </p>
      <h1 className="bg-slate-800 text-3xl p-3 text-white rounded">
        Question:4: what is cors?
      </h1>
      <p className="text-bg-slate-400 text-2xl p-10">
        CORS stands for Cross-Origin Resource Sharing . It allows us to relax
        the security applied to an API. This is done by bypassing the
        Access-Control-Allow-Origin headers, which specify which origins can
        access the API.
      </p>
    </div>
  );
};

export default Blog;
