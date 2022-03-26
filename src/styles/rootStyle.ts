import { createTheme } from "@mui/material/styles";

export const primary = "#363945";
export const secondary = "#D2386C";

export const rootStyle = createTheme({
    palette: {
        primary: {
            main: primary,
        },
        secondary: {
            main: secondary,
        },
    },
    typography: {
        fontFamily: "Anonymous Pro",
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    lineHeight: 1.4,
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    backgroundColor: primary,
                    color: "aliceblue",
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontWeight: 900,
                },
                secondary: {
                    fontWeight: 600,
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    "&::before, &::after": {
                        borderTop: `thin solid ${secondary}`,
                    },
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: primary,
                    fontSize: "14px",
                    padding: "1em",
                    paddingRight: 0,
                },
                arrow: {
                    color: primary,
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    height: "40px",
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    bottom: "24px",
                    top: "unset",
                },
            },
        },
    },
});
