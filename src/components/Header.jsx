import React, { useEffect, useState } from 'react';
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
      fontFamily: 'Quicksand',
      borderBottom:'1px solid #b0b0b0',
    },
    logo: {
      flex: 1,
      display:'flex',
      alignItems:'center',
      '& img':{
          marginLeft: '25px',
      }
    },
    searchBar: {
      flex: '6',
      display:'flex',
      justifyContent: 'flex-end',
      alignItems:'center',
      '& input':{
          height:'47px',
          borderRadius: '25px',
          border:'1px solid #b0b0b0',
          textAlign:'center',
          fontFamily: 'Quicksand',
          '&:focus': {
            outline: 'none',
          },
      },
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
            <div className={classes.logo}>
                <img height="48" src="/logo.svg"  alt="cooltix logo" />
            </div>

            <div className={classes.searchBar}>
                <input type="text" placeholder="Search" />
        
            </div>
            <div className={classes.userMenu}>
                <div className="user_greating">Yellow, Rose</div>
                <div className="user_avatar">
                    <img height="50" src="/default_user.svg" alt="default user avatar" />
                </div>
            </div>
        </div>
    )
};   
 export default Header;