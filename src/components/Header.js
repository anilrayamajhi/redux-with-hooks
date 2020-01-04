import React from "react";
import { Link } from "react-router-dom";

export function Header(props) {
  return (
    <nav>
      <Link to="/" className="underline start-again">
        <i className="fas fa-arrow-left" />
        <span className="start-again-text">Start Again</span>
      </Link>
      <div className="nav-title">Magento vs Shopify?</div>
    </nav>
  );
}
