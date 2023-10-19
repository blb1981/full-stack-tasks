import { useForm, Link } from '@inertiajs/react'

import {
  Table,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
  TableCell,
  Button,
  Typography,
  TableBody,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import InfoIcon from '@mui/icons-material/Info'

import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout'

const Index = ({ auth, tasks }) => {
  const { processing, delete: destroy } = useForm()
  const handleDelete = (task) => {
    destroy(route('tasks.destroy', { task }))
  }

  return (
    <AuthenticatedLayout user={auth.user} displayTitle="My Tasks">
      <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
        My Tasks
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Task Name</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell align="right">Complete?</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>{task.name}</TableCell>
                  <TableCell>
                    {/* Help from  https://stackoverflow.com/questions/673905/how-to-determine-users-locale-within-browser */}
                    {new Date(task.due_date).toLocaleDateString(
                      navigator.languages && navigator.languages.length
                        ? navigator.languages[0]
                        : navigator.language,
                      {
                        timeZone: 'UTC',
                        dateStyle: 'medium',
                      }
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <Typography>{task.is_complete ? 'Yes' : 'No'}</Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      display: 'flex',
                      justifyContent: 'end',

                      flexWrap: 'wrap',
                    }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      color="error"
                      onClick={() => handleDelete(task)}
                      sx={{ ml: 1 }}
                    >
                      <DeleteIcon />
                    </Button>
                    <Button
                      variant="contained"
                      component={Link}
                      href={`/tasks/edit/${task.id}`}
                      size="small"
                      sx={{ ml: 1 }}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      variant="contained"
                      component={Link}
                      href={`/tasks/${task.id}`}
                      size="small"
                    >
                      <InfoIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} sx={{ textAlign: 'center' }}>
                  <Typography sx={{ mb: 2 }}>No tasks to display</Typography>
                  <Button
                    component={Link}
                    href={route('tasks.create')}
                    variant="contained"
                  >
                    Add a task
                  </Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </AuthenticatedLayout>
  )
}

export default Index
