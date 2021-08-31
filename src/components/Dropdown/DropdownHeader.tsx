import React from "react";
import "./Dropdown.scss";

type Props = {
  text: string;
};

export const DropdownHeader: React.FC<Props> = ({ text }) => {
  return (
    <>
      <div className="dropdown-header mt-2 text-uppercase font-weight-500">{text}</div>
      <div className="line mx-3 mb-2"></div>
    </>
  );
};

export default DropdownHeader;
