// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 206 106"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M184.51.72c-9.77 0-17.99 6.73-20.31 15.79h-29.23c-11.47 0-20.8 9.33-20.8 20.8 0 5.73-4.66 10.4-10.4 10.4H99.6c-2.32-9.06-10.53-15.79-20.31-15.79-9.77 0-17.99 6.73-20.31 15.79h-16.7c-2.32-9.06-10.53-15.79-20.31-15.79C10.4 31.92.98 41.33.98 52.91c0 11.57 9.41 20.99 20.99 20.99 9.77 0 17.99-6.73 20.31-15.79H59c2.32 9.06 10.53 15.79 20.31 15.79 9.71 0 17.87-6.63 20.26-15.6h4.21c5.73 0 10.4 4.66 10.4 10.4 0 11.47 9.33 20.8 20.8 20.8h6.81c2.32 9.06 10.53 15.79 20.31 15.79 11.57 0 20.99-9.41 20.99-20.99 0-11.57-9.41-20.99-20.99-20.99-9.77 0-17.99 6.73-20.31 15.79h-6.81c-5.73 0-10.4-4.66-10.4-10.4 0-6.26-2.8-11.88-7.19-15.69 4.4-3.82 7.19-9.43 7.19-15.69 0-5.73 4.66-10.4 10.4-10.4h29.23c2.32 9.06 10.53 15.79 20.31 15.79 11.57 0 20.99-9.41 20.99-20.99-.01-11.58-9.43-21-21-21zM21.99 63.49c-5.84 0-10.59-4.75-10.59-10.59s4.75-10.59 10.59-10.59 10.59 4.75 10.59 10.59-4.75 10.59-10.59 10.59zm57.32 0c-5.84 0-10.59-4.75-10.59-10.59s4.75-10.59 10.59-10.59S89.9 47.06 89.9 52.9s-4.75 10.59-10.59 10.59zm82.78 10.21c5.84 0 10.59 4.75 10.59 10.59s-4.75 10.59-10.59 10.59-10.59-4.75-10.59-10.59c.01-5.84 4.76-10.59 10.59-10.59zm22.42-41.4c-5.84 0-10.59-4.75-10.59-10.59s4.75-10.59 10.59-10.59 10.59 4.75 10.59 10.59-4.75 10.59-10.59 10.59z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
