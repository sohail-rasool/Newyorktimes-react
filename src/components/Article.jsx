import React from "react";
import { useNavigate } from "react-router-dom";

const Article = ({ item = {} }) => {
  const navigate = useNavigate();
  const redirectHandler = (data) => {
    navigate("/details", {
      state: {
        data,
      },
    });
  };
  return (
    <div
      onClick={() => redirectHandler(item)}
      className="article-wrapper p-4 mb-3"
    >
      <div className="row">
        <div className="col-md-8">
          <div>
            <h4 className="mb-3 text-dark">{item?.title}</h4>
            <p className="text-black-50">{item?.abstract}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
