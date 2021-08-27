import React, { useEffect, useState } from 'react';
import { createUseStyles } from "react-jss";
import Pictures from '../../src/components/Pictures';
import Purchases from '../../src/components/Purchases';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

  const client = new ApolloClient({
    uri: 'https://cooltix-frontend-challenge.herokuapp.com',
    cache: new InMemoryCache()
  });


const useStyles = createUseStyles({
   member:{
     width: '1136px',
     margin: '126px auto 0',
     fontFamily: 'Quicksand',
   },
    memberAvatar: {
      display:'flex',
      justifyContent:'center',
      flexDirection: 'column',
      alignItems: 'center',
      '& h2':{
        textAlign: 'center',
        fontSize: '24px',
        lineHeight: '28px',
        fontWeight: '700',
      },
      '& img':{
          borderRadius: '75px'
      }
    },
    memberDetails:{
      border: '1px solid #e5e5e5',
      borderRadius: '4px',
      padding: '15px',
    },
    memberHeader:{
      display:'flex',
      justifyContent:'space-between',
      '& h3':{
        margin: '0',
        color: '#00A4FF',

      },
    },
    memberButtons:{
      display:'flex',
      justifyContent:'center',
    },
    memberBtn:{  
      borderRadius: '4px',
      height: '30px',
      width: '75px',
      color: '#fff',
      display:'flex',
      justifyContent:'center',
      alignItems: 'center',
      '&:hover':{
        filter: 'saturate(70%)',
        cursor: 'pointer',
      }
    },
    memberBtnEdit:{
      backgroundColor:'#00A4FF',
    },
    memberBtnDelete:{
      marginLeft: '10px',
      backgroundColor:'#FF0000',
    },
    detailsWrap:{
      display: 'flex',
      margin: '14px',
      flexDirection: 'column',
    },
    detailRow:{
      display: 'flex',
    },
    detail:{
      flex: '1',
      height: '60px',
      marginTop: '5px',
      fontSize: '16px',
      lineHeight:'28px',
      fontWeight: '700',
    },
    detailLabel:{
      color: '#7b7b7b',
    },
    detailData:{
      color: '#000',
      marginTop: '5px',
      marginLeft: '15px',
    },
    memberSlots:{
      display: 'flex',
      margin: '30px 0'
    },
    membersSlotLeft:{
      flex: '1',
      marginRight: '15px'
    },
    membersSlotRight:{
      flex: '1',
      marginLeft: '15px',
    },
  })


  export const getStaticPaths = async () => {
    const res = await client.query({
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
    console.log(res);
    const paths = res.data.allMembers.map(member => {
        return{
            params: {id: member.id.toString() }
            }
        }
    )
    //console.log(paths);
    return{
      paths,
      fallback: false
    }
}
const GET_MEMBER = gql`
    query Amember($id: String!) {
        member(id: $id) {
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


  export const getStaticProps = async (context) => {
      const ida = context.params.id;
      console.log(ida);
      const id = "350-07-6873";
/*       const res = await client.query({
        query: GET_MEMBER,
        variables: {
            id: "350-07-6873"
          }
      }); */
      //console.log(res)
      return{
         // props: {member: res.data.member}
         props: {member: ida}
      }
  }

/*   function Repos(id){

    const client = new ApolloClient({
        uri: 'https://cooltix-frontend-challenge.herokuapp.com',
        cache: new InMemoryCache()
      });
    const { loading, error, data } = useQuery(GET_MEMBER, {
        variables: { id },
        options: {
            client: client,
        },
      });
    
      if (loading) return null;
      if (error) return `Error! ${error}`;
      
      console.log(data)

      return (
        data.member.lastName
      );
  } */

const MemberDetails = ( {member} ) => {
    const [options, setoptions] = useState([]);

    const classes = useStyles();

  //  console.log(member);

   // Repos(member);

    useEffect(() => {
      }, []);

    return (
        <div className={classes.member}>
            <div className={classes.memberAvatar}>
                <img height="150"   src={member.profilePictureUrl} alt="default user avatar" />
                <h2>{member.firstName} {member.lastName}</h2>
            </div>

            <div className={classes.memberDetails}>
              <div className={classes.memberHeader}>
                <h3>Details</h3>
                <div className={classes.memberButtons}>
                  <div className={`${classes.memberBtn} ${classes.memberBtnEdit}`}>Edit</div>
                  <div className={`${classes.memberBtn} ${classes.memberBtnDelete}`}>Delete</div>
                </div>
              </div>
              <div className={classes.detailsWrap}>
                <div className={classes.detailRow}>
                  <div className={classes.detail}>
                    <div className={classes.detailLabel}>First Name:</div>
                    <div className={classes.detailData}>Rose</div>
                  </div>
                  <div className={classes.detail}>
                    <div className={classes.detailLabel}>Last Name:</div>
                    <div className={classes.detailData}>Barnett</div>
                  </div>
                  <div className={classes.detail}>
                    <div className={classes.detailLabel}>Email:</div>
                    <div className={classes.detailData}>rose.barmett@example.com</div>
                  </div>
                </div>
                <div className={classes.detailRow}>
                  <div className={classes.detail}>
                    <div className={classes.detailLabel}>First Name:</div>
                    <div className={classes.detailData}>Rose</div>
                  </div>
                  <div className={classes.detail}>
                    <div className={classes.detailLabel}>Last Name:</div>
                    <div className={classes.detailData}>Barnett</div>
                  </div>
                  <div className={classes.detail}>
                    <div className={classes.detailLabel}>Email:</div>
                    <div className={classes.detailData}>rose.barmett@example.com</div>
                  </div>
                </div>
                <div className={classes.detailRow}>
                  <div className={classes.detail}>
                    <div className={classes.detailLabel}>First Name:</div>
                    <div className={classes.detailData}>Rose</div>
                  </div>
                  <div className={classes.detail}>
                    <div className={classes.detailLabel}>Last Name:</div>
                    <div className={classes.detailData}>Barnett</div>
                  </div>
                  <div className={classes.detail}>
                    <div className={classes.detailLabel}>Email:</div>
                    <div className={classes.detailData}>rose.barmett@example.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.memberSlots}>
              <div className={classes.membersSlotLeft}>
                <Pictures/>
              </div>
              <div className={classes.membersSlotRight}>
                <Purchases/>
              </div>
            </div>
            
        </div>
    )
};   
 export default MemberDetails;