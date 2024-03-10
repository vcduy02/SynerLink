import {Layout} from 'antd';
import {useState} from 'react'
import {Logo, Menu, DropMenu, Login, Signup} from './header';

const { Header: Head } = Layout;

const Header = () => {

  const publickey = localStorage.getItem('wallet_address');
  // localStorage.removeItem('wallet_address')
  
  const [open, setOpen] = useState(false);
  const [checkWallet, setCheckWallet] = useState(false);

  const showModal = (method) => {
    let useMethod = method.toLowerCase()
    return {
      login : () =>  setOpen(true),
      signup : () =>  setCheckWallet(true)
    }[useMethod]();
  };

  const handleCancel = (method) => {
    let useMethod = method.toLowerCase()
    return {
      login : () => setOpen(false),
      signup : () => setCheckWallet(false)
    }[useMethod]();
  };

  return (
    <>
      <Head style={{ display: 'flex',  alignItems: 'center', justifyContent: "center" }}>
        
        <Logo/>

        {/* Menu */}
        <Menu/>
        
        {/* Manager */}
        <DropMenu publicKey={publickey} showModal={showModal}/>

        {/* auth */}
        <Login open={open} handleCancel={handleCancel} showModal={showModal}/>
        <Signup checkWallet={checkWallet} handleCancel={handleCancel} />
    
      </Head>
    </>
  )
};

export default Header;