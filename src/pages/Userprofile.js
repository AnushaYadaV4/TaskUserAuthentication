import React from "react";
import Button from "react-bootstrap/Button";
import "./Userprofile.css";

import axios from "axios";

import { BsGithub } from "react-icons/bs";
import { RxExternalLink } from "react-icons/rx";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import { useUserContext } from "../context/userContext";

//import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

import { useState, useEffect } from "react";

const Userprofile = () => {
  const [userData, setUserData] = useState({ name: "", url: "" });
  const [getData, setGetData] = useState({});
  const { user, logoutUser } = useUserContext();

  let name, value;
  const handleInputChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  /*const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  */

  const submitData = async (event) => {
    event.preventDefault();
    const { name, url } = userData;
    if (name && url) {
      const res = await axios.post(
        "https://expense-auth-aacdd-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          name,
          url,
        }
      );
      if (res) {
        setUserData({
          name: "",
          url: "",
        });
        alert("Data stored");
      } else {
        alert("Please fill the data");
      }
    } else {
      alert("Please fill the data");
    }
  };

  useEffect(() => {
    const fetchingItems = async () => {
      try {
        const res = await axios.get(
          "https://expense-auth-aacdd-default-rtdb.firebaseio.com/userDataRecords.json"
        );
        console.log("fetching data", res);
        console.log("response", res.data.name);
        res.data === null ? setGetData([]) : setGetData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingItems();
  }, []);

  return (
    <div className="ContactForm">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="contactForm">
              <form id="contact-form" noValidate onSubmit={submitData}>
                <header className={classes.header}>
                  <h1
                    className="col-6"
                    style={{ fontSize: "25px", textAlign: "left" }}
                  >
                    Winners never quite, Quitters never win!!
                  </h1>
                  <div className="p-3  box m-4 text-right">
                    Your profile is 64% completed now. A complete profile has a
                    higher chances of landing a job.{" "}
                    <Link to="/userprofile">Complete now</Link>
                  </div>
                </header>

                <h1 className="profileHeading">Contact details</h1>

                <div className="row formRow">
                  <div className="col-12">
                    <label htmlFor="name" className="subHeadings">
                      <BsGithub style={{ margin: "15px" }} />
                      Full Name:
                    </label>

                    <input
                      type="text"
                      name="name"
                      className="form-control formInput"
                      value={userData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="url" className="subHeadings">
                      <RxExternalLink style={{ margin: "15px" }} />
                      Profile photo url:
                    </label>

                    <input
                      type="url"
                      name="url"
                      className="form-control formInput"
                      value={userData.url}
                      onChange={handleInputChange}
                    ></input>
                  </div>
                </div>

                <Button className="submit-btn button" type="submit">
                  Update
                </Button>
              </form>
              <Link to="/auth">
                <button onClick={logoutUser}>Log out</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
