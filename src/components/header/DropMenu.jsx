import {Avatar, Dropdown, Button} from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const DropMenu = ({publicKey, showModal}) => {
  let menu = [
    "Profile",
    "Logout",
    "CreateNFT",
  ];

  const items = menu.map((item, index) => ({
    key: index++,
    label: (
      <Link to={item.toLowerCase()}>{item}</Link>
    )
  }))

  return (
      <div 
      style={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center" 
      }}
      >
        <Button 
        icon={<AntDesignOutlined />} 
        onClick={publicKey ? ()=> {} : () => showModal('login')} 
        style={{ 
          backgroundColor: "rgba(255, 255, 255, 0.12)", 
          color: "#FFFFFFD9", 
          border: "rgba(255, 255, 255, 0.12)", 
          fontWeight: "bold", 
          marginRight: "20px"
        }}
        >
          {publicKey ? "Swich network" : "Login" }
        </Button>
        <Dropdown 
        menu={{items}} 
        trigger={['click']} 
        placement="bottomRight" >
          <Avatar 
          shape="square" 
          icon={
            <UserOutlined 
            style={{ padding: "10px" }}
            />
          } 
            style={{ 
              backgroundColor: "rgba(255, 255, 255, 0.12)", 
              fontWeight:"700" 
            }}
          />
        </Dropdown>
      </div>
  )
}

export default DropMenu