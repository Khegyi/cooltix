import React, { useEffect, useState } from 'react';
import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
    myButton: {
      color: 'green',
     // color: ({ themes }) => theme.color,
      margin: {
        // jss-plugin-expand gives more readable syntax
        top: 5, // jss-plugin-default-unit makes this 5px
        right: 0,
        bottom: 0,
        left: '1rem'
      },
      '& span': {
        // jss-plugin-nested applies this to a child span
        fontWeight: 'bold' // jss-plugin-camel-case turns this into 'font-weight'
      }
    },
    myLabel: {
      fontStyle: 'italic'
    }
  })


const Header = ( props ) => {
    const [options, setoptions] = useState([]);

    const classes = useStyles();


   

    useEffect(() => {
      }, []);

    return (
        <div className="header">
            <div className="header_logo">
                <img src="/logo.svg"  alt="cooltix logo" />
            </div>

            <div className="search_bar">
                <input type="text" placeholder="Search" />
                
            </div>
            <div className="user_menu">
                <div className={classes.myButton}>Yellow, Rose</div>
                <div className="user_avatar">
                    <img src="/default_user.svg" alt="default user avatar" />
                </div>
            </div>
        </div>
    )
};   
 export default Header;