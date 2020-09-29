import React from 'react';
import { Layout, Typography, Modal } from 'antd';
import OrganizationImage from '../../Assets/Images/organization.png';
import './Header.less';
import Constant from '../../Global/Constant';


function Header() {
  return (
    <Layout.Header id="header" className="px-4">
      <Layout.Content className="d-flex justify-content-between">
        <Typography.Text strong>
          <img src={OrganizationImage} className="mr-3" height={40} alt="" />
          {Constant.applicationName}
        </Typography.Text>
      </Layout.Content>
    </Layout.Header>
  );
}

export default Header;
