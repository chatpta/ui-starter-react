import createTheme from "@material-ui/core/styles/createTheme";


import { blueGrey, deepOrange, orange, green, common } from "@material-ui/core/colors";

const appColors = {
    primary: blueGrey[ 900 ],
    secondary: deepOrange[ 500 ],
    emphasis: orange[ 500 ],
    cool: green[ 700 ],
    heroPrimary: orange[ 200 ],
    whiteText: "#faf1e5",
    blackText: common.black,
    background: { main: "#faecd9" }
};


const appTheme = createTheme( {
    palette: {
        primary: { main: appColors.primary },
        secondary: { main: appColors.secondary },
        emphasis: { main: appColors.emphasis },
        cool: { main: appColors.cool },
        typography: { useNextVariants: true },
        heroPrimary: { main: appColors.heroPrimary },
        background: appColors.background,
        chatptaText: {
            white: appColors.whiteText,
            black: appColors.blackText,
        },
    },
    dimensions: {
        mainSectionWidth: "1200px",
        createProductFormWidth: "900px"
    },
    thumbnail: {
        shadow: [
            "0px 2px 4px -1px rgba(235,152,52,0.2),0px 4px 5px 0px rgba(235,152,52,0.14),0px 1px 10px 0px rgba(235,152,52,0.12)",
            "0px 2px 4px -1px rgba(250,172,72,0.2),0px 4px 5px 0px rgba(250,172,72,0.14),0px 1px 10px 0px rgba(250,172,72,0.12)",
        ]
    }
} );

export default appTheme;
