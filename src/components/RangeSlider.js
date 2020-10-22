import { Slider, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './RangeSlider.styles'
import { AlphaPicker, SketchPicker } from 'react-color'

export default function RangeSlider() {
  const styles = useStyles()
  const hex = localStorage.getItem('hex')
  return (
    <div div className={styles.root}>
      {/* <SketchPicker />
      <AlphaPicker /> */}
      <Typography>Shades</Typography>
      <Slider
        defaultValue={1}
        valueLabelDisplay="on"
        step={1}
        min={1}
        max={40}
        className={styles.slider}
      />
    </div>
  )
}
