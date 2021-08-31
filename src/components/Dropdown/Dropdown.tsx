import React, { useRef } from "react";
import { MoreVertical } from "react-feather";
import { useDetectOutsideClick } from "hooks/useDetectClickOutside";
import "./Dropdown.scss";

type Props = {
  children: React.ReactNode;
};

const Dropdown: React.FC<Props> = ({ children }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const handleDropdown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div className="dropdown" onClick={stopPropagation}>
      <div
        className={`dropdown-icon ${isActive ? "dropdown-icon-active" : ""}`}
        onClick={handleDropdown}
      >
        <MoreVertical color="#666" />
      </div>
      {isActive && (
        <div ref={dropdownRef} className="dropdown-box">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
