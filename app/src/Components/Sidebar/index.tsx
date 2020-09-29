/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import Routes from '../../Global/Routes';
import './Sidebar.less';


function Sidebar() {

  return (
    <Layout.Sider id="sidebar">
      <Menu mode="inline">
        <Menu.Item key="a">
          <NavLink to={Routes.dashboard}>Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item key="b">
          <NavLink to={Routes.details}>Image Details</NavLink>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}
export default Sidebar;