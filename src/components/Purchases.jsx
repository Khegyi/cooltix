import React, { useEffect, useState } from 'react';
import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
  membersPurchases:{
    border: '1px solid #e5e5e5',
    borderRadius: '4px',
    padding: '15px',
    height: '242px',
  },
  purchasesHeader:{
    display:'flex',
    justifyContent:'space-between',
    '& h3':{
      margin: '0',
      color: '#00A4FF',
    },
    '& a':{
      color: '#00A4FF',
      textDecoration: 'none',
      '&:hover':{
        filter: 'saturate(60%)',
        textDecoration: 'underline',
      }
    }
  },
  purchasesList:{
    display:'flex',
    flexDirection: 'column',
    marginTop: '10px',
    marginLeft: '10px',
    padding: '0',
  },
  purchaseItem: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #E5E5E5',
    marginBottom: '5px',
    '&:hover':{
      backgroundColor: '#f5f5f5',
      cursor: 'pointer',
    }
  },
  purchaseDetail:{
    display:'none',
  },
  purchaseDetailBtn:{
    border: '1px solid #E5E5E5',
    borderRadius: '4px',
    height: '15px',
    width: '15px',
    margin: '1px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover':{
      backgroundColor: '#E5E5E5',
      cursor: 'pointer',
    }
  },
})


const Purchases = ( props ) => {
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
      <div className={classes.membersPurchases}>
         <div className={classes.purchasesHeader}>
          <h3>Purchases</h3>
          <a href="#">See all</a>
        </div>
        <ul className={classes.purchasesList}>
          <li key="546" className={classes.purchaseItem}>
          <div className={classes.purchaseQuantity}>1x</div>
            <div className={classes.purchaseType}> Movie Ticket</div>
            <div className={classes.purchaseMerchant}>CinemaPlex Houston</div>
            <div className={classes.purchaseDate}>2021.12.12</div>
            <div className={classes.purchaseTime}>16:58</div>
            <div className={classes.purchaseDetailBtn}>
              <img src="/chevron_down.svg" alt="" />
            </div>
            <div className={classes.purchaseDetail}>
              <div className={classes.purchaseAmount}>29.69 USD</div>
              <div className={classes.purchaseMethod}>Card</div>
              <div className={classes.purchaseLocation}>20373 Houston TE 254 LakeShore Rd</div>
              <div className={classes.purchaseDesc}>No Data</div>
            </div>
          </li>
          <li key="542" className={classes.purchaseItem}>
          <div className={classes.purchaseQuantity}>1x</div>
            <div className={classes.purchaseType}> Movie Ticket</div>
            <div className={classes.purchaseMerchant}>CinemaPlex Houston</div>
            <div className={classes.purchaseDate}>2021.12.12</div>
            <div className={classes.purchaseTime}>16:58</div>
            <div className={classes.purchaseDetailBtn}>
              <img src="/chevron_down.svg" alt="" />
            </div>
            <div className={classes.purchaseDetail}>
              <div className={classes.purchaseAmount}>29.69 USD</div>
              <div className={classes.purchaseMethod}>Card</div>
              <div className={classes.purchaseLocation}>20373 Houston TE 254 LakeShore Rd</div>
              <div className={classes.purchaseDesc}>No Data</div>
            </div>
          </li>
          <li key="541" className={classes.purchaseItem}>
          <div className={classes.purchaseQuantity}>1x</div>
            <div className={classes.purchaseType}> Movie Ticket</div>
            <div className={classes.purchaseMerchant}>CinemaPlex Houston</div>
            <div className={classes.purchaseDate}>2021.12.12</div>
            <div className={classes.purchaseTime}>16:58</div>
            <div className={classes.purchaseDetailBtn}>
              <img src="/chevron_down.svg" alt="" />
            </div>
            <div className={classes.purchaseDetail}>
              <div className={classes.purchaseAmount}>29.69 USD</div>
              <div className={classes.purchaseMethod}>Card</div>
              <div className={classes.purchaseLocation}>20373 Houston TE 254 LakeShore Rd</div>
              <div className={classes.purchaseDesc}>No Data</div>
            </div>
          </li>
        </ul>
      </div>
    )
};   
 export default Purchases;