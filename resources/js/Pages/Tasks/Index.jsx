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

import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout'

const Index = ({ auth, tasks }) => {
  const { processing, delete: destroy } = useForm()
  const handleDelete = (task) => {
    destroy(route('tasks.destroy', { task }))
  }

  return (
    <AuthenticatedLayout user={auth.user} displayTitle="My Tasks">
      <Typography variant="h4" component="h1" sx={{ textAlign: 'center' }}>
        My Tasks
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Task Name</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
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
                <TableCell
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    onClick={() => handleDelete(task)}
                  >
                    <DeleteIcon />
                  </Button>
                  <Link href={`/tasks/edit/${task.id}`}>Edit</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </AuthenticatedLayout>
  )
}

export default Index
