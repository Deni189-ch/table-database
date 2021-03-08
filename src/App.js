import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Row, Col, Input, Space, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

import { BtnControls, DetailPerson, PersonsList, AddFormComponent } from "./components/index";
import {showPersonList, onSearchPerson, addData, onSearchValue} from "./redux/actions";



const antIcon = <LoadingOutlined style={{ fontSize: 40}} spin />;
const { Search } = Input;

export function App() {

  const dispatch = useDispatch()

  const data = useSelector(state => state.state.data);
  const isForm = useSelector(state => state.state.isForm);
  const detail = useSelector(state => state.state.detailData);
  const isDisabled = useSelector(state => state.state.isDisabled);
  const onSearchText = useSelector(state => state.state.onSearchText);

  const onSearchPersonHandler = (event) => {
    dispatch(onSearchPerson(event))
    dispatch(onSearchValue(''))
  };

  const onChangeHandler = (event) => {
    dispatch(onSearchValue(event.target.value))
  }

  return (
    <Col span={24}>
      <Row justify="center" className="header">
        <h1>database</h1>
        <br/>
        {isDisabled && <Spin indicator={antIcon} style={{position: "absolute", left: '35%'}} />}
      </Row>

      <Col span={20} offset={2}>
        <BtnControls isDisabled={isDisabled} />

        <Space direction="vertical">
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onChange={onChangeHandler}
            onSearch={onSearchPersonHandler}
            value={onSearchText}
            className="vw80 margin-bot20"
          />
        </Space>

        { Object.keys(detail).length !== 0 && <DetailPerson detail={detail} showPersonList={showPersonList}/> }  
        { isForm && <AddFormComponent detail={detail} addData={addData}/> }  

        <PersonsList data={data} showPersonList={showPersonList}/>

      </Col>
    </Col>
  );
};
