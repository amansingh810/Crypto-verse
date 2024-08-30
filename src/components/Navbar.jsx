import  { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/cryptocurrency.png';
// import Cryptocurrencies from './Cryptocurrencies';
// import Exchanges from './Exchanges';
// import News from './News';
function Navbar() {
  return (
    
    
    <div className="nav-container">

       <div className="logo-container">
         <Avatar src={icon} size="large" />
          <Typography.Title level={2} className="logo"><Link to="/">Cryptoverse</Link></Typography.Title>
         {/* <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button> */}
      </div>

     

      <Menu theme="dark" >
        <Menu.Item icon={<HomeOutlined />} key={"Home"}>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item icon={<FundOutlined />}key={"Cryptocurrencies"}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>

        <Menu.Item icon={<MoneyCollectOutlined />} key={"Exchanges"}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        
        <Menu.Item icon={<BulbOutlined />}key={"News"}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>


    </div>

    
  )
}

export default Navbar