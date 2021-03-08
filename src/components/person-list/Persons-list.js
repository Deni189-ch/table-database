import React from "react";
import { useDispatch } from "react-redux";

import {columns} from "./data";
import { Table } from 'antd';

export const PersonsList = ({data, showPersonList}) => {
  const dispatch = useDispatch();
  
  const datas = data.map((item, i) => item = {...item, key: i})

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  const getShowPersonListHandler = (record) => {
    dispatch(showPersonList(record))
  }

  return (
    <Table columns={columns} 
    dataSource={datas} 
    onChange={onChange}
    pagination={{ position: ["bottomCenter"], showSizeChanger: true, pageSizeOptions: ["10", "20", "30", "40", "50"] }}
    className="vw80"
    onRow={record => {
      return {
          onClick: () => {getShowPersonListHandler(record)} 
      }
  }}
  style={{ cursor: 'pointer'}}
    />   
  )
}