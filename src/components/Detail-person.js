import React from "react";
import { useDispatch } from "react-redux";

import { Col, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

export const DetailPerson = ({showPersonList, detail}) => {

  const dispatch = useDispatch();

  const getShowPersonListHandler = () => {
    dispatch(showPersonList({}))
  };

  return (
    <Col span={20} className="detail-person">
      <li className="detail-person__btn-wr">
         <Button type="primary"
          icon={<CloseOutlined />}
          size='large'
          onClick={getShowPersonListHandler}
          className="detail-person__btn"
          />
      </li>
      <li className="detail-person__item">User: <b>{detail.firstName}</b> </li>
      <li className="detail-person__item">Description: <br/> {detail.description} </li>
      <li className="detail-person__item">Residence address: <b>{detail.address.streetAddress}</b> </li>
      <li className="detail-person__item">City: <b>{detail.address.city}</b> </li>
      <li className="detail-person__item">Province / State: <b>{detail.address.state}</b> </li>
      <li className="detail-person__item">Index: <b>{detail.address.zip}</b> </li>
    </Col>
  )
};