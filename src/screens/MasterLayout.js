import React, { useState } from 'react'
import HexInput from '../components/HexInput'
import RangeSlider from '../components/RangeSlider'
import { Grid } from '@material-ui/core'
import useStyles from './MasterLayout.styles'

export default function MasterLayout() {
  const classes = useStyles()
  const [hex, setHex] = useState('#')

  return (
    <div className={classes.root}>
      <Grid item lg={12}>
        <HexInput hex={hex} setHex={setHex} />
      </Grid>
      <Grid item lg={12}>
        <RangeSlider hex={hex} />
      </Grid>
    </div>
  )
}
