import Head from 'next/head'
import Header from '../src/components/Header';
import Main from '../src/components/Main';
import MemberDetails from '../src/components/MemberDetails';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cooltix Challange</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {/* <Main/> */}
      <MemberDetails/>
      <Footer/>
    </div>
  )
}
