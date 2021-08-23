import React, { useEffect, useState } from 'react';
import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
    myLabel: {
      fontStyle: 'italic'
    }
  })


const MemberDetails = ( props ) => {
    const [options, setoptions] = useState([]);

    const classes = useStyles();

    const fakePics = () => {
      let picElements = [];
      for (let i = 0; i < 10; i++) {
        picElements.push(<img key={i} src={`https://source.unsplash.com/random/95x95?sig=`+i} />);
      }
      return picElements;
    }

    useEffect(() => {
      }, []);

    return (
        <div className="member">
            <div className="member_avatar">
                <img src="/default_user.svg" alt="default user avatar" />
                <h2>Rose Barnett</h2>
            </div>

            <div className="member_details">
              <div className="details_header">
                <h3>Details</h3>
                <div className="details_buttons">
                  <div className="btn edit">Edit</div>
                  <div className="btn delete">Delete</div>
                </div>
              </div>
              <div className="details_wrap">
                <div className="detial">
                  <div className="detail_label">First Name:</div>
                  <div className="detail_data">Rose</div>
                </div>
                <div className="detial">
                  <div className="detail_label">Last Name:</div>
                  <div className="detail_data">Barnett</div>
                </div>
                <div className="detial">
                  <div className="detail_label">Email:</div>
                  <div className="detail_data">rose.barmett@example.com</div>
                </div>
              </div>
            </div>
            <div className="members_pictures">
              <div className="pictures_header">
                <h3>Pictures</h3>
                <a href="#">See all</a>
              </div>
              <div className="picture_list">
                {
                  fakePics()
                }
              </div>
            </div>
            <div className="members_purchases">
              <div className="purchases_header">
                <h3>Pictures</h3>
                <a href="#">See all</a>
              </div>
              <ul className="purchases_list">
                <li key="546" className="purchase_item">
                  <div className="purchase_quantity">1x</div>
                  <div className="purchase_type"> Movie Ticket</div>
                  <div className="purchase_merchant">CinemaPlex Houston</div>
                  <div className="purchase_date">2021.12.12</div>
                  <div className="purchase_time">16:58</div>
                  <div className="purchase_details_btn"></div>
                  <div className="purchase_details">
                    <div className="purchase_amount">29.69 USD</div>
                    <div className="purchase_method">Card</div>
                    <div className="purchase_location">20373 Houston TE 254 LakeShore Rd</div>
                    <div className="purchase_description">No Data</div>
                  </div>
                </li>
                <li key="544" className="purchase_item">
                  <div className="purchase_quantity">1x</div>
                  <div className="purchase_type"> Movie Ticket</div>
                  <div className="purchase_merchant">CinemaPlex Houston</div>
                  <div className="purchase_date">2021.12.12</div>
                  <div className="purchase_time">16:58</div>
                  <div className="purchase_details_btn"></div>
                  <div className="purchase_details">
                    <div className="purchase_amount">29.69 USD</div>
                    <div className="purchase_method">Card</div>
                    <div className="purchase_location">20373 Houston TE 254 LakeShore Rd</div>
                    <div className="purchase_description">No Data</div>
                  </div>
                </li>
                <li key="543" className="purchase_item">
                  <div className="purchase_quantity">1x</div>
                  <div className="purchase_type"> Movie Ticket</div>
                  <div className="purchase_merchant">CinemaPlex Houston</div>
                  <div className="purchase_date">2021.12.12</div>
                  <div className="purchase_time">16:58</div>
                  <div className="purchase_details_btn"></div>
                  <div className="purchase_details">
                    <div className="purchase_amount">29.69 USD</div>
                    <div className="purchase_method">Card</div>
                    <div className="purchase_location">20373 Houston TE 254 LakeShore Rd</div>
                    <div className="purchase_description">No Data</div>
                  </div>
                </li>
              </ul>
            </div>
        </div>
    )
};   
 export default MemberDetails;