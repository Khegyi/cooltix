import React, { useEffect, useState } from 'react';
import Link from 'next/dist/client/link';

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  notfound: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Quicksand Book',
    height: '400px',
    '& a': {
      color: '#00A4FF'
    }
  },
})

const NotFound = (  ) => {
  const classes = useStyles();
  return (
     <div className={classes.notfound}>
       <h1>Error 404 </h1>
       <h2> Whoops... </h2>
       <h3> The page you were looking for does not exist </h3>
       <Link href="/"><a>Go Home</a></Link>
     </div>
  )
}
 
export default NotFound;