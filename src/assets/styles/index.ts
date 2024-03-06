const theme = {
  pallete: {
    white: {
      pure: "#FFF",
      light: "#F0F0F0",
    },
    blue: {
      dark: "#005886",
      light: "#6DAAC9",
      lighter: "#3C9BE9",
    },
    red: "#BA3E39",
    redLight: "#ED8A84",
    black: {
      pure: "#000",
      light: "#090909",
    },
    grey: {
      dark: "#ABA7AF",
      light: "#E5E0EB",
    },
  },
  breakpoints: {
    phone: 540,
    tablet: 840,
    note: 1140,
  },
}

export default theme

export type ITheme = typeof theme
