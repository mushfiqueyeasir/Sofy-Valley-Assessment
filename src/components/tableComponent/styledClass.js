import "./style.css";

export const tableBodyStyle = "customTable shadow-xl  w-full";

export const tableHeadStyle =
  "bg-base-200 rounded-t-xl dark:bg-[#1b1a1a] dark:text-white ";

export const serialThStyle = "rounded-tl-xl";

export const tableActionHeadStyle = "rounded-tr-xl";

export const tableCellStyle = (even) => {
  return even
    ? "bg-gray-50 dark:bg-[#2a303ca2] dark:text-white"
    : "bg-white dark:bg-[#2A303C] dark:text-white";
};

export const cellImageBodyStyle = "flex items-center space-x-3";

export const imageDivStyle = "avatar";

export const imageStyle = "mask mask-squircle w-12 h-12";

export const nameStyle = "font-bold";

export const locationStyle = "text-sm opacity-50";

export const workCategoryStyle = "badge badge-ghost badge-sm";

export const statusDivStyle = "flex justify-center w-[40%]";

export const statusStyle = (status) => {
  if (status === "success")
    return "w-[10px] h-[10px] bg-green-500 rounded-full shadow text-center";
  else if (status === "warning")
    return "w-[10px] h-[10px] bg-yellow-500 rounded-full shadow text-center";
  else if (status === "expired")
    return "w-[10px] h-[10px] bg-red-500 rounded-full shadow text-center";
};

export const actionDivStyle = "flex gap-4 text-xl";

export const viewButtonStyle = "text-green-400 cursor-pointer";

export const editButtonStyle = "text-yellow-300 cursor-pointer";

export const deleteButtonStyle = "text-[#DD0505] cursor-pointer";
