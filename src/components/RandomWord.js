import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const RandomWord = ({word}) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 300,
        minHeight: 300,
        maxHeight: 300,
        margin: "auto",
        backgroundColor: "wheat",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
      }}
    >
        <div>
          <CardContent>
          <Typography
              sx={{ fontSize: 32}}
              color="text.secondary"
              gutterBottom
            >
              Word of the day!
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {word}
            </Typography>
          </CardContent>
        </div>
    </Card>
  )
}

export default RandomWord