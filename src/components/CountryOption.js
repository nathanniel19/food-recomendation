import React from "react";
import { Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";

//Style
const labelStyle = {
  display: "block",
  textAlign: "center",
  fontSize: "25px",
  marginTop: "25px",
  fontWeight: "500",
};
const dropdownStyle = {
  display: "block",
  textAlign: "center",
  fontSize: "16px",
  marginTop: "30px"
};
const buttonStyle = {
  marginTop: "15px",
};
const buttonTextStyle = {
  fontSize: "14px",
};
const resultStyle = {
  fontSize: "50px",
  textAlign: "center",
  marginTop: "30px",
  fontWeight: "700"
};

//Dropdown Function
const testIndonesia = () => {
  document.getElementById("dropdown-button-dark-example1").innerHTML =
    "Indonesia";
};
const testSingapore = () => {
  document.getElementById("dropdown-button-dark-example1").innerHTML =
    "Singapore";
};
const testPhilipines = () => {
  document.getElementById("dropdown-button-dark-example1").innerHTML =
    "Philipines";
};

//ButtonInput Style
const buttonInput = () => {
  const inputUser = document.getElementById(
    "dropdown-button-dark-example1"
  ).innerHTML;
  const lowNum = 0;
  const indonesiaFood = [
    "Indonesia Satay",
    "Uduk Rice",
    "Rendang Beef",
    "Rawon Rice",
    "Fried Rice",
    "Siomay",
    "Indomie",
    "Sweet Martabak",
    "Pempek",
    "Padang Rice",
    "Sop Buntut",
  ];
  const singaporeFood = [
    "Laksa",
    "Char Kuay Teow",
    "Barbequed Stingray",
    "Fish Head Curry",
    "Char siew meats on rice or noodles",
    "Oyster Omelet",
    "Hainanese Chicken Rice",
    "Chilli Crab",
    "Bak kut Teh and Rice",
    "Hokkien Prown Mee",
  ];
  const philipinesFood = [
    "Adobo",
    "Lechon",
    "Sisig",
    "Crispy Pata",
    "Chicken Inasal",
    "Pancit Palabok",
    "Bulalo",
    "Arrox Caldo",
    "Kare Kare",
    "Fish Tinola",
  ];

  //Main Function
  if (inputUser === "Indonesia") {
    var detectIndonesia =
      Math.floor(Math.random() * (indonesiaFood.length - 1 - lowNum + 1)) +
      lowNum;
    document.getElementById("result").innerHTML =
      indonesiaFood[detectIndonesia];
  } else if (inputUser === "Singapore") {
    var detectSingapore =
      Math.floor(Math.random() * (singaporeFood.length - 1 - lowNum + 1)) +
      lowNum;
    document.getElementById("result").innerHTML =
      singaporeFood[detectSingapore];
  } else if (inputUser === "Philipines") {
    var detectPhilipines =
      Math.floor(Math.random() * (philipinesFood.length - 1 - lowNum + 1)) +
      lowNum;
    document.getElementById("result").innerHTML =
      philipinesFood[detectPhilipines];
  }
};

export const CountryOption = () => {
  return (
    <div>
      <label style={labelStyle}>South East Asia Region Country</label>
      <div>
        <Dropdown size="sm" style={dropdownStyle}>
          <Dropdown.Toggle
            id="dropdown-button-dark-example1"
            variant="secondary"
          >
            Select the country
          </Dropdown.Toggle>
          <Dropdown.Menu variant="dark">
            <Dropdown.Item onClick={testIndonesia}>Indonesia</Dropdown.Item>
            <Dropdown.Item onClick={testSingapore}>Singapore</Dropdown.Item>
            <Dropdown.Item onClick={testPhilipines}>Philipines</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <div style={buttonStyle}>
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <Button
                  variant="dark"
                  size="sm"
                  style={buttonTextStyle}
                  onClick={buttonInput}
                >
                  Get Food Recomendation!!!
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p style={resultStyle} id="result"></p>
      </div>
    </div>
  );
};

export default CountryOption;
