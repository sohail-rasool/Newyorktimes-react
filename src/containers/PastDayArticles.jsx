import React from "react";
import Article from "../components/Article";
import { useGetPastDayArticlesQuery } from "../store/apiSlice";
import Loader from "../components/Loader";

const Home = () => {
  const { data: pastDayArticles, isLoading: pastDayLoading } =
    useGetPastDayArticlesQuery();
  console.log("pastDayArticles ==>", pastDayArticles);
  return (
    <div>
      {pastDayArticles?.results?.map((item, index) => (
        <Article item={item} key={index} />
      ))}

      {pastDayLoading && <Loader />}
    </div>
  );
};

export default Home;
