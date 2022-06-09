import React from "react";
import s from "./Pagimator.module.css";

export const Pagonator = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={s.pageNumber}>
      {pages.map((p) => {
        return (
          <span
            key={p}
            className={(currentPage === p && s.selectedPage) || ""}
            onClick={(e) => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};
