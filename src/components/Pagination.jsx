import React from "react";

const Pagination = ({ pageInfo, setPage }) => {
  return (
    <div className="d-flex justify-content-between my-3">
      <button
        className="btn btn-primary"
        onClick={() => setPage((prev) => prev - 1)}
        disabled={!pageInfo.prev}
      >
        Previous
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setPage((prev) => prev + 1)}
        disabled={!pageInfo.next}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
