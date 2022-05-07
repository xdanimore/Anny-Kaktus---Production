import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <div className="h-96 w-80 rounded-xl shadow-md bg-white">
      <div>
        <Skeleton className="h-40 w-full" />
      </div>
      <div className="py-4 px-6 h-[200px] overflow-hidden flex flex-col justify-between">
        <h1 className="">{<Skeleton count={1} width={50}/>}</h1>
        <p>{<Skeleton count={4} />}</p>
        <div className="flex justify-between items-center mt-4">
          <h1>{<Skeleton width={75} height={35} />}</h1>
          <h1>{<Skeleton width={100} height={35}/>}</h1>

        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
