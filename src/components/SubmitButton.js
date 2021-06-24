import React from "react";
import { Button } from "react-bootstrap";

const buttonStyle = {
  marginTop: "15px"
};
const buttonTextStyle = {
    fontSize: "14px"
}


const SubmitButton = () => {
  return (
    <div style = {buttonStyle}>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <Button variant="dark" size = "sm" style = {buttonTextStyle}>Get Food Recomendation!!!</Button>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitButton;
