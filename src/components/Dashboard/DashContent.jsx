import React from "react";
import { useSelector } from "react-redux";
import { DashContentWrap } from "../../styles/components/Dashboard/DashContentStyle";
import DashHeader from "./DashHeader";
import DashPopular from "./DashPopular";

export default function DashContent() {
  const isDark = useSelector((state) => state.dark.mode);
  const popularBooksArr = [
    {
      name: "The Immortals of Meluha",
      author: "Amish Tripathi",
      publisher: "Westland Press",
    },
    {
      name: "The Immortals of Meluha",
      author: "Amish Tripathi",
      publisher: "Westland Press",
    },
    {
      name: "The Immortals of Meluha",
      author: "Amish Tripathi",
      publisher: "Westland Press",
    },
    {
      name: "The Immortals of Meluha",
      author: "Amish Tripathi",
      publisher: "Westland Press",
    },
    {
      name: "The Immortals of Meluha",
      author: "Amish Tripathi",
      publisher: "Westland Press",
    },
  ];
  return (
    <DashContentWrap isDark={isDark}>
      <DashHeader />
      <div className="dashboardMain">
        <div className="contentHeader">Popular Books</div>
        <div className="contentPopular">
          {popularBooksArr.map((data, index) => {
            return (
              <DashPopular
                key={index}
                name={data.name}
                author={data.author}
                publisher={data.publisher}
              />
            );
          })}
        </div>
        <div className="contentHeader1">New Collection</div>
        <div className="contentPopular">
          {popularBooksArr.map((data, index) => {
            return (
              <DashPopular
                key={index}
                name={data.name}
                author={data.author}
                publisher={data.publisher}
              />
            );
          })}
        </div>
      </div>
      <div className="searchData"></div>
    </DashContentWrap>
  );
}
