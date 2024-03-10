import { Layout } from 'antd';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
const BaseLayout = () => {
    return (
        <Layout>
            <Header/>
            <Body/>
            <Footer/>
        </Layout>
    )
}

export default BaseLayout