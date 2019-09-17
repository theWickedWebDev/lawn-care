// @flow
import React from 'react'
import { Layout } from 'antd';
const { Content } = Layout;

type Props = {
  header: any,
  footer: any,
  children: any,
};

class StandardLayout extends React.Component<Props> {
  render() {
    const { header, footer, children } = this.props;
    return (
      <Layout>
        { header }
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          { children }
        </div>
        { footer }
      </Layout>
    );
  };
}

export default StandardLayout;
