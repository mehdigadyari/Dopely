import { Slider, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import useStyles from './RangeSlider.styles'
import BoxShades from './BoxShades'

export default function RangeSlider({ hex }) {
  const styles = useStyles()

  const [rangeNum, setRangeNum] = useState(1)
  const [range, setRange] = useState([1])
  const createRangeNum = (e, d) => {
    setRangeNum(d)
  }
  const createRange = (n) => {
    let foo = []
    for (var i = 1; i <= n; i++) {
      foo.push(i)
    }
    setRange(foo)
    // console.log(foo)
  }
  function convertHex(hex) {
    hex = hex.slice(1) // حذف مربع

    if (hex.length === 3) {
      hex = '' + hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
    }
    let r = parseInt(hex.slice(0, 2), 16)
    let g = parseInt(hex.slice(2, 4), 16)
    let b = parseInt(hex.slice(4, 6), 16)

    let stepr = Math.ceil(r / (rangeNum - 1))
    let stepg = Math.ceil(g / (rangeNum - 1))
    let stepb = Math.ceil(b / (rangeNum - 1))

    let colors = []
    for (let i = 0; i < rangeNum; i++) {
      colors[i] = 'rgba(' + r + ',' + g + ',' + b + ')'
      r = r - stepr
      g = g - stepg
      b = b - stepb
      if ((r <= 0) & (g <= 0) & (b <= 0)) {
        r = 0
        g = 0
        b = 0
      }
    }

    return colors
  }

  let colors = convertHex(hex)

  useEffect(() => {
    createRange(rangeNum)
  }, [rangeNum])

  return (
    <div className={styles.root}>
      <div className={styles.Range}>
        <Typography>Shades</Typography>
        <Slider
          value={rangeNum}
          onChange={createRangeNum}
          defaultValue={1}
          valueLabelDisplay="on"
          step={1}
          min={1}
          max={40}
          className={styles.slider}
        />
      </div>
      <div className={styles.BoxStyle}>
        {range.map((i, j) => {
          return <BoxShades key={i} bgHex={colors[j]} />
        })}
      </div>
    </div>
  )
}
