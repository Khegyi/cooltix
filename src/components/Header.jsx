import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
    header: {
      backgroundColor: '#f5f5f5',
      height:'96px',
      display: 'flex',
      position: 'fixed',
      top:'0',
      width: '100%',
      flexDirection: 'row',
      fontFamily: 'Quicksand Book',
      borderBottom:'1px solid #b0b0b0',
    },
    headerLogo: {
      flex: 1,
      display:'flex',
      alignItems:'center',
      '& img':{
          marginLeft: '25px',
      }
    },
    userMenu: {
      flex: 1,
      display:'flex',
      justifyContent: 'flex-end',
      alignItems:'center',
      marginRight: '25px',
      '& .user_greating':{
          marginRight: '15px',
          fontWeight: '700',
      },
      '& .user_avatar':{
        borderRadius: '30px',
        border:'3px solid #00A4FF',
        height: '50px',
      },
    },
  })

const Header = ( props ) => {

    const [options, setoptions] = useState([]);
    const classes = useStyles();
    useEffect(() => {
      }, []);

    return (
        <div className={classes.header}>
          <div className={classes.headerLogo}>
            <Link href="/">
              <a>
                <img height="48" src="/logo.svg"  alt="cooltix logo" />
              </a>
            </Link>
          </div>
          <div className={classes.userMenu}>
              <div className="user_greating">Hello, Rose</div>
              <div className="user_avatar">
                  <img height="50" src="/default_user.svg" alt="default user avatar" />
              </div>
          </div>
      </div>
    )
};  
 export default Header;