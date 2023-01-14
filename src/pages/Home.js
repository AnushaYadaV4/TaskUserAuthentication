import React from "react";
//import { useNavigate } from "react-router";
import classes from './Home.module.css';
import { Link } from "react-router-dom";
//import { useUserAuth } from "../context/UserAuthContext";
import { useUserContext } from "../context/userContext";


const Home = () => {
  //const { logOut, user } = useUserAuth();
  const { user, logoutUser } = useUserContext();

  //const navigate = useNavigate();
  /*const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  */
  return (

    <div className={classes.headerContainer}>

    
    <header className={classes.header}>
        <h1>Welcome to expense tracker!!!</h1>
        <div className={classes.profile}>
        Your profile is incomplete. <Link to="/userprofile">Complete now</Link>
      </div>
      </header>
      

    
      
    </div>
  );
};

export default Home;