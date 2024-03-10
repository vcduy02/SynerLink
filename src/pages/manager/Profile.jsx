import { Tabs } from 'antd';
import {List} from '../../features/NFT';


const Profile = () => {
    const items = [
        
        {
          key: '1',
          label: 'Collected',
          children: <List/>,
        },
        {
          key: '2',
          label: 'Tab 2',
          children: 'Content of Tab Pane 2',
        },
        {
          key: '3',
          label: 'Tab 3',
          children: 'Content of Tab Pane 3',
        },
    ];

    return (
      <Tabs 
      defaultActiveKey="1" 
      items={items} 
      />
    )
};
export default Profile;