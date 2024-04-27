import { ReactElement, useMemo } from "react";

import Button from "@/app/Components/Atoms/Button";

import Chevron from "@icon/Chevron";

const Pagination = ({
  totalPages,
  currentPage,
  onBackPagination,
  onForwardPagination,
  onPage,
}: Props): ReactElement => {
  // we get the number of total pages dynamicly based on the total pages received from API
  const pages = useMemo(() => {
    return [...Array(totalPages)].map((_n: number, ix: number) => ix + 1);
  }, [totalPages]);

  return (
    <div className="flex flex-row items-center">
      <div className="mr-10 rotate-180">
        {/* if the user is in the first page we disable the button becasue the user is already in the first page */}
        <Button
          type="button"
          id="backPaginationButton"
          disabled={currentPage === 1}
          onClick={() => onBackPagination(currentPage)}
        >
          <Chevron size="12" />
        </Button>
      </div>
      <div className="flex flex-row justify-center mr-10 w-80">
        {/* we map the total number of pages and we render the current page the user is in the previous and the following page */}
        {pages.map((p: number) => (
          <div key={p}>
          {(p === currentPage || p === currentPage - 1 || p === currentPage + 1) && (
            <div
              className={`
                ${p !== pages.length - 1 ? '' : 'mr-5'}
                ${p === currentPage && 'bg-black'}
                py-5
                px-10
                rounded-lg
              `}
            >
              <Button
                type="button"
                id="paginationPageButton"
                onClick={p === currentPage ? () => {} :() => onPage(p)}
              >
                <span
                  className={`${p === currentPage && 'text-white font-semibold'}`}
                >
                  {p}
                </span>
              </Button>
            </div>
          )}
          </div>
        ))}
      </div>
      <div>
        {/* if we user is the last page we disable the button because the user is already in the last available page */}
        <Button
          type="button"
          id="forwardPaginationButton"
          disabled={totalPages === currentPage}
          onClick={() => onForwardPagination(currentPage)}
        >
          <Chevron size="12" />
        </Button>
      </div>
    </div>
  );
};

interface Props {
  totalPages: number;
  currentPage: number;
  onBackPagination: (currentPage: number) => void;
  onForwardPagination: (currentPage: number) => void;
  onPage: (page: number) => void;
}

export default Pagination;
