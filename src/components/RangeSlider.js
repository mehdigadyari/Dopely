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

  function convertHex(hex) {
    console.log(`hex is ${hex}`)
    hex = hex.replace('#', '')
    let r = parseInt(hex.substring(0, 2), 16)
    let g = parseInt(hex.substring(2, 4), 16)
    let b = parseInt(hex.substring(4, 6), 16)

    // console.log(`r is ${r}`)
    // console.log(`g is ${g}`)
    // console.log(`b is ${b}`)

    let stepr = Math.floor(r / rangeNum)
    let stepg = Math.floor(g / rangeNum)
    let stepb = Math.floor(b / rangeNum)

    let colors = []
    for (let i = 0; i < rangeNum; i++) {
      colors[i] = 'rgba(' + r + ',' + g + ',' + b + ')'
      r = r - stepr
      g = g - stepg
      b = b - stepb
    }
    console.log(colors)
    return colors
  }

  let colors = convertHex(hex)

  const createRange = (n) => {
    let foo = []
    for (var i = 1; i <= n; i++) {
      foo.push(i)
    }
    setRange(foo)
    // console.log(foo)
  }
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
