const size = {
  mobileS: "320px",
  mobileM: "445px",
  mobileL: "600px",
  tablet: "768px",
  laptop: "998px",
  laptopL: "1280px",
  desktop: "1440px"
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`
};
