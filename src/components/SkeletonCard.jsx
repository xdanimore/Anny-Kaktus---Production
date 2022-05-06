import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <div className="h-96 w-80 rounded-xl shadow-md bg-white">
      <div>
        <Skeleton className="h-44 w-full" />
      </div>
      <div className="py-4 px-6 h-[200px] overflow-hidden flex flex-col justify-between">
        <h1 className="font-bold text-xl">{<Skeleton />}</h1>
        <p className="text-flora-black text-sm">
          {<Skeleton />}
        </p>
        <div className="flex justify-between items-center mt-4">
          <h1 className="font-bold text-xl">{<Skeleton />}</h1>
          <h1
            className="bg-neutral-300 py-1 px-4 rounded-md text-flora-white font-semibold transition-colors duration-300 hover:bg-flora-secondhover"
            to={"/producto/${id}"}
          >
            {<Skeleton />}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
