import { Button, Container, TextField, Typography } from '@mui/material'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prev) => prev + 1)
  }
  const [value, setValue] = useState('')

  return (
   <>
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

      


      <Typography variant="h6" gutterBottom>
        Enter your name
      </Typography>

      <TextField
        label="Name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type here"
      />

      {value && (
        <Typography sx={{ mt: 2 }}>
          Hello {value}
        </Typography>
      )}
    </Container>
    </>
  )
}

export default App
