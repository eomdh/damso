const size = {
  mobile: "350px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
};

const device = {
  mobile: `(max-width: ${size.mobile})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
};

export default device;