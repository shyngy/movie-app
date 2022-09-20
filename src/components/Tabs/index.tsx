import React from 'react';
import { Tabs as TabsAntd } from 'antd';

import AppContext from '../../context';

const Tabs: React.FC = () => {
  const { fetchData, setPostsState } = React.useContext(AppContext);
  const onChangeTab = (activeKey: string) => {
    console.log(activeKey, setPostsState);

    if (activeKey === '1') fetchData();
    if (activeKey === '2') {
      const movies = [];
      for (let index = 0; index < localStorage.length; index += 1) {
        const key = localStorage.key(index);
        if (key) {
          movies.push(JSON.parse(key));
        }
      }
      setPostsState(movies);
    }
  };
  const items = [
    { label: 'Search', key: '1' },
    { label: 'Rated', key: '2' },
  ];
  return (
    <TabsAntd onChange={onChangeTab} items={items} />
  );
};

export default Tabs;
