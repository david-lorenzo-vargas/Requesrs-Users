import { ReactElement } from "react";

const Chevron = ({
  size
}: Props): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : '24'}
      height={size ? size : '24'}
      viewBox="0 0 24 24"
      fillRule="evenodd"
      fill="currentColor"
    >
      <path
        d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"
      />
    </svg>
  );
};

interface Props {
  size?: string;
}

export default Chevron;
