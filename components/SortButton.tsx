import React, { MouseEventHandler } from "react";

// sort component with up and down arrow icons

type SortOrder = "ascn" | "desc";
type SortKeys = string;

interface SortButtonProps {
  sortOrder: SortOrder;
  columnKey: SortKeys;
  sortKey: SortKeys | null;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const SortButton: React.FC<SortButtonProps> = ({ sortOrder, columnKey, sortKey, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        sortKey === columnKey && sortOrder === "desc" ? "sort-button sort-reverse" : "sort-button"
      }
    >
      ▲
    </button>
  );
};

export default SortButton;
