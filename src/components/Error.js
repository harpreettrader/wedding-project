import { Link } from "react-router-dom";
import React from "react";
import "../styles/Error.css"

function Error() {
  return (
    <>
      <div>Opps! page not found</div>
      <p>Go back to home Page <Link to="/">HomePage</Link></p>
    </>
  );
}

export default Error;
