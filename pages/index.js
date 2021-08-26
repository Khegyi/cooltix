import Head from 'next/head'
import Header from '../src/components/Header';
import Main from '../src/components/Main';
import MemberDetails from '../src/components/MemberDetails';
import Footer from '../src/components/Footer';


import { createUseStyles } from "react-jss";



export default function App() {
  return (
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
      <Main/>
      {/* <MemberDetails/> */}
      <Footer/>
    </div>
  )
}
