import React, { useEffect, useState } from 'react';
import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
  main: {
    width: '1136px',
    margin: '126px auto 50px',
    fontFamily: 'Quicksand',
    '& h2':{
      fontSize: '24px',
      lineHeight: '28px',
      fontWeight: '700',
     },
    },
    members:{
      display: 'flex',
      alignItems: 'flex-start',
    },
    resultFilter:{
      flex: '3',
      border: '1px solid #e5e5e5',
      borderRadius: '4px',
      padding: '24px 27px',
      marginRight: '16px',
      '& h3':{
        fontSize: '20px',
        lineHeight: '24px',
        fontWeight: '700',
        marginTop: '0',
      },
    },
    filterCheckboxes:{
      display: 'flex',
      flexDirection: 'column',
      '& label': {
        marginBottom: '8px',
      },
      '& input': {
       border: '1px solid #4A4A4A',
       marginRight: '8px',
      },
    },
    resultListing:{
      flex: '9',
 
    },
    resultInfoBar:{
      border: '1px solid #e5e5e5',
      borderRadius: '4px',
      marginBottom: '16px',
      padding: '0 16px',
    },
    resultMemberList:{
      display: 'flex',
      justifyContent: 'space-between',
      borderRadius: '4px',
      flexWrap: 'wrap',
      width: '848px',
    },
    resultMember:{
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: '1px solid #e5e5e5',
      padding: '40px',
      textAlign: 'center',
      flexBasis: '192px',
      minHeight: '210px',
      maxWidth: '192px',
      marginBottom: '16px',
      '&:hover':{
        /* filter: 'brightness(60%)', */
        backgroundColor: '#00A4FF',
        border: '1px solid #00A4FF',
        color: 'white',
        cursor: 'pointer',
      },
      '& .member_name': {
        fontWeight: '700',
        margin: '12px 0 0',
        fontSize: '20px',
        lineHeight: '26px',
      },
      '& .member_address_state': {
        fontWeight: '400',
        margin: '12px 0 0',
        fontSize: '16px',
        lineHeight: '24px',
      },
      '& .member_address_street': {
        fontWeight: '400',
        margin: '12px 0 0',
        fontSize: '12px',
        lineHeight: '16px',
      },
    },
    unloaded:{
      filter: 'blur(1px)',
    },
    unloadedBar:{
      width:'176px',
      height: '16px',
      borderRadius: '32px',
      backgroundColor: '#d8d8d8',
    },
    unloadedBarSmall:{
      width:'113px',
      height: '12px',
      borderRadius: '32px',
      backgroundColor: '#d8d8d8',
    }
  })


const Main = ( props ) => {
    const [options, setoptions] = useState([]);

    const classes = useStyles();

    useEffect(() => {
      }, []);

    return (
        <div className={classes.main}>
            <div className="main_title">
                <h2>Members</h2>
            </div>

            <div className={classes.members}>
              <div className={classes.resultFilter}>
                <h3>States</h3>
                <div className={classes.filterCheckboxes}>
                  <label className="container">
                   <input type="checkbox" />
                   California
                   <span className="checkmark"></span>
                  </label>
                  <label className="container">
                   <input type="checkbox" />
                   Arizona
                   <span className="checkmark"></span>
                  </label>
                  <label className="container">
                   <input type="checkbox" />
                   Vermont
                   <span className="checkmark"></span>
                  </label>
                  <div className="check_all">All</div>
                </div>
              </div>
              <div className={classes.resultListing}>
                <div className={classes.resultInfoBar}>
                  <div className="result_counter"><p>Showing 9 of 25 items</p></div>
                  <div className="result_order">
 
                  </div>
                </div>
                <div className={classes.resultMemberList}>
                  <div className={classes.resultMember}>
                    <img height="85" src="/default_user.svg" alt="default user avatar" />
                    <p className="member_name">Rose Barnett</p>
                    <p className="member_address_state">Maryland, 51460</p>
                    <p className="member_address_street">2873 Blossom Hill Rd, Centennial</p>
                  </div>
                  <div className={`${classes.resultMember} ${classes.unloaded}`}>
                      <img height="85" src="/default_user.svg" alt="default user avatar" />
                      <div className={classes.unloadedBar}></div>
                      <div className={classes.unloadedBarSmall}></div>
                      <div className={classes.unloadedBarSmall}></div>
                    </div>
                    <div className={`${classes.resultMember} ${classes.unloaded}`}>
                      <img height="85" src="/default_user.svg" alt="default user avatar" />
                      <div className={classes.unloadedBar}></div>
                      <div className={classes.unloadedBarSmall}></div>
                      <div className={classes.unloadedBarSmall}></div>
                    </div>
                    <div className={`${classes.resultMember} ${classes.unloaded}`}>
                      <img height="85" src="/default_user.svg" alt="default user avatar" />
                      <div className={classes.unloadedBar}></div>
                      <div className={classes.unloadedBarSmall}></div>
                      <div className={classes.unloadedBarSmall}></div>
                    </div>
                    <div className={classes.resultMember}>
                    <img height="85" src="/default_user.svg" alt="default user avatar" />
                    <p className="member_name">Rose Barnett</p>
                    <p className="member_address_state">Maryland, 51460</p>
                    <p className="member_address_street">2873 Blossom Hill Rd, Centennial</p>
                  </div>

                    <div className={`${classes.resultMember} ${classes.unloaded}`}>
                      <img height="85" src="/default_user.svg" alt="default user avatar" />
                      <div className={classes.unloadedBar}></div>
                      <div className={classes.unloadedBarSmall}></div>
                      <div className={classes.unloadedBarSmall}></div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
};   
 export default Main;