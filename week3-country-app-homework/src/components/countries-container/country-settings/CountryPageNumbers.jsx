import React, { useEffect } from "react";

export default function CountryPageNumbers({ pageCount, setCurrentPage }) {
  //Page number setter.
  const handlePageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //Create n button(s) using given page count.
  const createPageButtons = () => {
    const pageArr = [];
    for (let i = 0; i < pageCount; i++) {
      pageArr.push(
        <button
          onClick={() => {
            handlePageNumber(i + 1);
          }}
          key={i}
          type="button"
          className="countries__pages__button"
        >
          {i + 1}
        </button>
      );
    }

    return pageArr;
  };

  return <div className="countries__pages">{createPageButtons()}</div>;
}
