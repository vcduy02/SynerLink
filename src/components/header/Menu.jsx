import {Menu as Nav} from 'antd';
import { Link } from 'react-router-dom';


const Menu = () => {

  let menu = [
    "Drops",
    "Stats",
    "Create"
  ];

  
  const items = menu.map((item, index) => ({
    key: index + 1,
    checked:{
      theme: "dark"
    },
    style: {
      borderRadius: "10px",
      height: "50px",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
    },
    label: (
        <Link to={'#'}>{item}</Link>
    ),
  }));

  return (
      <Nav 
      theme="dark" mode="horizontal" 
      defaultSelectedKeys={['']} 
      items={items} 
      style={{ 
        flex: 1, 
        minWidth: 0
      }} />
  )
}

export default Menu;