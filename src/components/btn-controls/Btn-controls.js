import { React } from "react";
import { useDispatch } from "react-redux";

import { Row, Button } from "antd";

import {dataBtn} from "./data";
import { getDatas, isFormToggle } from "../../redux/actions";


export const BtnControls = ({ isDisabled }) => {
  const dispatch = useDispatch();

  const requestHandler = (event) => {
    const sizeUrl = event.target.dataset.sizeUrl
    debugger
    sizeUrl ? dispatch(getDatas( + sizeUrl))
    : dispatch(isFormToggle())
  };

  const printBtns = dataBtn.map((el) => {
    return (
      <Button key={el.id}
        size="large"
        type="primary"
        disabled={isDisabled}
        onClick={requestHandler}
        data-size-url={el.sizeReauestData}
        className="btn-control"
        style={{
          background: isDisabled ? "#1890ffc4" : "",
          color: isDisabled ? "white" : "",
        }}
      >
        {el.name}
      </Button>
    );
  });

  return (
    <Row justify="center">

      {printBtns}
      
    </Row>
  );
};
