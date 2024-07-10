import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <main className="h-100 app-layout">
      <div>
        <Header />
        <div className="container">
          <div className="d-flex flex-wrap gap-3 mb-5">
            <Link to="/" className="btn btn-primary">Past Day Articles</Link>
            <Link to="/pastMonth" className="btn btn-warning">Past Month Articles</Link>
            <Link to="/pastWeek" className="btn btn-danger">Past Week Articles</Link>
          </div>
          {children}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
