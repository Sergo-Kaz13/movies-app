import React from "react";
import ReactPaginate from "react-paginate";
import style from "./PaginatedItems.module.css";

function PaginatedItems({ itemsPerPage = 1, items = 1, setCurrentPage }) {
  const pageCount = Math.ceil(items / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = event.selected + 1;
    setCurrentPage(newOffset);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="prev"
      renderOnZeroPageCount={null}
      activeLinkClassName={style.active}
      marginPagesDisplayed={2}
      containerClassName={style.paginateBlock}
      pageLinkClassName={style.paginateLink}
      nextLinkClassName={style.nextBtn}
      previousLinkClassName={style.prevBtn}
      disabledLinkClassName={style.disabledBtn}
      breakClassName={style.break}
    />
  );
}

export default PaginatedItems;
