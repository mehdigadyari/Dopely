import { Slider, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import useStyles from './RangeSlider.styles'
import BoxShades from './BoxShades'

export default function RangeSlider({ hex }) {
  const styles = useStyles()
  // const [range, setRange] = useState([])
  const [rangeNum, setRangeNum] = useState(1)
  const [boxShow, setBoxShow] = useState([])
  const handleChange = (e, d) => {
    setRangeNum(d)
  }
  console.log(typeof rangeNum)
  useEffect(() => {
    var ans = []
    function range(start, end) {
      for (let i = start; i <= end; i++) {
        ans.push(i)
      }
      setBoxShow(ans)
    }
    range(1, rangeNum)
    // console.log(ans)
    const StepColor = (hex) => {
      var fg = Number(hex.slice(1))
      // console.log(typeof fg)
      var step = fg / rangeNum
      console.log(typeof step)
    }
    StepColor(hex)
  }, [hex, rangeNum])

  return (
    <div className={styles.root}>
      <div className={styles.Range}>
        <Typography>Shades</Typography>
        <Slider
          value={rangeNum}
          onChange={handleChange}
          defaultValue={1}
          valueLabelDisplay="on"
          step={1}
          min={1}
          max={40}
          className={styles.slider}
        />
      </div>
      <div className={styles.BoxStyle}>
        {boxShow.map((s) => (
          <BoxShades key={s} bgHex={hex} />
        ))}
      </div>
    </div>
  )
}
