import React from "react";
import { Route, Routes } from "react-router-dom";
import PastDayArticles from "./containers/PastDayArticles";
import PastMonthArticles from "./containers/PastMonthArticles";
import PastWeekArticles from './containers/PastWeekArticles'
import Details from "./containers/Details";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <PastDayArticles />
          </Layout>
        }
      />
      <Route
        path="/pastMonth"
        element={
          <Layout>
            <PastMonthArticles />
          </Layout>
        }
      />
      <Route
        path="/pastWeek"
        element={
          <Layout>
            <PastWeekArticles />
          </Layout>
        }
      />
      <Route
        path="/details"
        element={
          <Layout>
            <Details />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <h1>404</h1>
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
