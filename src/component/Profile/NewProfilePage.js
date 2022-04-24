import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from "./NewProfilePage.module.css";
import { useNavigate } from "react-router-dom";
import {
  faArrowCircleLeft,
  faBookBookmark,
  faBookmark,
  faCalendarDay,
  faFlag,
  faGenderless,
  faLocation,
  faLocationCrosshairs,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import profilepic from "../image/MyPic.jpeg";
import Navbar from "../navbar/Navbar";

const NewProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className={`row ${style.nav}`}>
        <Navbar />
      </div>
      <div className="row">
        <div className={`col-3 ${style.sidebar}`}>
          <div className="row" style={{ height: "250px" }}>
            <div className={`col-6 ${style.profilepicbar}`}>
              <img
                src={profilepic}
                alt="Profile Pic"
                style={{ height: "150px", width: "300px", borderRadius: "50%" }}
              />
            </div>
          </div>
          <div className={`row ${style.sidebarcard}`}>
            <div
            
              className="col-12"
              style={{
                height: "70px",
                textAlign: "center",
                fontFamily: "timesNewRoman",
                fontSize: "20px",
              }}
            >
              Reporting manager
              <br />
              XYZ
            </div>
            <div
              className="col-12"
              style={{
                height: "7px",
                width: "250px",
                margin: "auto",
                borderRadius: "20px",
                backgroundColor: "white",
              }}
            ></div>
            <div
              className="col-12"
              style={{ height: "40px", marginLeft: "20px" }}
            >
              DATE OF JOINING
              <br />
              <FontAwesomeIcon icon={faCalendarDay} />
              16/04/2022
            </div>
          </div>
          <div className={`row ${style.sidebarlower}`}>
            <div className={`col-12 ${style.lowerbtn}`}>
              <h5>Personal</h5>
            </div>
            <div className={`col-12 ${style.lowerbtn}`}>
              <h5>Official</h5>
            </div>
            <div className={`col-12 ${style.lowerbtn}`}>
              <h5>Proficiency</h5>
            </div>
            <div className={`col-12 ${style.lowerbtn}`}>
              <h5>Others</h5>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="row" style={{ fontFamily: "Arial",marginTop:"60px" }}>
            <h1>Pallavi Kumari Gupta(0106)</h1>
          </div>
          <div className="row" style={{ height: "80px",margin:"20px",padding:"20px" }}>
            <div className="col-4"><h6><FontAwesomeIcon icon={faBookmark}  /> Intern </h6></div>
            <div className="col-4"><h6><FontAwesomeIcon icon={faFlag} /> Information Technology</h6></div>
            <div className="col-4"><h6> <FontAwesomeIcon icon={faMapMarker} />  Bhubaneswar</h6></div>
                        </div>
          <div className="row">
            <div className="col-2" ><p>Personal Profile</p></div>
            <div className="col-2" ><p>Family Details</p></div>
            <div className="col-2" ><p>Contact Details</p></div>
            <div className="col-2" ><p>Medical Details</p></div>
            <div className="col-2" ><p>Employee Document </p></div>
            <div className="col-2" ><p>Hr Tracker </p></div>
          </div>
          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-6" style={{ height: "500px" }}>
              <div className="row">
                <div className="col-6" style={{ direction: "rtl" }}>
                  Salutation
                </div>
                <div className="col-6">
                  <h6>Mr</h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Middle Name
                </div>
                <div className="col-6" >
                  <h6>Kumari</h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Pseudo Name/Nick Name
                </div>
                <div className="col-6">
                  <h6> </h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Gender
                </div>
                <div className="col-6">
                  <h6>Female</h6>
                </div>
              </div>
              <div className="row"style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Nationality
                </div>
                <div className="col-6">
                  <h6>Indian</h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Caste
                </div>
                <div className="col-6">
                  <h6>{""}</h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Date Of Birth
                </div>
                <div className="col-6">
                  <h6>06/09/1998</h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Age
                </div>
                <div className="col-6">
                  <h6>23yrs</h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Blood Group
                </div>
                <div className="col-6">
                  <h6>{""}</h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Wedding Anniversary
                </div>
                <div className="col-6">
                  <h6>{""}</h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Smoker
                </div>
                <div className="col-6">
                  <h6>{""}</h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Aadhar Card Name
                </div>
                <div className="col-6">
                  <h6>{""}</h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Emp Tag
                </div>
                <div className="col-6">
                  <h6>{""}</h6>
                </div>
              </div>
            </div>
            <div className="col-6" style={{ height: "500px" }}>
              <div className="row">
                <div className="col-6" style={{ direction: "rtl" }}>
                  First Name
                </div>
                <div className="col-6">
                  <h6>Pallavi</h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Last Name
                </div>
                <div className="col-6">
                  <h6>Gupta</h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Father Name/Husband Name
                </div>
                <div className="col-6">
                  <h6> </h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Place of Birth
                </div>
                <div className="col-6">
                  <h6>{""}</h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Religion
                </div>
                <div className="col-6">
                  <h6>Hindu</h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Mother Tounge
                </div>
                <div className="col-6">
                  <h6>{""}</h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Date Of Birth Actual
                </div>
                <div className="col-6">
                  <h6>{""}</h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Active
                </div>
                <div className="col-6">
                  <h6>Yes</h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Marital Status
                </div>
                <div className="col-6">
                  <h6>{""}</h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Differentialy Abled
                </div>
                <div className="col-6">
                  <h6>{""}</h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Aadhar Card Number
                </div>
                <div className="col-6">
                  <h6>{""}</h6>
                </div>
              </div>
              <div className="row" style={{marginTop:"7px"}}>
                <div className="col-6" style={{ direction: "rtl" }}>
                  Hobbies
                </div>
                <div className="col-6">
                  <h6>{""}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProfilePage;
