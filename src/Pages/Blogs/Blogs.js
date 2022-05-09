import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 g-lg-3">
        <div className="col">
          <div
            className="p-3 border border-danger bg-light"  style={{ height: 'auto '}}
            // style={{ height: "450px" 
          >
            <h2 style={{ color: "black" }}>
              What is the purpose of jwt and how does it work
            </h2>
            <p>
              jwt is a json web token which is a unique token that is used to
              identify the user. It is used to authenticate the user and to
              authorize the user to access the resources. It is used to protect
              the resources from unauthorized access.
            </p>
          </div>
        </div>
        <div className="col">
          <div
            className="p-3 border border-danger bg-light w-100"
            style={{ height: 'auto '}}
          >
            <h2 style={{ color: "black" }}>
              When should you use nodejs and when should you use mongodb
            </h2>
            <p>
              when we want to create a server we use nodejs and when we want to
              create a database we use mongodb. when we work with i/o, realtime,
              websockets we use nodejs. when we work with nosql, we use mongodb
            </p>
          </div>
        </div>
        <div className="col">
          <div
            className="p-3 border border-danger bg-light"
            style={{ height: 'auto '}}
          >
            <h2 style={{ color: "black" }}>
              Difference between javascript and nodejs
            </h2>
            <p>
               javascript is a client side scripting
              language and nodejs is a server side scripting language.
              javascript is used to create web pages and nodejs is used to
              create web servers. javascript is a programming language and node
              js is a runtime for javascript.
            </p>
          </div>
        </div>
        <div className="col">
          <div
            className="p-3 border border-danger bg-light"
            style={{ height: 'auto '}}
          >
            <h2 style={{ color: "black" }}>
              Difference between sql and nosql
            </h2>
            <p>
            sql is a relational database, nosql is a non-relational database.
              sql is a query language, nosql is a data language. sql is a
              structured language, nosql is an unstructured language. sql is a
              relational language, nosql is a non-relational language. sql is a
              query language, nosql is a data language. sql is a structured
              language, nosql is an unstructured language. sql is a relational
              language, nosql is a non-relational language. sql is a query
              language, nosql is a data language. sql is a structured language,
              nosql is an unstructured language. sql is a relational language,
              nosql is a non-relational language. sql is a query language, nosql
              is a data language. sql is a structured language, nosql is an
              unstructured language.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
