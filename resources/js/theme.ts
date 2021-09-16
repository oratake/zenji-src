import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: '#556c06',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
