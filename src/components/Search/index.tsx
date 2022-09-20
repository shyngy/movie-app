import React from 'react';
import { Input } from 'antd';
import debounce from 'lodash/debounce';
import AppContext from '../../context';

const Search = () => {
  const placeholder = 'Type To Search';
  const { fetchData } = React.useContext(AppContext);

  const onChangeInput = debounce((
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    fetchData(1, event.target.value);
  }, 1000);

  return (

    <Input onChange={onChangeInput} size="large" placeholder={placeholder} />

  );
};

export default Search;
