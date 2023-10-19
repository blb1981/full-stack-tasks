import { useState } from 'react'
import { useForm } from '@inertiajs/react'
import {
  TextField,
  Typography,
  Box,
  Grid,
  Button,
  CircularProgress,
} from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout'

const Create = ({ auth }) => {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    due_date: null,
  })
  const [dateError, setDateError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // const formattedDate = new Date(data.due_date).toISOString().split('T')[0]
    // console.log(data)

    post(route('tasks.store'))
  }

  return (
    <AuthenticatedLayout user={auth.user} displayTitle="Create New Task">
      <Typography
        variant="h4"
        component="h1"
        sx={{ textAlign: 'center', mb: 3 }}
      >
        Create a new task
      </Typography>
      <Box>
        <Grid container>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <TextField
                type="text"
                name="name"
                id="name"
                onChange={(e) => setData('name', e.target.value)}
                value={data.name}
                label="Task name"
                sx={{ width: '100%', mb: 2 }}
                error={Boolean(errors.name)}
                helperText={errors.name}
              />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']} sx={{ mb: 2 }}>
                  <DatePicker
                    value={data.due_date}
                    onChange={(newValue) =>
                      setData(
                        'due_date',
                        new Date(newValue).toISOString().split('T')[0]
                      )
                    }
                    label="Due Date"
                    onError={(error) => setDateError(error)}
                  />
                </DemoContainer>
              </LocalizationProvider>

              <Button variant="contained" disabled={processing} type="submit">
                {processing ? <CircularProgress size="1.5rem" /> : 'Add'}
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>
    </AuthenticatedLayout>
  )
}

export default Create
