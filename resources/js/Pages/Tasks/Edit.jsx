import { useForm } from '@inertiajs/react'
import {
  TextField,
  Typography,
  Box,
  Grid,
  Button,
  CircularProgress,
  FormControlLabel,
  Checkbox,
} from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'

import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout'

const Edit = ({ auth, task }) => {
  const { data, setData, put, processing, errors } = useForm({
    name: task.name,
    due_date: task.due_date,
    is_complete: task.is_complete,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    put(route('tasks.update', task))
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
      displayTitle={`Edit Task: ${task.name}`}
    >
      <div>
        <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
          Edit Task: {task.name}
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
                  label="Name"
                  sx={{ width: '100%', mb: 2 }}
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                />

                {/* <div className="my-5">
                  <label className="p-2" htmlFor="dueDate">
                    Due Date:
                  </label>
                  <input
                    type="date"
                    name="due_date"
                    id="dueDate"
                    onChange={(e) => setData('due_date', e.target.value)}
                    value={data.due_date}
                  />
                  <div>{errors.due_date}</div>
                </div> */}

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']} sx={{ mb: 2 }}>
                    <DatePicker
                      value={dayjs(data.due_date)}
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

                <Box sx={{ mb: 3 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Boolean(data.is_complete)}
                        onChange={(e) =>
                          setData('is_complete', e.target.checked)
                        }
                      />
                    }
                    label="Mark complete?"
                  />
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    disabled={processing}
                    type="submit"
                  >
                    {processing ? <CircularProgress size="1.5rem" /> : 'Update'}
                  </Button>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Box>
      </div>
    </AuthenticatedLayout>
  )
}

export default Edit
