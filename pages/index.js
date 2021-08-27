import React, { useEffect, useState } from 'react';
import Main from '../src/components/Main';


import { createUseStyles } from "react-jss";


export default function Home() {

  const [members, setMembers] = useState([]);

  useEffect(() => {
       }, []);

  return (
      <div className="container">
        <Main/>
      </div>
  )
}
