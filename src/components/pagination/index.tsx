import React from "react";

interface Props {
  pages: number;
  handlePage: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ pages, handlePage }) => {
  const listPages = Array.from(Array(pages).keys());
  return (
    <div className="flex flex-wrap gap-2">
      {listPages.map((page) => (
        <div
          className="text-black cursor-pointer bg-blue-400 w-10 h-10 flex justify-center items-center p-1 rounded-full"
          onClick={() => handlePage(page + 1)}
          key={page + 1}
        >
          {page + 1}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
