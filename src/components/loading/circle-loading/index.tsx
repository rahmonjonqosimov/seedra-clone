import React from "react";
import "./index.scss";

const SingleRouteSkeleton: React.FC = () => {
  return (
    <div className="loadingPro">
      <div className="loadingP-item">
        <div className="radus-loading"></div>
        <div className="radus-loading1"></div>
      </div>
    </div>
  );
};

export default SingleRouteSkeleton;
