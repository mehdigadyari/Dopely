import React, { useEffect, useState } from 'react'
import { TextField } from '@material-ui/core'
import useStyles from './HexInput.styles'

export default function HexInput({ hex, setHex }) {
  const styles = useStyles()
  const [bg, setbg] = useState(hex)
  const [hexErr, setHexErr] = useState(false)
  let regex = /^#([0-9A-F]{3}){1,2}$/i
  useEffect(() => {
    if (regex.test(bg) || bg === '#') {
      //جلوگیری از ست شدن ورودی اشتباه و محاسبه روی آن
      setHexErr(false)
      setHex(bg)
    } else {
      setHexErr(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bg, hexErr])
  return (
    <div style={{ backgroundColor: hex }} className={styles.root}>
      <TextField
        value={bg}
        onChange={(e) => setbg(e.target.value)}
        error={hexErr}
        id="outlined-basic"
        fullWidth
        label="HexInput"
        variant="outlined"
      />
    </div>
  )
}
