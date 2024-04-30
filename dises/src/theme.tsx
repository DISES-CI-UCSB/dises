import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#715C83',
            dark: '#472F5B',
            light: '#8F79A1'
        },
        // primary: {
        //     main: '#0398CE',
        //     light: '#FFFFFF',
        //     dark: '#242424'
        // },
        // green
        secondary: {
            light: '#e8f5e9',
            main: '#4caf50',
            dark:'#1b5e20'
        }
    },
    typography: {
        fontFamily: [
            'Oswald',
            'Arial',
            'sans-serif',
        ].join(','),
        h1: {
            fontSize: '3rem',
            fontWeight: 'normal',
        },
        h2: {
            fontSize: '2.5rem',
        },
        h3: {
            fontSize: '2rem', 
        },
        h4: {
            fontSize: '1.5rem', 
        },
        h5: {
            fontSize: '1.25rem', 
            lineHeight: '1.6'
        },
        
    },
});

export default theme