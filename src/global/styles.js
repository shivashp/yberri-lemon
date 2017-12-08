const colors = {
  primary: '#FFFFFF',
  secondary: '#F3F9FE',
  darker: '#C5D1D8',
  textPrimary: '#6C6C6C',
  textSecondary: '#7FBEFF',
};

const font = {
  larger: 18,
  large: 16,
  regular: 14,
  small: 12,
  family: 'Roboto',
};

const container = {
  flex: 1,
  paddingHorizontal: 10,
  paddingVertical: 10,
};
const noPadding = {
  paddingHorizontal: 0,
  paddingVertical: 0,
};

const center = {
  alignItems: 'center',
  justifyContent: 'center',
};

const borderBottom = {
  borderBottomColor: colors.secondary,
  borderBottomWidth: 2,
};

const layout = {
  container, center, noPadding, borderBottom,
};

const transparent = {
  backgroundColor: 'transparent',
  borderWidth: 1,
};

const filled = {
  backgroundColor: colors.darker,
};

const button = {
  transparent, filled,
};

export {
  layout, colors, font, button,
};
