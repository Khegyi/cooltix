import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import Pictures from "./Pictures";
import Purchases from "./Purchases";

const useStyles = createUseStyles({
  member: {
    margin: "126px auto 0",
  },
  memberAvatar: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    "& h2": {
      textAlign: "center",
      fontSize: "24px",
      lineHeight: "28px",
      fontWeight:'700',
    },
    "& img": {
      borderRadius: "75px",
    },
  },
  memberDetails: {
    border: "1px solid #e5e5e5",
    borderRadius: "4px",
    padding: "15px",
  },
  memberHeader: {
    display: "flex",
    justifyContent: "space-between",
    "& h3": {
      margin: "0",
      color: "#00A4FF",
      fontWeight:'700',
    },
  },
  memberButtons: {
    display: "flex",
    justifyContent: "center",
  },
  memberBtn: {
    borderRadius: "4px",
    height: "30px",
    width: "75px",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      filter: "saturate(70%)",
      cursor: "pointer",
    },
  },
  memberBtnEdit: {
    backgroundColor: "#00A4FF",
  },
  memberBtnDelete: {
    marginLeft: "10px",
    backgroundColor: "#FF0000",
  },
  detailsWrap: {
    display: "flex",
    margin: "14px",
    flexDirection: "column",
  },
  detailRow: {
    display: "flex",
    "@media (max-width: 665px)": {
      flexDirection: "column",
    },
  },
  detail: {
    flex: "1",
    height: "60px",
    marginTop: "5px",
    fontSize: "16px",
    lineHeight: "28px",
  },
  detailLabel: {
    color: "#7b7b7b",
  },
  detailData: {
    color: "#000",
    marginTop: "5px",
    marginLeft: "15px",
    fontWeight: "700",
  },
  detailLabelAddress: {
    flex: "2",
  },
  memberSlots: {
    display: "flex",
    margin: "30px 0",
  },
  membersSlotLeft: {
    flex: "1",
    marginRight: "15px",
  },
  membersSlotRight: {
    flex: "1",
    marginLeft: "15px",
  },
});

const MemberDetails = ({ member }) => {
  const [options, setoptions] = useState([]);
  const classes = useStyles();

  return (
    <div className={classes.member}>
      <div className={classes.memberAvatar}>
        <img
          height="150"
          src={member.profilePictureUrl}
          alt="default user avatar"
        />
        <h2>
          {member.firstName} {member.lastName}
        </h2>
      </div>

      <div className={classes.memberDetails}>
        <div className={classes.memberHeader}>
          <h3>Details</h3>
          <div className={classes.memberButtons}>
            <div className={`${classes.memberBtn} ${classes.memberBtnEdit}`}>
              Edit
            </div>
            <div className={`${classes.memberBtn} ${classes.memberBtnDelete}`}>
              Delete
            </div>
          </div>
        </div>
        <div className={classes.detailsWrap}>
          <div className={classes.detailRow}>
            <div className={classes.detail}>
              <div className={classes.detailLabel}>First Name:</div>
              <div className={classes.detailData}>{member.firstName}</div>
            </div>
            <div className={classes.detail}>
              <div className={classes.detailLabel}>Last Name:</div>
              <div className={classes.detailData}>{member.lastName}</div>
            </div>
            <div className={classes.detail}>
              <div className={classes.detailLabel}>Email:</div>
              <div className={classes.detailData}>{member.email}</div>
            </div>
          </div>
          <div className={classes.detailRow}>
            <div className={classes.detail}>
              <div className={classes.detailLabel}>Country:</div>
              <div className={classes.detailData}>{member.address.country}</div>
            </div>
            <div className={classes.detail}>
              <div className={classes.detailLabel}>State:</div>
              <div className={classes.detailData}>{member.address.state}</div>
            </div>
            <div className={classes.detail}>
              <div className={classes.detailLabel}>Postal Code:</div>
              <div className={classes.detailData}>
                {member.address.postalCode}
              </div>
            </div>
          </div>
          <div className={classes.detailRow}>
            <div className={classes.detail}>
              <div className={classes.detailLabel}>City:</div>
              <div className={classes.detailData}>{member.address.city}</div>
            </div>
            <div className={`${classes.detail} ${classes.detailLabelAddress}`}>
              <div className={classes.detailLabel}>Address Line:</div>
              <div className={classes.detailData}>
                {member.address.addressLine}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.memberSlots}>
        <div className={classes.membersSlotLeft}>
          <Pictures />
        </div>
        <div className={classes.membersSlotRight}>
          <Purchases />
        </div>
      </div>
    </div>
  );
};
export default MemberDetails;
