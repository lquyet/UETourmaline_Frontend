// export const HomeScreenImage = {
//     logo: require('./logo.svg').default,
//     homeIcon: require('./homeIcon.svg').default,
//     libraryIcon: require('./LibraryIcon.svg').default,
//     albumIcon: require('./AlbumIcon.svg').default,
//     favouritesIcon: require('./FavouritesIcon.svg').default,
//     settingIcon: require('./SettingIcon.svg').default,
//     logoutIcon: require('./LogoutIcon.svg').default,
// }
export const logoutIcon = ({ width = "31px", height = "32px", className }) => {
  return (
    <svg
    className={className}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.1716 26L7 26C6.44771 26 6 25.5523 6 25L6 23C6 22.4477 6.44771 22 7 22L24.1716 22L20.2929 18.1213C19.9024 17.7308 19.9024 17.0976 20.2929 16.7071L21.7071 15.2929C22.0976 14.9024 22.7308 14.9024 23.1213 15.2929L30.4142 22.5858C31.1953 23.3668 31.1953 24.6332 30.4142 25.4142L23.1213 32.7071C22.7308 33.0976 22.0976 33.0976 21.7071 32.7071L20.2929 31.2929C19.9024 30.9024 19.9024 30.2692 20.2929 29.8787L24.1716 26ZM36 43L27 43C26.4477 43 26 42.5523 26 42L26 40C26 39.4477 26.4477 39 27 39L36 39C37.1046 39 38 38.1046 38 37L38 11C38 9.89543 37.1046 9 36 9L27 9C26.4477 9 26 8.55228 26 8L26 6C26 5.44771 26.4477 5 27 5L36 5C39.3137 5 42 7.68629 42 11L42 37C42 40.3137 39.3137 43 36 43Z"
      ></path>
    </svg>
  );
};
export const settingIcon = ({ width = "31px", height = "32px", className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 31 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.973 0V4.57143L9.80955 5.71429L6.5644 2.28571L2.23753 6.85714L5.48268 10.2857L4.40096 12.5714H0.0740967V19.4286H4.40096L5.48268 21.7143L2.23753 25.1429L6.5644 29.7143L9.80955 26.2857L11.973 27.4286V32H18.4633V27.4286L20.6267 26.2857L23.8719 29.7143L28.1987 25.1429L24.9536 21.7143L26.0353 19.4286H30.3622V12.5714H26.0353L24.9536 10.2857L28.1987 6.85714L23.8719 2.28571L20.6267 5.71429L18.4633 4.57143V0H11.973Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const favouritesIcon = ({
  width = "28px",
  height = "26px",
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 28 26"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.9081 1C4.42371 1 1.59808 3.95467 1.59808 7.6C1.59808 10.5427 2.70234 17.5267 13.572 24.5867C13.7667 24.7118 13.9902 24.778 14.2181 24.778C14.446 24.778 14.6696 24.7118 14.8643 24.5867C25.7339 17.5267 26.8381 10.5427 26.8381 7.6C26.8381 3.95467 24.0125 1 20.5281 1C17.0437 1 14.2181 5 14.2181 5C14.2181 5 11.3925 1 7.9081 1Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const albumIcon = ({ width = "24px", height = "26px", className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 26"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6832 26H2.75311C2.25121 25.9995 1.77001 25.7886 1.41511 25.4136C1.06021 25.0387 0.860609 24.5303 0.860107 24V10C0.860609 9.46973 1.06021 8.96133 1.41511 8.58637C1.77001 8.21141 2.25121 8.00053 2.75311 8H21.6832C22.1851 8.00053 22.6663 8.21141 23.0212 8.58637C23.3761 8.96133 23.5757 9.46973 23.5762 10V24C23.5757 24.5303 23.3761 25.0387 23.0212 25.4136C22.6663 25.7886 22.1851 25.9995 21.6832 26ZM2.75311 10V24H21.6832V10H2.75311ZM2.75311 4H21.6832V6H2.75311V4ZM4.64612 0H19.7901V2H4.64612V0Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const libraryIcon = ({ width = "28px", height = "24px", className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 28 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6691 2H26.5226L27.4881 3V10H25.5761V7.98H13.6313L12.0033 9.7L11.3408 10H2.84117V22H12.3251V24H1.93252L0.986023 23V1L1.93252 0H11.3975L12.0601 0.3L13.6691 2ZM13.2527 6H25.5572L25.5761 4.02H13.2716L12.5901 3.72L10.9811 2.02H2.8601V8.02H10.9622L12.5901 6.3L13.2527 6Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const homeIcon = ({ width = "26px", height = "30px", className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 26 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.43212 19V29H1.86011V11L13.2181 1L24.5762 11V29H17.0041V19H9.43212Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const logo = ({ width = "54px", height = "42px", className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 54 42"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.3664 10.2958C44.3664 9.37307 45.1091 8.62693 46.0277 8.62693C46.9462 8.62693 47.6889 9.37307 47.6889 10.2958V31.7086C47.6889 32.6313 46.9462 33.3775 46.0277 33.3775C45.1091 33.3775 44.3664 32.6313 44.3664 31.7086V10.2958ZM0 14.0486C0 13.1258 0.742736 12.3797 1.66127 12.3797C2.5798 12.3797 3.32254 13.1258 3.32254 14.0486V27.9514C3.32254 28.8742 2.5798 29.6203 1.66127 29.6203C0.742736 29.6203 0 28.8742 0 27.9514V14.0486ZM6.33743 10.2958C6.33743 9.37307 7.08017 8.62693 7.9987 8.62693C8.91723 8.62693 9.65997 9.37307 9.65997 10.2958V31.7086C9.65997 32.6313 8.91723 33.3775 7.9987 33.3775C7.08017 33.3775 6.33743 32.6313 6.33743 31.7086V10.2958ZM12.7012 6.13687C12.7012 5.21854 13.4352 4.47682 14.3361 4.47682C15.2415 4.47682 15.971 5.21854 15.971 6.13687V35.8675C15.971 36.7859 15.2371 37.5276 14.3361 37.5276C13.4308 37.5276 12.7012 36.7859 12.7012 35.8675V6.13687ZM19.0123 1.66887C19.0123 0.746137 19.755 0 20.6736 0C21.5921 0 22.3348 0.746137 22.3348 1.66887V40.3311C22.3348 41.2539 21.5921 42 20.6736 42C19.755 42 19.0123 41.2539 19.0123 40.3311V1.66887ZM38.029 14.0486C38.029 13.1258 38.7717 12.3797 39.6902 12.3797C40.6088 12.3797 41.3515 13.1258 41.3515 14.0486V27.9514C41.3515 28.8742 40.6088 29.6203 39.6902 29.6203C38.7717 29.6203 38.029 28.8742 38.029 27.9514V14.0486ZM31.6915 10.2958C31.6915 9.37307 32.4343 8.62693 33.3528 8.62693C34.2713 8.62693 35.0141 9.37307 35.0141 10.2958V31.7086C35.0141 32.6313 34.2713 33.3775 33.3528 33.3775C32.4343 33.3775 31.6915 32.6313 31.6915 31.7086V10.2958ZM25.3761 6.13687C25.3761 5.21854 26.11 4.47682 27.011 4.47682C27.9163 4.47682 28.6459 5.21854 28.6459 6.13687V35.8675C28.6459 36.7859 27.9119 37.5276 27.011 37.5276C26.1056 37.5276 25.3761 36.7859 25.3761 35.8675V6.13687ZM50.7302 6.13687C50.7302 5.21854 51.4641 4.47682 52.3651 4.47682C53.2705 4.47682 54 5.21854 54 6.13687V35.8675C54 36.7859 53.2661 37.5276 52.3651 37.5276C51.4598 37.5276 50.7302 36.7859 50.7302 35.8675V6.13687Z"
        fill="currentColor"
      />
    </svg>
  );
};
