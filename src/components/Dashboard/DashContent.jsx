import React from "react";
import { useSelector } from "react-redux";
import { DashContentWrap } from "../../styles/components/Dashboard/DashContentStyle";
import DashHeader from "./DashHeader";
import DashPopular from "./DashPopular";

export default function DashContent(props) {
  const isDark = useSelector((state) => state.dark.mode);

  return (
    <DashContentWrap isDark={isDark}>
      <DashHeader toggleLogoutModal={props.toggleLogoutModal} />
      <div className="dashboardMain">
        <div className="contentHeader">Popular Books</div>
        <div className="contentPopular">
          {props.popularBooksArr.map((data, index) => {
            return (
              <DashPopular
                key={index}
                id={index}
                name={data.name}
                author={data.author}
                publisher={data.publisher}
                poster={data.poster}
                arrayPointer={"popularBooksArr"}
                toggleDetailsModal={props.toggleDetailsModal}
              />
            );
          })}
        </div>
        <div className="contentHeader1">New Collection</div>
        <div className="contentPopular">
          {props.newCollectionBooksArr.map((data, index) => {
            return (
              <DashPopular
                key={index}
                id={index}
                name={data.name}
                author={data.author}
                publisher={data.publisher}
                poster={data.poster}
                arrayPointer={"newCollectionBooksArr"}
                toggleDetailsModal={props.toggleDetailsModal}
              />
            );
          })}
        </div>
      </div>
      <div className="searchData"></div>
    </DashContentWrap>
  );
}
