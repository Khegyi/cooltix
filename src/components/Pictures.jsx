import React, { useEffect, useState } from 'react';
import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
  membersPictures:{
    border: '1px solid #e5e5e5',
    borderRadius: '4px',
    padding: '15px',
  },
  picturesHeader:{
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
  pictureList:{
    display:'flex',
    justifyContent:'center',
    flexWrap: 'wrap',
    justifyContent:'space-between',
    marginTop: '10px',
    '& img':{
      marginTop:'8px',
    }
  },
})


const Pictures = ( props ) => {
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
      <div className={classes.membersPictures}>
        <div className={classes.picturesHeader}>
          <h3>Pictures</h3>
          <a href="#">See all</a>
        </div>
        <div className={classes.pictureList}>
          {
            fakePics()
          }
        </div>
      </div>
    )
};   
 export default Pictures;