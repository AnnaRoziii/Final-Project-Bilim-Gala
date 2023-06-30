import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: "#0A0A0A",
      contrastText: "#176B87  ",
    },
    secondary: {
      main: "#d4f0fc",
      contrastText: "	#d4f0fc",
    },
    custom: {
      main: "#FEFF86",
    },
    custom1: {
      main: "#84A7A1",
    },

  },

  typography: {
    allVariants: {
      fontFamily: "Jost, sanf-serif",
    },
    h1: {
      fontFamily: "DM Serif Display, serif",
      fontSize: "85px",
      "@media (max-width:900px)": {
        fontSize: "60px",
      },
      "@media (max-width:600px)": {
        fontSize: "50px",
      },
    },
    h2: {
      fontFamily: "DM Serif Display, serif",
      fontSize: "50px",
      "@media (max-width:900px)": {
        fontSize: "45px",
      },
      "@media (max-width:600px)": {
        fontSize: "40px",
      },
    },
    h3: {
      fontFamily: "DM Serif Display, serif",
      fontSize: "40px",
      "@media (max-width:900px)": {
        fontSize: "35px",
      },
      "@media (max-width:600px)": {
        fontSize: "30px",
      },
    },
    h4: {
      fontFamily: "DM Serif Display, serif",
      fontSize: "35px",
      "@media (max-width:900px)": {
        fontSize: "30px",
      },
      "@media (max-width:600px)": {
        fontSize: "25px",
      },
    },
    h5: {
      fontFamily: "DM Serif Display, serif",
      fontSize: "25px",
      "@media (max-width:900px)": {
        fontSize: "22px",
      },
      "@media (max-width:600px)": {
        fontSize: "20px",
      },
    },
    h6: {
      fontFamily: "Jost serif",
      fontSize: "14px",
      "@media (max-width:900px)": {
        fontSize: "12px",
      },
      "@media (max-width:600px)": {
        fontSize: "12px",
      },
    },

    body1: {
      fontSize: "20px",
      "@media (max-width:900px)": {
        fontSize: "18px",
      },
      "@media (max-width:600px)": {
        fontSize: "14px",
      },
    },
    button: {
      fontWeight: "600",
      fontSize: "20px",
      "@media (max-width:900px)": {
        fontSize: "18px",
      },
      "@media (max-width:600px)": {
        fontSize: "16px",
      },
    },
    bilim: {
      fontSize: "30px",
      "@media (max-width:900px)": {
        fontSize: "18px",
      },
      "@media (max-width:600px)": {
        fontSize: "14px",
      },
    }
  },
});
