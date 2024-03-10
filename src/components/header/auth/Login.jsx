import {Avatar, Button, Modal, Spin} from 'antd';
import { LoadingOutlined  } from '@ant-design/icons';
import reactLogo from '../../../assets/logoLogin/White Ghost_docs_nu.svg'
import { solanaConnect } from '../../../services/auth';
import { useState } from 'react';
import { useStore } from '../../../hook';


const Login = ({open, handleCancel, showModal }) => {

  const {network} = useStore();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const {messageApi} = useStore()

  const onSubmit = async () => {

    setConfirmLoading(true)
    const wallet = await solanaConnect(network)

    if(wallet){

      setConfirmLoading(false)
      handleCancel('login')
      messageApi.open({
        type: 'success',
        content: 'Đăng nhập thành công',
      })

    }

  }

  return (
      <>
       {
       confirmLoading && 
        <div style={{ position: "absolute", backgroundColor: "rgba(0, 0, 0, 0.5)", inset: 0, zIndex: 9999999 }}>
          <Spin indicator={<LoadingOutlined 
          style={{ 
          fontSize: 24, 
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)" 
          }} spin />} 
          />
        </div>
      }
      <Modal
        title="login"
        open={open}
        onCancel={() => handleCancel('login')}
        footer=""
        contentBg="rgb(18, 18, 18)"
      >

        <Button

        style={{
          backgroundColor: "rgb(18 18 18/4%)", 
          border: "rgba(255, 255, 255, 0.12)", 
          fontWeight: "bold", 
          marginRight: "20px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "20px",
          marginBottom: "10px"
        }}

        onClick={onSubmit}

        >

          <Avatar
          size={"small"}
          src={reactLogo} 
          shape="square"
          style={{ 
            marginRight: "10px"
          }}
          />

          Phantom

        </Button>

        <Button
        style={{
          backgroundColor: "rgb(18 18 18/4%)", 
          border: "rgba(255, 255, 255, 0.12)", 
          fontWeight: "bold", 
          marginRight: "20px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "20px",
        }}
        onClick={()=> {

          handleCancel('login')
          showModal('signup')

        }}
        >

          <Avatar
          size={"small"}
          src={reactLogo} 
          shape="square" 
          style={{ 
            marginRight: "10px"
          }}
          />

          Create wallet

        </Button>

      </Modal>
      </>
  )
}

export default Login