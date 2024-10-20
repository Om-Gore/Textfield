import React, { FC } from "react";
import classNames from "classnames";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

export const RHDropdownIcon: FC<SvgIconProps> = (props) => {
  const style = {
    fontSize: 12,
    ...props.style,
  };

  const isCartPage = true;

  return (
    <>
      {isCartPage ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="4"
          viewBox="0 0 7 4"
          fill="none"
          {...props}
          style={style}
          className={classNames([props.className])}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.80389 3.872L6.87425 0.757334C7.04192 0.576 7.04192 0.298667 6.87425 0.128C6.70659 -0.0426664 6.42365 -0.0426664 6.25599 0.128L3.5 2.93333L0.744012 0.128C0.565868 -0.0426666 0.293413 -0.0426666 0.125748 0.128C-0.0419162 0.298667 -0.0419162 0.576 0.125748 0.757333L3.18563 3.872C3.36377 4.04267 3.63623 4.04267 3.80389 3.872Z"
            fill="black"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 18 16"
          fill="none"
          {...props}
          style={style}
          className={classNames([props.className])}
        >
          <path d="M17 4L9 12L1 4" stroke="black" />
        </svg>
      )}
    </>
  );
};

export default RHDropdownIcon;
