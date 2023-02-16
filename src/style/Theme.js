const breakPoints = {
  sm: "425px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
};

export const theme = {
  colors: {
    darkBrown: "#594545",
    mediumBrown: "#815B5B",
    lightBrown: "#9E7676",
    ligthYellow: "#FFF8EA",

  },
  devices: {
    mobileS: `(max-width: ${breakPoints.sm})`,
    mobileM: `(min-width: ${breakPoints.sm}) and (max-width: ${breakPoints.md})`,
    tablet: `(min-width: ${breakPoints.md}) and (max-width: ${breakPoints.lg})`,
    laptop: `(min-width: ${breakPoints.lg}) and (max-width: ${breakPoints.xl})`,
    desktop: `(min-width: ${breakPoints.xl})`,
  },
};
