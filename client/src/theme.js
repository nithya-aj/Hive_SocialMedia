// color design tokens export
export const colorTokens = {
    grey: {
        0: "#FFFFFF",
        10: "#f5f5f5",
        50: "#EBEBEB",
        100: "#e0e0e0",
        200: "#d6d6d6",
        300: "#CCCCCC",
        400: "#c2c2c2",
        500: "#828C9B",
        600: "#333333",
        700: "#292929",
        800: "#1F1F1F",
        900: "#141414",
        1000: "#0a0a0a",
    },
    orange: {
        50: "#FDDFC4",
        100: "#FCD5B1",
        200: "#FBCA9D",
        300: "#FBC088",
        400: "#FBB574",
        500: "#FBAB60",
        600: "#FAA04C",
        700: "#FA9638",
        800: "#F98B24",
        900: "#F98110",
        1000: "#EF7706",
    },
    purple: {
        100: "#AC70FF",
        200: "#A05CFF",
        300: "#9951ff",
        400: "#9447FF",
        500: "#8833FF",
        600: "#7C1FFF"
    },
    red: {
        500: '#EF2726'
    }
};

// mui theme settings
export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    neutral: {
                        white: colorTokens.grey[50],
                        dark: colorTokens.grey[700],
                        main: colorTokens.grey[200],
                        mediumMain: colorTokens.grey[300],
                        medium: colorTokens.grey[400],
                        light: colorTokens.grey[600],
                        mediumLight: colorTokens.grey[700],
                        fontSm: colorTokens.grey[500],
                        purple: colorTokens.purple[300],
                        mediumpurple: colorTokens.purple[600],
                        darkpurple: colorTokens.purple[400],
                        orange: colorTokens.orange[400],
                        red: colorTokens.red[500]
                    },
                    background: {
                        main: colorTokens.grey[900],
                        alt: colorTokens.grey[800],
                        darkbg: colorTokens.grey[1000]
                    },
                }
                : {
                    // palette values for light mode
                    neutral: {
                        white: colorTokens.grey[50],
                        dark: colorTokens.grey[100],
                        main: colorTokens.grey[800],
                        mediumMain: colorTokens.grey[1000],
                        medium: colorTokens.grey[500],
                        light: colorTokens.grey[200],
                        mediumLight: colorTokens.grey[700],
                        fontSm: colorTokens.grey[400],
                        purple: colorTokens.purple[200],
                        mediumpurple: colorTokens.purple[600],
                        darkpurple: colorTokens.purple[400],
                        orange: colorTokens.orange[900],
                        red: colorTokens.red[500]
                    },
                    background: {
                        main: colorTokens.grey[10],
                        alt: colorTokens.grey[50],
                        darkbg: colorTokens.grey[10]
                    },
                }),
        },
        typography: {
            fontFamily: ["Roboto", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};