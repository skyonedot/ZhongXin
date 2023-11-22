import React from 'react';
import { Layout, Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons'; // 导入UserOutlined图标
const { Header } = Layout;

const TopBar = () => {
  const userMenu = (
    <Menu>
      <Menu.Item key="0">个人中心</Menu.Item>
      <Menu.Item key="1">退出登录</Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ backgroundColor:'#181818',display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="Logo.png" alt="Logo" style={{ width: '50px', height: '50px', marginRight: 16 }} />
        <span style={{ color: 'white' }}>XXX管理平台</span>
      </div>
      <Dropdown menu={userMenu} trigger={['click']}>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <Avatar style={{ backgroundColor: '#87d068',marginRight:12 }} icon={<UserOutlined />} />
          <span style={{ color: 'white' }}>用户名</span>
          {/* <Button icon={<SettingOutlined />}></Button> */}
        </button>
      </Dropdown>
    </Header>
  );
};

export default TopBar;
