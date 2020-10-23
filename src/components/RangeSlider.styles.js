import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    width: 800,
    height: 'auto',
    backgroundColor: '#a1a1a1',
    margin: 'auto',
    marginTop: 20,
    padding: 25,
    '&:focus': {
      outline: 'none',
    },
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },

  slider: { width: 300, marginLeft: 200 },
  BoxStyle: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 15,
  },
}))
