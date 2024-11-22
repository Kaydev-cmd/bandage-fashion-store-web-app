import React from "react";

export const ExploreItemsCards = () => {
  return (
    <>
      <div className="flex items-center justify-around mt-20 xl:gap-4 lg:gap-2 sm:flex-col">
        <div className="bg-[url('/images/home/unsplash_Bd7gNnWJBkU.jpg')] bg-cover bg-no-repeat bg-center h-[578px] w-[600px] xl:w-[500px] sm:w-[100%] flex flex-col justify-end">
          <div className="w-[60%] h-[186px] bg-[#2D8BC0] p-8 opacity-70 lg:w-[300px]">
            <h3 className="text-[20px] text-white mb-3">
              Top Products Of
              <br />
              the Week
            </h3>
            <button className="uppercase bg-[#2D8BC0] border py-2 px-4 rounded-[4px] text-white">
              Explore Items
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-[url('/images/home/unsplash_muOHbrFGEQY.jpg')] bg-cover bg-no-repeat bg-center h-[280px] w-[500px] xl:w-[500px] lg:w-[400px] md:w-[300px] sm:w-[460px] xs:w-[304px] flex flex-col justify-end">
            <div className="w-[60%] h-[170px] bg-[#2D8BC0] p-8 opacity-70 md:w-[280px] sm:w-[300px]">
              <h3 className="text-[20px] text-white mb-3">
                Top Products Of
                <br />
                the Week
              </h3>
              <button className="uppercase bg-[#2D8BC0] border py-2 px-4 rounded-[4px] text-white">
                Explore Items
              </button>
            </div>
          </div>

          <div className="bg-[url('/images/home/unsplash_MKvjc2kar7Q.jpg')] bg-cover bg-no-repeat bg-center h-[280px] w-[500px] xl:w-[500px] lg:w-[400px] md:w-[300px] sm:w-[460px] xs:w-[304px] flex flex-col justify-end">
            <div className="w-[60%] h-[170px] bg-[#2D8BC0] p-8 opacity-70 md:w-[280px] sm:w-[300px]">
              <h3 className="text-[20px] text-white mb-3">
                Top Products Of
                <br />
                the Week
              </h3>
              <button className="uppercase bg-[#2D8BC0] border py-2 px-4 rounded-[4px] text-white">
                Explore Items
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
