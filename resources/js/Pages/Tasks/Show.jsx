import { Link } from '@inertiajs/react'
import { Typography, Box, Button, Divider } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout'

const Show = ({ auth, task }) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      displayTitle={`Task Details: ${task.name}`}
    >
      <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
        Task Details: {task.name}
      </Typography>
      <Box>
        <Box sx={{ mb: 3 }}>
          <Box>
            <Typography variant="h6" component="span">
              Task name:
            </Typography>{' '}
            <Typography component="span">{task.name}</Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="span">
              Created at:
            </Typography>{' '}
            <Typography component="span">
              {new Date(task.created_at).toLocaleDateString()}
              {' - '}
              {new Date(task.created_at).toLocaleTimeString()}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="span">
              Last updated at:
            </Typography>{' '}
            <Typography component="span">
              {new Date(task.updated_at).toLocaleDateString()}
              {' - '}
              {new Date(task.updated_at).toLocaleTimeString()}
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="span">
              Due date:
            </Typography>{' '}
            <Typography component="span">
              {new Date(task.due_date).toLocaleDateString(
                navigator.languages && navigator.languages.length
                  ? navigator.languages[0]
                  : navigator.language,
                {
                  timeZone: 'UTC',
                  dateStyle: 'long',
                }
              )}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="span">
              Completed?:
            </Typography>{' '}
            <Typography component="span">
              {Boolean(task.is_complete) ? 'Yes' : 'No'}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Button
            component={Link}
            variant="contained"
            href={`/tasks/edit/${task.id}`}
          >
            <EditIcon sx={{ mr: 1 }} /> Edit Task
          </Button>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <Box>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDelete(task)}
          >
            <DeleteIcon sx={{ mr: 1 }} /> Delete Task
          </Button>
        </Box>
      </Box>
    </AuthenticatedLayout>
  )
}

export default Show
