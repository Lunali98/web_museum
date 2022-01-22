import React from 'react';
import {createTheme} from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Lunapark One, serif',
        h1: {
            fontSize: '80px',
            lineHeight: '70px',
            fontFamily: 'Lunapark One, serif',
            textTransform: 'uppercase'
        },
        h2: {
            fontSize: '22px'
        },
        h3: {
            fontFamily: 'RobotoCondensed',
            fontSize: '15px'
        },
        h4: {
            fontSize: '15px'
        },
        body1: {
            fontFamily: 'Inter',
            fontSize: '16px'
        },
        body2: {
            fontFamily: 'Raleway',
            fontSize: '15px'
        },
        subtitle1: {
            fontFamily: 'Raleway Bold',
            fontSize: '21px'
        },
        button: {
            fontFamily: 'Lunapark One, serif',
            fontSize: '22px',
            textTransform: 'none'
        }
    },
    palette: {
        background: {
            dark: '#3F3F3F',
        },
        primary: {
            main: '#DEA900'
        }
    },
    components: {
        MuiLink: {
            styleOverrides: {
                color: 'unset !important',
                textDecoration: 'none !important'
            }
        },
    }
});

class CustomThemeProvider extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                {this.props.children}
            </ThemeProvider>
        )
    }
}

export default CustomThemeProvider;