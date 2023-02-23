import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = ({ size }) => {
  return Array(size)
    .fill(0)
    ?.map((_, index) => (
      <div
        key={index}
        className="d-flex col-lg-3 col-md-4 px-1 py-3 border rounded"
        style={{ columnGap: "1rem" }}
      >
        <Skeleton circle height={50} width={50} />
        <div className="d-flex flex-column w-100" style={{ rowGap: ".3rem" }}>
          <Skeleton count={4} />
        </div>
      </div>
    ));
};

export default SkeletonCard;
