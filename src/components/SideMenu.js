import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { PieChartOutlined, DesktopOutlined } from '@ant-design/icons';
const { Sider } = Layout;


const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} style={{ backgroundColor: '#f0f2f5' }}>
      <Menu defaultSelectedKeys={['1']} mode="inline">
        {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
          页面一
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          页面二
        </Menu.Item> */}

        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/page-one">页面一</Link>
        </Menu.Item>

        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to="/page-two">页面二</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
