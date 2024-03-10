import { Layout } from 'antd';

const { Footer: Foot } = Layout;

const Footer = () => {
  
    return (
        <Foot style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Foot>
    );
};
  
export default Footer;