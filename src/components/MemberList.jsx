import React, { useState } from 'react';
import { createUseStyles } from "react-jss";
import _ from 'underscore';
import {
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql
} from "@apollo/client";


const useStyles = createUseStyles({
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
      '& img': {
        borderRadius:'42px',
      },
      '&:hover':{
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
  const GetMembers = gql`
  query Members {
    allMembers {
      id
      firstName
      lastName
      address {
        country
        state
        postalCode city
        addressLine
      }
      profilePictureUrl 
    }
  }
`;

 function MemberList( props ) {

  const { loading, error, data } = useQuery(GetMembers);
    const classes = useStyles();

    function getMemberId(id){
      console.log(id);
    }

      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      console.log(data);
      
     return (
        
         (data.allMembers.length != 0 ?
          data.allMembers.map((member, i) => {
            return (
              <div key={i} onClick={() =>getMemberId(member.id)} className={classes.resultMember}>
                <img height="85" src={member.profilePictureUrl} alt="user avatar" />
                <p className="member_name">{member.firstName} {member.lastName}</p>
                <p className="member_address_state">{member.address.state}, {member.address.postalCode}</p>
                <p className="member_address_street">{member.address.addressLine}, {member.address.city}</p>
              </div>
              )
            } 
          )
            : "" )
      );
    
};   
 export default MemberList;