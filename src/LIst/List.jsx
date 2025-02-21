import React from "react";

function List() {
  return (
    <>
      <div className="px-4 py-3 my-4">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div
              className="text-[#897361] flex border-none bg-[#f4f2f0] items-center justify-center pl-4 rounded-l-xl border-r-0 "
              data-icon="MagnifyingGlass"
              data-size="24px"
              data-weight="regular"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <input
              placeholder="Искать..."
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181411] focus:outline-0 focus:ring-0 border-none bg-[#f4f2f0] focus:border-none h-full placeholder:text-[#897361] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
            />
          </div>
        </label>
      </div>
      
      <div className="pb-3">
        <div className="flex border-b border-[#e6e0db] px-4 gap-8">
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#181411] text-[#181411] pb-[13px] pt-4" href="#">
            <p className="text-[#181411] text-sm font-bold leading-normal tracking-[0.015em]">Популярное</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#897361] pb-[13px] pt-4" href="#">
            <p className="text-[#897361] text-sm font-bold leading-normal tracking-[0.015em]">Салаты</p>
          </a>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 p-4">
        <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-white shadow-[0_0_4px_rgba(0,0,0,0.1)] min-w-40">
          <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col bg-[url('https://cdn.usegalileo.ai/sdxl10/99bc0a3e-adb9-448f-b422-e447f7a72854.png')]"></div>
          <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
            <div>
              <p className="text-[#181411] text-base font-medium leading-normal">Chicken Caesar Salad</p>
              <p className="text-[#897361] text-sm font-normal leading-normal">$8.99</p>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f4f2f0] text-[#181411] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Order Now</span>
            </button>
          </div>
        </div>
        <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-white shadow-[0_0_4px_rgba(0,0,0,0.1)] min-w-40">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col bg-[url('https://cdn.usegalileo.ai/sdxl10/ad17b129-0ea1-4b24-ae21-e9a990fc94ea.png')]"
        ></div>
        <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
          <div>
            <p className="text-[#181411] text-base font-medium leading-normal">Avocado Salad</p>
            <p className="text-[#897361] text-sm font-normal leading-normal">$9.99</p>
          </div>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f4f2f0] text-[#181411] text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Order Now</span>
          </button>
        </div>
      </div>
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-white shadow-[0_0_4px_rgba(0,0,0,0.1)] min-w-40">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col bg-[url('https://cdn.usegalileo.ai/sdxl10/032aac91-2c80-4374-ab1b-232dab963a6a.png')]"
          // style='background-image: url("https://cdn.usegalileo.ai/sdxl10/032aac91-2c80-4374-ab1b-232dab963a6a.png");'
        ></div>
        <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
          <div>
            <p className="text-[#181411] text-base font-medium leading-normal">Tuna Sandwich</p>
            <p className="text-[#897361] text-sm font-normal leading-normal">$7.99</p>
          </div>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f4f2f0] text-[#181411] text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Order Now</span>
          </button>
        </div>
      </div>
    </div>
 
    </>
  );
}

export default List;
