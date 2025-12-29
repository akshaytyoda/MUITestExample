import { Button, Container, Typography } from '@mui/material'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        MUI Button Test
      </Typography>

      <Button variant="contained" onClick={handleClick}>
        Click Me
      </Button>

      {count > 0 && (
        <Typography data-testid="click-count" sx={{ mt: 2 }}>
          Hi {count}
        </Typography>
      )}
    </Container>
  )
}

export default App
