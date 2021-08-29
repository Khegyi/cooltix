import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Header from '../../src/components/Header';
import MemberDetails from '/MemberDetails';
import Footer from '../../src/components/Footer';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

import { createUseStyles } from "react-jss";
import Main from '../../src/components/Main';

  const client = new ApolloClient({
    uri: 'https://cooltix-frontend-challenge.herokuapp.com',
    cache: new InMemoryCache()
  });


export default function App() {

  const [members, setMembers] = useState([]);

  useEffect(() => {
       }, []);

  return (
    <ApolloProvider client={client}>
      <div className="container">
        <style jsx global>{`
          body {
            margin: 0;
          }
        `}</style>
        <Head>
          <title>Cooltix Challange</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Quicksand"/>
        </Head>
        <Header/>
        {selectedMember.length === 0 ? <Main /> : <MemberDetails />}
        <Footer/>
      </div>
    </ApolloProvider>
  )
}
