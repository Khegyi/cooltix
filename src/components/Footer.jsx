import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  footer: {
    backgroundColor: "#1d1d1d",
    height: "130px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    "& .footer_wrap": {
      width: "600px",
      display: "flex",
      flexDirection: "row",
    },
  },
  footerLogo: {
    flex: 2,
    display: "flex",
    alignItems: "center",
    "& img": {
      marginLeft: "25px",
    },
  },
  copyRight: {
    flex: "auto",
    display: "flex",
    justifyContent: "center",
    color: "#fff",
    alignItems: "center",
    "& input": {
      height: "47px",
      borderRadius: "25px",
      border: "1px solid #b0b0b0",
      textAlign: "center",
    },
  },
  socialMedia: {
    flex: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: "25px",
    "& .sm_icon": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "20px",
      backgroundColor: "#00A4FF",
      height: "40px",
      width: "40px",
    },
  },
});

const Footer = (props) => {
  const [options, setoptions] = useState([]);
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className="footer_wrap">
        <div className={classes.footerLogo}>
          <img src="/cooltix_logo_white.svg" alt="cooltix logo bw" />
        </div>

        <div className={classes.copyRight}>
          <h4>cooltix © 2021</h4>
        </div>
        <div className={classes.socialMedia}>
          <a className="sm_icon facebook" href="">
            <img src="/facebook_icon.svg" alt="" />
          </a>
          <a className="sm_icon linkedin" href="">
            <img src="/linkedin_icon.svg" alt="" />
          </a>
          <a className="sm_icon instagram" href="">
            <img src="instagram_icon.svg" alt="" />
          </a>
          <a className="sm_icon email" href="">
            <img src="email_icon.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
