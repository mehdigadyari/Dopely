import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    width: 800,
    height: 400,
    backgroundColor: '#a1a1a1',
    margin: 'auto',
    marginTop: 80,
    padding: 25,
    '&:focus': {
      outline: 'none',
    },
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  slider: { width: 300, marginLeft: 20 },
}))
