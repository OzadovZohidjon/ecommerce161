import * as React from "react"

const SearchIcon = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M1 7.146a6.144 6.144 0 1 1 12.288-.002A6.144 6.144 0 0 1 1 7.146Z"
      stroke="#7D818E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.488 11.49 15 15.002"
      stroke="#7D818E"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SearchIcon
