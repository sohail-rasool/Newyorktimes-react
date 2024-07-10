import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  console.log('state ==>',state)
  return (
    <div className="text-center">
      <h4 className="mb-3">
        {state?.data?.title}
      </h4>
      <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
        <b className="text-dark">Type:</b><p className="text-black-50 mb-0">{state?.data?.type}</p>
      </div>
      <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
        <b className="text-dark">abstract:</b><p className="text-black-50 mb-0">{state?.data?.abstract}</p>
      </div>
      <div>
      {<img className="img-size" src={state?.data?.media[0]['media-metadata'][0]?.url} alt="img" />}
      </div>
   
     
    </div>
  );
};

export default Details;
