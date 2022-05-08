/** @format */

import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog py-4">
      <h5 className=" text-white fw-bold">
        Difference between javascript and nodejs:
      </h5>
      <div className="question">
        <div className="text-center fw-bold">Javascript</div>
        <div className="text-center fw-bold">NodeJS</div>
        <div>
          Javascript is a programming language that is used for writing scripts
          on the website.{" "}
        </div>
        <div>NodeJS is a Javascript runtime environment.</div>
        <div> Javascript can only be run in the browsers.</div>
        <div>
          We can run Javascript outside the browser with the help of NodeJS.
        </div>
        <div>It is basically used on the client-side.</div>
        <div>It is mostly used on the server-side</div>
        <div>
          {" "}
          Javascript is capable enough to add HTML and play with the DOM.{" "}
        </div>
        <div>Nodejs does not have capability to add HTML tags.</div>
        <div>
          Javascript can run in any browser engine as like JS core in safari and
          Spidermonkey in Firefox.
        </div>
        <div>
          V8 is the Javascript engine inside of node.js that parses and runs
          Javascript.{" "}
        </div>
      </div>
      <h5 className=" text-white py-4 fw-bold">
        Difference between SQL and NoSQL:
      </h5>
      <div className="question">
        <div className="text-center fw-bold">SQL</div>
        <div className="text-center fw-bold"> NoSQL</div>
        <div>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</div>
        <div>Non-relational or distributed database system.</div>
        <div> These databases have fixed or static or predefined schema.</div>
        <div>They have dynamic schema</div>
        <div>These databases are not suited for hierarchical data storage.</div>
        <div>
          These databases are best suited for hierarchical data storage.
        </div>
        <div>These databases are best suited for complex queries</div>
        <div>These databases are not so good for complex queries</div>
        <div>Vertically Scalable</div>
        <div>Horizontally scalable</div>
      </div>
      <h5 className=" text-white py-4 fw-bold">When we use Mongodb:</h5>
      <div>
        MongoDB is built on a scale-out architecture that has become popular
        with developers of all kinds for developing scalable applications with
        evolving data schemas. As a document database, MongoDB makes it easy for
        developers to store structured or unstructured data. It uses a JSON-like
        format to store documents. This format directly maps to native objects
        in most modern programming languages, making it a natural choice for
        developers, as they don’t need to think about normalizing data. MongoDB
        can also handle high volume and can scale both vertically or
        horizontally to accommodate large data loads. MongoDB was built for
        people building internet and business applications who need to evolve
        quickly and scale elegantly. Companies and development teams of all
        sizes use MongoDB for a wide variety of reasons.
      </div>
      <h5 className=" text-white py-4 fw-bold">When we use node.js:</h5>
      <div>
        Nodejs is a Javascript engine that you can write any application you
        want with (by programming in the Javascript language). It runs your
        Javascript code. Most commonly, it is used to build servers that can
        respond to web requests, though it can be used for lots of other types
        of code too. Any project needs a programming environment and a runtime
        library that offers you basic programming tools/support and can compile
        and/or interpret your code. Nodejs is such as tool for the Javascript
        programming language. There are other similar tools for other languages
        such as Python, Java, PHP, C#, C++, Go, etc... So, if you want to write
        some kind of stand-alone program or server in Javascript, then you can
        use nodejs for it.
      </div>
      <h5 className=" text-white py-4 fw-bold">What is the purpose of JWT:</h5>

      <div>
        JWT, or JSON Web Token, is an open standard used to share security
        information between two parties — a client and a server. Each JWT
        contains encoded JSON objects, including a set of claims. JWTs are
        signed using a cryptographic algorithm to ensure that the claims cannot
        be altered after the token is issued.
      </div>
      <h5 className=" text-white py-4 fw-bold">How does work JWT:</h5>
      <div>
        JWTs differ from other web tokens in that they contain a set of claims.
        Claims are used to transmit information between two parties. What these
        claims are depends on the use case at hand. For example, a claim may
        assert who issued the token, how long it is valid for, or what
        permissions the client has been granted. A JWT is a string made up of
        three parts, separated by dots (.), and serialized using base64. In the
        most common serialization format, compact serialization, the JWT looks
        something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get two
        JSON strings: The header and the payload. The signature. The JOSE (JSON
        Object Signing and Encryption) header contains the type of token — JWT
        in this case — and the signing algorithm. The payload contains the
        claims. This is displayed as a JSON string, usually containing no more
        than a dozen fields to keep the JWT compact. This information is
        typically used by the server to verify that the user has permission to
        perform the action they are requesting. There are no mandatory claims
        for a JWT, but overlaying standards may make claims mandatory. For
        example, when using JWT as bearer access token under OAuth2.0, iss, sub,
        aud, and exp must be present. some are more common than others. The
        signature ensures that the token hasn’t been altered. The party that
        creates the JWT signs the header and payload with a secret that is known
        to both the issuer and receiver, or with a private key known only to the
        sender. When the token is used, the receiving party verifies that the
        header and payload match the signature.
      </div>
    </div>
  );
};

export default Blog;
