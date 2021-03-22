import React from "react";
import close from "../../images/close.png";
import closeW from "../../images/closeW.png";
import meluha from "../../images/bookcover/meluha.jpg";
import { BookDetailsModalWrap } from "../../styles/components/Dashboard/BookDetailsModalStyle";
import { useSelector } from "react-redux";

export default function BookDetailsModal(props) {
  const isDark = useSelector((state) => state.dark.mode);
  return (
    <BookDetailsModalWrap isDark={isDark}>
      <div className="Container">
        <div className="Container__Header">
          <div className="Container__Header--Para">{props.name}</div>
          <img
            className="Container__Header--Img"
            onClick={props.closeModal}
            src={isDark ? closeW : close}
            alt=""
          />
        </div>
        <div className="Container__Body">
          <div className="Container__Body--Col1">
            <img
              className="Container__Body--Col1__Img"
              src={props.poster}
              alt=""
            />
          </div>
          <div className="Container__Body--Col2">
            <div className="Container__Body--Col2__Row">
              <div className="Container__Body--Col2__Row--Label">Author</div>
              <div className="Container__Body--Col2__Row--Colan">:</div>
              <div className="Container__Body--Col2__Row--Para">
                {props.author}
              </div>
            </div>
            <div className="Container__Body--Col2__Row">
              <div className="Container__Body--Col2__Row--Label">
                Description
              </div>
              <div className="Container__Body--Col2__Row--Colan">:</div>
              <div className="Container__Body--Col2__Row--Para">
                {props.description}
              </div>
            </div>
            <div className="Container__Body--Col2__Row">
              <div className="Container__Body--Col2__Row--Label">Publisher</div>
              <div className="Container__Body--Col2__Row--Colan">:</div>
              <div className="Container__Body--Col2__Row--Para">
                {props.publisher}
              </div>
            </div>
            <div className="Container__Body--Col2__Row">
              <div className="Container__Body--Col2__Row--Label">Price</div>
              <div className="Container__Body--Col2__Row--Colan">:</div>
              <div className="Container__Body--Col2__Row--Para">
                <span>₹ </span>
                {props.price}
              </div>
            </div>
          </div>
        </div>
        <div className="Container__Footer"></div>
      </div>
    </BookDetailsModalWrap>
  );
}
