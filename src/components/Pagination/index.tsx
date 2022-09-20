import React from 'react';
import { Pagination as PaginationAntd } from 'antd';
import AppContext from '../../context';

const Pagination = () => {
  const {
    currentPage, allPages, fetchData,
  } = React.useContext(AppContext);
  const onChangePagination = (page:number) => {
    fetchData(page);
    window.scrollTo(0, 0);
  };
  if (allPages <= 20) return null;
  return (
    <PaginationAntd
      onChange={onChangePagination}
      showSizeChanger={false}
      current={currentPage}
      total={allPages}
    />
  );
};

export default Pagination;
