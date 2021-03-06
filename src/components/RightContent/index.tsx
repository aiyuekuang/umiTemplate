import {Space} from 'antd';
import React from 'react';
import {SelectLang, useModel} from 'umi';
import styles from './index.less';

const GlobalHeaderRight: React.FC = () => {
  const {initialState} = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const {navTheme, layout} = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }


  return (
    <Space className={className}>
      <SelectLang className={styles.action}/>
    </Space>
  );
};
export default GlobalHeaderRight;
