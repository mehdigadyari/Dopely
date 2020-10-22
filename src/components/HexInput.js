import React, { useEffect, useState } from 'react'
import { TextField } from '@material-ui/core'
import useStyles from './HexInput.styles'

export default function HexInput() {
  const styles = useStyles()
  const [hex, setHex] = useState('#')
  const [hexErr, setHexErr] = useState(false)
  useEffect(() => {
    let hexPattern = /^#([0-9A-F]{3}){1,2}$/i
    if (hexPattern.test(hex) || hex === '#') {
      setHexErr(false)
      localStorage.setItem('hex', hex)
    } else {
      setHexErr(true)
    }
  }, [hex, hexErr])
  return (
    <div style={{ backgroundColor: hex }} className={styles.root}>
      <TextField
        value={hex}
        onChange={(e) => setHex(e.target.value)}
        error={hexErr}
        id="outlined-basic"
        fullWidth
        label="HexInput"
        variant="outlined"
      />
    </div>
  )
}
