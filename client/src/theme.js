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
        500: "#3D3D3D",
        600: "#333333",
        700: "#292929",
        800: "#1F1F1F",
        900: "#141414",
        1000: "#0a0a0a",
    },
    primary: {
        50: "#E6FBFF",
        100: "#CCF7FE",
        200: "#99EEFD",
        300: "#66E6FC",
        400: "#33DDFB",
        500: "#00D5FA",
        600: "#00A0BC",
        700: "#006B7D",
        800: "#00353F",
        900: "#001519",
        1000: "#FBAC63"
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
        50: "#C6CCFA",
        100: "#B4BCF8",
        200: "#A2ACF6",
        300: "#909BF4",
        400: "#7D8BF2",
        500: "#6A7AF0",
        600: "#5869EE",
        700: "#4559ED",
        800: "#3348EB",
        900: "#2038E9",
        1000: "#162DDF",
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
                    primary: {
                        dark: colorTokens.primary[200],
                        main: colorTokens.primary[500],
                        light: colorTokens.primary[800],
                    },
                    neutral: {
                        dark: colorTokens.grey[50],
                        main: colorTokens.grey[200],
                        mediumMain: colorTokens.grey[300],
                        medium: colorTokens.grey[400],
                        light: colorTokens.grey[600],
                        fontSm: colorTokens.orange[400],
                        purple: colorTokens.purple[500],
                        orange:colorTokens.orange[300]
                    },
                    background: {
                        main: colorTokens.grey[900],
                        alt: colorTokens.grey[800],
                        darkbg: colorTokens.grey[1000]
                    },
                }
                : {
                    // palette values for light mode
                    primary: {
                        dark: colorTokens.primary[700],
                        main: colorTokens.primary[500],
                        light: colorTokens.primary[50],
                    },
                    neutral: {
                        dark: colorTokens.grey[700],
                        main: colorTokens.grey[500],
                        mediumMain: colorTokens.grey[400],
                        medium: colorTokens.grey[300],
                        light: colorTokens.grey[50],
                    },
                    background: {
                        main: colorTokens.grey[0],
                        alt: colorTokens.grey[10],
                    },
                }),
        },
        typography: {
            fontFamily: ["Rubik", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Rubik", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};