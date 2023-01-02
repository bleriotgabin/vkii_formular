import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Ausleih_vitamin_P from "../components/Ausleih_vitamin_P";

const useStyles = makeStyles((theme) => ({
    container: {
      background: "linear-gradient(315deg, #b1bfd8 0%, #667eaa 74%)",
    },
    wrapper: {
      padding: "20px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    img: {
      width: "180px",
    },
    hamburber: {
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      boxShadow: "0 2px 5px rgb(255, 101, 47,.2)",
      transition: "all 0.5s ease-in-out",
      "&::before": {
        content: "''",
        position: "absolute",
        width: "30px",
        height: "3px",
        background: "#fff",
        borderRadius: "5px",
        transition: "all 0.5s ease-in-out",
        transform: "translateY(-10px)",
      },
      "&::after": {
        content: "''",
        position: "absolute",
        width: "30px",
        height: "3px",
        background: "#fff",
        borderRadius: "5px",
        transition: "all 0.5s ease-in-out",
        transform: "translateY(10px)",
      },
    },
    activeHamburger: {
      width: "30px",
      height: "3px",
      borderRadius: "5px",
      transform: "translateX(-50px)",
      background: "transparent",
      transition: "all 0.5s ease-in-out",
      "&::before": {
        content: "''",
        position: "absolute",
        width: "30px",
        height: "3px",
        background: "#fff",
        borderRadius: "5px",
        transition: "all 0.5s ease-in-out",
        transform: "rotate(45deg) translate(35px, -35px)",
      },
      "&::after": {
        content: "''",
        position: "absolute",
        width: "30px",
        height: "3px",
        background: "#fff",
        borderRadius: "5px",
        transition: "all 0.5s ease-in-out",
        transform: "rotate(-45deg) translate(35px, 35px)",
      },
    },
    sidenav: {
      position: "fixed",
      width: "100%",
      height: "100vh",
      background: "linear-gradient(150deg, #b1bfd8 0%, #667eaa 74%)",
      transform: "translateX(100%)",
      transition: "all 0.5s ease-in-out",
    },
    activeSidenav: {
      position: "fixed",
      width: "100%",
      height: "100vh",
      background: "linear-gradient(150deg, #b1bfd8 0%, #667eaa 74%)",
      transform: "translateX(50%)",
      transition: "all 0.5s ease-in-out",
    },
    ul: {
      listStyleType: "none",
      "& li": {
        padding: "20px 0",
      },
    },
    a: {
      margin: "20px 0",
      color: "white",
    },
  }));
  
  const data = [
    { name: "Home", Link: "/" },
    { name: "Ausleih Vitamin P", Link: "/ausleih_vitamin_p" },
    {
      name: "Team",
      Link: "/team",
    },
    {
      name: "Events",
      Link: "/events",
    },
  ];
  const index = () => {
    const classes = useStyles();
    const [active, setActive] = useState(false);
    return (
      <div className={classes.main}>
        <div className={classes.container}>
          <div className={classes.wrapper}>
            <img src="/codeloper1.png" alt="logo" className={classes.img} />
            <div onClick={() => setActive(!active)}>
              <div
                className={active ? classes.activeHamburger : classes.hamburber}
              />
            </div>
          </div>
        </div>
        <div className={active ? classes.activeSidenav : classes.sidenav}>
          <ul className={classes.ul}>
            {data.map((item, i) => (
              <li key={i}>
                <a href={item.Link} className={classes.a}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <Ausleih_vitamin_P />
  
      </div>
      
      
  
    );
  };
  
  export default index;