import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 52,
  width,
  height,
  ...props
}) => (
  <svg
  height={size || height}
  viewBox="0 0 2000 2000"
  width={size || width}
  {...props}
  fill="currentColor"
  >
    <path
      transform="translate(998,272)"
      d="m0 0 4 1 12 11 10 8 12 11 7 7 12 9 11 11 14 11 10 10 11 9 10 8 9 9 11 9 10 9 11 10 11 9 13 12 8 7 13 11 8 7 10 9 10 8 13 12 12 10 8 7 9 9 14 11 9 9 11 9 10 8 9 9 11 9 10 9 15 13 10 9 15 13 11 10 11 9 12 11 11 9 13 12 13 11 8 7 8 8 11 8 12 12 11 9 10 8 8 8 11 9 11 10 8 7 10 9 11 9 12 11 11 9 10 9 8 7 10 9 10 8 10 10 14 11 12 12 13 10 12 12 14 10 1 2v173l-1 129-17 12-13 9-13 8-12 9-17 11-19 13-10 7-16 10-12 9-16 10-17 12-16 11-14 9-12 9-18 11-11 8-12 8-20 13-13 10-14 8-12 9-12 8-10 7-16 10-10 8-18 11-15 11-25 16-9 6-5-1-11-10-9-7-10-10-11-9-12-11-15-13-14-12-16-15-10-8-12-11-9-8-9-7-13-13-13-10-13-13-12-9-16-16-13-10-12-12-14-11-8-8-8-7-14-12-9-7-6 4-10 9-11 9-4 4h-2l-2 4h-2l-1 3-13 10-13 12-5 5-13 10-3 4h-2l-2 4-13 11-8 6-7 8-10 8-9 7-14 14-11 8-14 14-14 11-9 9-8 7-14 12-10 9-8 7-10 9-11 9-8 8-10 8-8 7-5-1-19-12-12-8-17-12-10-6-13-9-11-8-19-12-11-8-19-13-14-9-12-9-19-12-26-18-13-8-15-11-16-10-14-10-19-13-14-9-12-9-18-11-14-10-33-22-11-8-13-8-18-13-5-3-1-2v-302l3-3 12-9 5-4 2-3h2l2-4 14-11 3-1 2-4 12-11 8-6 11-11 14-11 5-5h2l1-3 8-7 17-14 13-12 11-9 11-10 8-7 9-8 10-8 8-7 5-5 11-9 8-7 10-10 13-10 8-7 5-5 9-8 8-7 11-10 10-8 7-7 11-9 13-11 13-12 11-9 14-13 8-7 15-13 8-7 7-7 11-8 12-11 10-9 8-6 12-12 11-9 9-7 11-11 11-9 11-10 11-9 12-11 11-9 13-12 11-9 15-14 11-9 8-8 14-11 15-14 16-13 11-11 12-9 11-11 8-7 13-11zm0 53-14 12-10 9-9 7-5 5-9 8-11 9-6 7-10 7-12 11-10 10-10 7-5 4-5 6-11 9-8 6-10 10-11 9-12 11-14 12-11 10-11 9-13 12-11 9-7 6v2l-4 2-14 12-8 7v2h-2v2l-4 2-13 10-13 13-11 8-5 4v2h-2l-6 7-11 9-9 7-11 11-14 11-17 16-11 9-10 9-11 9-10 9-10 8v2l-4 2-8 8-12 9-13 13-11 8-13 13-12 9-10 9-1 3h-2v2l-4 2-12 9-14 14-11 9-20 18-11 9-11 10-8 7-13 11-8 7-6 5v2l-4 2-11 9-12 11-4 5v263l8 7 21 13 12 9 12 8 11 7 12 8 12 9 16 10 14 10 20 13 26 18 13 8 18 13 33 22 11 8 13 8 14 10 25 16 16 12 18 11 15 11 18 12 16 10 5 3 11-11 13-9 7-8 8-7 15-13 12-11 8-7 10-9 14-12 8-7 11-10 11-9 12-11 10-9 7-7 11-8 14-14 12-9 10-9 8-8 13-10 6-7 14-11 15-15 14-11 9-9 3-2v-2l4 1 8 7 9 8 11 9 15 15 11 8 13 13 13 10 13 13 12 9 3 3h2l2 4 11 10 12 9 5 6 8 7 15 13 10 9 8 7 11 10 11 9 13 12 11 9 8 8 11 9 12 11 9 9 11 8 5 5 5 4 11-7 19-12 11-8 17-12 13-8 15-11 25-16 14-10 22-14 10-8 18-11 8-6 14-10 28-18 12-9 16-10 10-7 19-13 14-9 12-9 15-9 12-9 12-8 10-7 15-9 6-6 1-261-4-6-11-11-11-9-10-9-8-7-28-24-10-9-11-9-14-13-11-9-13-12-10-9-11-9-12-11-11-9-13-12-11-9-15-14-14-11-10-10-11-9-11-10-8-7-14-12-13-11-13-12-10-8-12-11-8-7-10-8-12-12-13-10-12-11-10-9-10-8-8-8-11-9-10-9-15-13-8-7-10-9-11-9-12-11-8-7-10-9-10-8-15-14-14-11-13-13-11-8-10-9-10-10-12-9-10-10-11-9-10-9-14-12-11-10-7-6z"
    />
    <path
      transform="translate(1e3 485)"
      d="m0 0 6 4 17 17 14 11 7 7 8 7 14 12 20 18 11 9 12 11 11 9 15 14 11 10 10 8 11 11 13 10 12 12 12 9 10 9 9 9 10 7 14 14 11 9 8 7 1 2v187l-6-4-12-12-10-8-10-9-13-12-8-7-14-12-13-12-12-11-11-9-14-13-8-7-12-11-11-9-7-7-8-7-14-12-15-14-10-9-11-9-16-15-12-11-11-9-7-7-5 1-13 12-8 7-14 13-8 7-20 18-11 9-7 7-11 9-14 13-8 7-10 9-8 7-7 7-8 7-14 12-7 7-8 7-14 12-10 9-8 7-11 10-11 9-7 7-11 9-9 8-5 5h-1v-187l5-6 10-8 12-11 7-7 12-9 14-14 12-9 3-1 2-4 8-8 12-9h2l2-4 7-7 14-11 10-9 8-8 8-7 13-11 8-7 10-9 11-9 13-12 14-12 8-7 12-11 11-9 8-9z"
    />
    <path
      transform="translate(1336,694)"
      d="m0 0h3l12 12 11 9 11 10 8 7 15 13 14 12 11 10 11 9 8 8 10 8 15 14 9 8 11 9 9 9 12 9 6 5 12 12 12 9 13 13 14 11 9 9 8 7 10 9 11 9 4 4v187l-5-2-12-11-11-11-13-10-13-13-10-8-10-9-14-13-8-7-10-9-11-9-8-8-8-7-12-11-11-9-8-8-8-7-15-13-11-10-8-7-10-9-11-9-11-11-8-7-11-10-9-7-4 1-12 9-10 10-8 7-10 9-8 7-14 12-15 14-11 9-16 15-10 9-11 9-8 8-8 7-10 9-11 9-11 11-10 8-15 14-13 11-3 3h-2v2h-2l-2 4-9 8-8 6-12 11-4 5-9 7h-3v-187l10-9 11-9 10-9 12-11 11-9 8-7 10-10 12-9 4-4h2l2-4 9-8 4-3 4 1 9 8v2l4 2 14 12 8 7 14 13 11 9 7 7 8 7 7 7 5 4 6-1 2-3v-159l2-5 12-11 11-9 13-12 11-9 12-11z"
    />
    <path
      transform="translate(665,694)"
      d="m0 0 4 1 12 11 3 2v2l4 2 14 12 12 11 11 9 3 3 1 166 1 1h6l10-9 11-9 10-10 11-9 13-13 13-10 15-15 6-4 4 1 9 7 2 4 4 2 10 9 8 7 10 9 14 12 8 7 12 11 8 7 11 9 10 9v187l-5-2-10-9-13-13-13-10-5-4-7-8-16-13-15-15-13-10-2-4-4-2-8-8-11-9-13-12-8-7-10-9-14-12-10-9-13-12-8-7-15-13-13-12-11-9-7-7-8-7-9-8-6-4-5 1-17 16-10 9-8 7-7 7-11 9-14 13-11 9-13 12-10 9-11 9-17 16-12 11-11 9-9 9-11 9-12 11-20 18-11 9-7 7h-2v2l-11 9-17 16-9 8-2-2v-185l17-16 13-11 8-7 4-5 12-9 7-6 7-8 11-8 5-4 7-8 14-11 8-7 9-9 16-12 16-16 11-9 10-9 8-7 11-10 11-9 20-18 11-9 8-8 10-8 7-6z"
    />
    <path
      transform="translate(999,911)"
      d="m0 0 6 1 10 9 12 11 10 8 15 14 10 8 1 1 1 156 2 3 4 1 13-10 10-9 3-1v-2l8-7 12-11 11-9 16-15 11-9 3-3 4 2 4 5 16 12 14 14 12 9 13 13 11 9 10 9 8 7 14 12 5 5v188l-4-2-7-8-16-13-12-12-8-7-20-18-11-9-13-12-12-11-11-9-17-16-14-12-5-4-7-8-13-10-14-13-5-5-8-6-16-16-11-8-13-13-14-11-7-7v-2l-4-2-3-3-5 1-8 8-8 7-9 8-6 5h-2l-2 4-7 7-11 8-14 14-10 8-6 5-5 6-8 7-11 8-18 18-10 8-10 10-11 9-10 9-15 14-10 8-14 13-8 7-14 12-12 12-14 11-5 5-5 4v-188l8-8 11-9 10-10 10-8 10-9 10-10 11-8 10-9 5-5 9-7 8-7 6-6 5 1 13 12 11 9 13 12 9 8 11 9 14 14 11 8 4 3 4-1 1-3 1-156 4-5 10-8 3-3h2l2-4 13-11 8-7 9-9z"
    />
    <path
      transform="translate(1336,907)"
      d="m0 0 8 6 11 9 12 11 14 12 15 13 12 11 11 9 13 12 8 7 10 9 8 7 10 9 11 9v27l-4-2-7-6v-2l-4-2-9-9-10-8-15-14-8-7-14-13-8-7-10-9-11-9-14-13-11-9-12-11-4-3-5 2-9 7-13 12-11 10-11 9-15 14-8 7-9 9-11 9-12 11-3 1-1 3-11 9-12 11-8 7-4 2-1-4v-21l8-8 11-9 15-13 16-15 11-9 11-10 8-7 10-9 14-12 8-7 12-11 11-9z"
    />
    <path
      transform="translate(665,907)"
      d="m0 0 4 1 8 8 11 9 12 11 11 9 13 12 11 9 15 14 11 9 14 13 16 14 10 8 8 8v23h-4l-15-13-14-12-17-16-9-7-16-15-12-11-8-7-10-9-11-9-7-7-11-9-8-7-4 2-15 14-11 9-16 15-8 7-14 12-13 12-8 7-9 8-8 7-7 7-10 8-14 14-5 2-1-24 6-7 8-7 10-9 13-12 11-9 14-13 11-9 13-12 11-9 11-10 11-9 13-12 8-7z"
    />
    <path
      transform="translate(999,694)"
      d="m0 0 4 1 17 16 14 12 24 22 11 9 13 12 10 8 11 10 11 9 15 14 11 9 1 2v25l-6-4-13-11-9-9-14-11-7-7-8-7-13-12-10-9-11-9-10-10-11-9-11-10-8-7-7-6v-2l-5 1-10 9-12 11-11 10-11 9-8 8-8 7-10 9-8 7-10 9-8 7-9 8-8 7-12 11-11 9h-2l-1-18 1-7 16-15 11-10 11-9 12-11 11-9 13-12 10-8 16-15 10-8 13-12 11-10z"
    />
    <path
      transform="translate(999,735)"
      d="m0 0 5 2 10 9 8 7 10 9 11 9 13 12 8 7 14 12 5 5 1 12-3 1-12-9-10-10-8-7-13-11-16-15-14-12-6-5-5 1-16 15-11 9-15 14-30 27-6 4h-2l-1-10 3-5 15-14 8-7 11-10 11-9 12-11 8-7 11-10z"
    />
    <path
      transform="translate(1335,948)"
      d="m0 0 4 1 10 9 10 8 13 12 11 9 12 11 8 7 15 13 2 6v9l-2 1-11-9-7-7-11-9-15-14-8-7-12-11-10-8-6-6-5 2-7 7-8 7-15 13-12 11-10 9-13 11-6 5-6 7h-2v-15l7-7 8-7 10-9 14-12 10-9 8-7 14-12z"
    />
    <path
      transform="translate(664,948)"
      d="m0 0 5 1 20 18 11 9 11 10 8 7 14 12 10 9 6 5 1 2v11l-1 3-4-2-15-15-10-8-11-11-11-9-10-9-8-7-12-11-4 1-13 12-15 13-7 7h-2v2l-11 9-14 13-16 14-2-1v-14l9-8 11-9 15-14 11-9 13-12 11-9 8-7z"
    />
  </svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
      fill="currentColor"
    >
      <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path>
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8.267 3a1 1 0 0 1 .73 .317l.076 .092l4.274 5.828l5.946 -5.944a1 1 0 0 1 1.497 1.32l-.083 .094l-6.163 6.162l6.262 8.54a1 1 0 0 1 -.697 1.585l-.109 .006h-4.267a1 1 0 0 1 -.73 -.317l-.076 -.092l-4.276 -5.829l-5.944 5.945a1 1 0 0 1 -1.497 -1.32l.083 -.094l6.161 -6.163l-6.26 -8.539a1 1 0 0 1 .697 -1.585l.109 -.006h4.267z" />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 161 32"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="fill-black dark:fill-white"
        d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
      />
      <path
        className="fill-black dark:fill-white"
        d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
      />
      <path
        className="fill-white dark:fill-black"
        d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
      />
    </svg>
  );
};

//Nuevos iconos

export const InstagramIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
      fill="currentColor"
    >
      <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
      <circle cx="11.994" cy="11.979" r="3.003"></circle>
    </svg>
  );
};