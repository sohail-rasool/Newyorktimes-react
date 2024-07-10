import React from "react";
import Article from "../components/Article";
import { useGetPastWeekArticlesQuery } from "../store/apiSlice";
import Loader from "../components/Loader";

const PastWeekArticles = () => {
  const { data: pastWeekArticles, isLoading: pastDayLoading } =
    useGetPastWeekArticlesQuery();
  return (
    <div>
      {pastWeekArticles?.results?.map((item, index) => (
        <Article item={item} key={index} />
      ))}

      {pastDayLoading && <Loader />}
    </div>
  );
};

export default PastWeekArticles;
