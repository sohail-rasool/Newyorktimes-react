import React from "react";
import Article from "../components/Article";
import { useGetPastMonthArticlesQuery } from "../store/apiSlice";
import Loader from "../components/Loader";

const PastMonthArticles = () => {
  const { data: pastMonthArticles, isLoading: pastDayLoading } =
    useGetPastMonthArticlesQuery();
  return (
    <div>
      {pastMonthArticles?.results?.map((item, index) => (
        <Article item={item} key={index} />
      ))}

      {pastDayLoading && <Loader />}
    </div>
  );
};

export default PastMonthArticles;
