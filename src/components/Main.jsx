import React, { useEffect, useState, useLayoutEffect } from 'react';
import Link from 'next/link'
import { createUseStyles } from "react-jss";
import _ from 'underscore';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import MemberList from './MemberList';


  const client = new ApolloClient({
    uri: 'https://cooltix-frontend-challenge.herokuapp.com',
    cache: new InMemoryCache()
  });




const useStyles = createUseStyles({
  main: {
    width: '1136px',
    margin: '126px auto 50px',
    fontFamily: 'QuickSand Book',
    '& h2':{
      fontSize: '24px',
      lineHeight: '28px',
      fontFamily: 'QuickSand Bold',
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
      padding: '24px 27px 24px 27px',
      marginRight: '16px',
    },
    resultFilterHeader:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px',
      '& h3':{
        fontSize: '20px',
        lineHeight: '24px',
        color: '#00A4FF',
        fontFamily: 'QuickSand Bold',
        margin: '0',
      },
      '& .check_all:hover':{
        color: '#00A4FF',
        cursor: 'pointer',
      },
    },
    filterCheckboxes:{
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '574px',
      overflowY: 'auto',
    },
    filterCheckbox:{
      marginBottom: '8px',
      '& input': {
       border: '1px solid #4A4A4A',
       marginRight: '8px',
      },
      '&:hover':{
        color: '#00A4FF',
        cursor: 'pointer',
      },
    },
    resultListing:{
      flex: '9',
    },
    resultInfoBar:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1px solid #e5e5e5',
      borderRadius: '4px',
      marginBottom: '16px',
      marginRight: '10px',
      padding: '0 16px',

    },
    resultCounter:{

    },
    resultOrder:{
      fontFamily: 'QuickSand Book',
      fontSize:'14px',
     height: 'auto',
      padding: '5px',
      borderRadius: '4px',
      border: 'none',
 
      '&:focus': {
        outline: '1px solid #e5e5e5',
      },
    },
    resultMemberList:{
      display: 'flex',
  /*     justifyContent: 'space-between', */
      borderRadius: '4px',
      flexWrap: 'wrap',
      width: '865px',
      maxHeight: '600px',
      overflowY: 'auto',
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
      marginRight: '16px',
      textDecoration: 'none',
      color: '#222D39',
      '&:nth-child(3n+0)': {
        marginRight: '0',
      },
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
        fontFamily: 'QuickSand Bold',
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
    const [filterStates, setFilterStates] = useState([]);
    
    const [states, setStates] = useState([]);
    const [members, setMembers] = useState([]);
    const [filteredMembers, setFilteredMembers] = useState([]);
    const classes = useStyles();

    let list;
    if(filteredMembers.length != 0){
     list = filteredMembers;
    }else{
     list = members;
    }

  async function MembersReq() {
      const { data } = await client.query({
        query: gql`
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
        `,
      });
      setMembers(data.allMembers);
      const astates = _.uniq(data.allMembers, x => x.address.state).map((state) => {
        return state.address.state;
      });
      setStates(astates);
  }

  function clearFilter(){
    setFilteredMembers([]);
  }

  function getMemberId(id){
    console.log(id);
  }
  
  function filterState(e){
    const tempList = filterStates;
    if(e.target.checked){
      tempList.push(e.target.defaultValue);
    }else{
      const index = tempList.indexOf(e.target.defaultValue);
      if (index > -1) {
        tempList.splice(index, 1);
      }
    }
    console.log(tempList);
    const res = members.filter((mem) => {
      
      return  tempList.includes(mem.address.state);

    })
    setFilteredMembers(res);
  }

  useEffect(() => {
    if(members.length===0){
      MembersReq();
    }
  }, [members]);

    return (
        <div className={classes.main}>
            <div className="main_title">
                <h2>Members</h2>
            </div>

            <div className={classes.members}>
              <div className={classes.resultFilter}>
                <div className={classes.resultFilterHeader}>
                  <h3>States</h3>
                  <div onClick={clearFilter} className="check_all">All</div>
                </div>
                <div className={classes.filterCheckboxes}>
                 {  (states.length != 0 ?
                        states.map((state, x) => {
                          return (
                            <label key={x} className={classes.filterCheckbox}>
                            <input type="checkbox" onChange={e => filterState(e)} value={state} />
                            {state}
                            <span className="checkmark"></span>
                            </label>
                            )
                          } 
                        )
                     : "" )
                  }
                  
                </div>
              </div>
              <div className={classes.resultListing}>
                <div className={classes.resultInfoBar}>
                  <div className={classes.resultCounter}><p>Showing {(filteredMembers.length === 0 ? members.length : filteredMembers.length )} of {members.length} items</p></div>
                  <select className={classes.resultOrder} >
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="state">State</option>
                  </select>
                </div>
                <div className={classes.resultMemberList}>
              {/*    <MemberList/> */}
              {(list.length != 0 ?
                  list.map((member, i) => {
                    return (
                      <Link key={i} href={`/member/${member.id}`}>
                        <a key={i} onClick={() =>getMemberId(member.id)} className={classes.resultMember}>
                          <img height="85" src={member.profilePictureUrl} alt="user avatar" />
                          <p className="member_name">{member.firstName} {member.lastName}</p>
                          <p className="member_address_state">{member.address.state}, {member.address.postalCode}</p>
                          <p className="member_address_street">{member.address.addressLine}, {member.address.city}</p>
                        </a>
                      </Link>
                      )
                    } 
                  )
                    : "" )}
                </div>
              </div>
            </div>
        </div>
    )
};   
 export default Main;