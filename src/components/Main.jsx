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


const Main = ( props ) => {
    const [options, setoptions] = useState([]);

    const classes = useStyles();

    useEffect(() => {
      }, []);

    return (
        <div className="main">
            <div className="main_title">
                <h2>Members</h2>
            </div>

            <div className="members">
              <div className="result_filter">
                <h4>States</h4>
                <div className="filter_checkboxes">
                  <label class="container">California
                   <input type="checkbox" />
                   <span class="checkmark"></span>
                  </label>
                  <label class="container">Arizona
                   <input type="checkbox" />
                   <span class="checkmark"></span>
                  </label>
                  <label class="container">Vermont
                   <input type="checkbox" />
                   <span class="checkmark"></span>
                  </label>
                  <div className="check_all">All</div>
                </div>
              </div>
              <div className="result_listing">
                <div className="result_infobar">
                  <div className="result_counter"><p>Showing 9 of 25 items</p></div>
                  <div className="result_order">
 
                  </div>
                </div>
                <div className="result_members_list">
                  <div class="result_member">
                    <img src="/default_user.svg" alt="default user avatar" />
                    <p className="member_name">Rose Barnett</p>
                    <p className="member_address_state">Maryland, 51460</p>
                    <p className="member_address_street">2873 Blossom Hill Rd, Centennial</p>
                  </div>
                    <div class="result_member unloaded_item">
                      <img src="/default_user.svg" alt="default user avatar" />
                      <div className="unloaded_bar"></div>
                      <div className="unloaded_bar small"></div>
                      <div className="unloaded_bar small"></div>
                    </div>
                    <div class="result_member unloaded_item">
                      <img src="/default_user.svg" alt="default user avatar" />
                      <div className="unloaded_bar"></div>
                      <div className="unloaded_bar small"></div>
                      <div className="unloaded_bar small"></div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
};   
 export default Main;