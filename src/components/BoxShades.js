import { Box } from '@material-ui/core'
import React from 'react'
import useStyles from './RangeSlider.styles'

export default function BoxShades({ bgHex }) {
  const styles = useStyles()

  return (
    <div className={styles.rroot}>
      <Box
        display="flex"
        borderRadius={6}
        p={2}
        m={1}
        bgcolor={bgHex}
        css={{ height: 80, width: 80 }}
      />
    </div>
  )
}
