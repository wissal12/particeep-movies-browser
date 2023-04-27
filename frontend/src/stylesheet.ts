export const fontWeights = {
  bold: 600,
};

const colors = {
  darkBlue: 'rgb(8, 105, 143)',
} as const;

export const colorUsage = {
  movieCard: {
    background: colors.darkBlue,
  },
  button: {
    submit: {
      background: colors.darkBlue,
    },
    delete: {
      background: 'white',
      text: colors.darkBlue,
    },
  },
} as const;
