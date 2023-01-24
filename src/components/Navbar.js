import React from "react";

export function Navbar() {
  return (
    <div className="navbars">
      <div className="top-nav">
        <h4 className="logo">
          SEQURAISE <i className="fas fa-search" aria-hidden="true"></i>
        </h4>
        <div className="count">
          <div className="total_male">25</div>
          <div className="total_female">25</div>
        </div>
      </div>

      <div className="side-nav">
        <h4>
          <i className="fas fa-bars" aria-hidden="true"></i>
        </h4>
        <h4>
          <i className="fa fa-sign-out" aria-hidden="true"></i>
        </h4>
      </div>
    </div>
  );
}
