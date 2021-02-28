import React from "react";
import { useSelector } from "react-redux";
import meluha from "../../images/book cover/meluha.jpg";
import { DashPopularWrap } from "../../styles/components/Dashboard/DashPopularStyle";

export default function DashPopular(props) {
  const isDark = useSelector((state) => state.dark.mode);
  return (
    <DashPopularWrap isDark={isDark}>
      <img className="bookCover" src={meluha} alt="" />
      <div className="bookName">
        <span className="bookLabel">Name </span>
        <span className="bookPara">: {props.name}</span>
      </div>
      <div className="bookAuthor">
        <span className="bookLabel">Author </span>
        <span className="bookPara">: {props.author}</span>
      </div>
      <div className="bookPublish">
        <span className="bookLabel">Publisher </span>
        <span className="bookPara">: {props.publisher}</span>
      </div>
    </DashPopularWrap>
  );
}
