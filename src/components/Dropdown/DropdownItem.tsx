import React from "react";
import "./Dropdown.scss";

type Props = {
  text: string;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const DropdownItem: React.FC<Props> = ({ text, icon, onClick }) => {
  return (
    <div className="dropdown-item flex align-center" onClick={onClick}>
      {icon && <span className="mr-3">{icon}</span>}
      <span className="font-size-12 text-uppercase">{text}</span>
    </div>
  );
};

export default DropdownItem;
