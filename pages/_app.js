import '../src/style/global.css';
import Layout from '../src/components/Layout';


const App = ({Component, pageProps}) => {

    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}

export default App