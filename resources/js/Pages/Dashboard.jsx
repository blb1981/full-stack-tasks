import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import {
  Typography,
  Card,
  Grid,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
} from '@mui/material'

export default function Dashboard({
  auth,
  tasksCount,
  tasksRecentlyAdded,
  tasksDueSoon,
}) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Dashboard" />
      <Typography sx={{ mb: 2 }} variant="h4">
        Dashboard
      </Typography>
      <Typography sx={{ mb: 2 }}>You have {tasksCount} total tasks.</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card variant="elevation">
            <CardContent>
              <Typography variant="h6">Most Recently Added</Typography>
              <List dense>
                {tasksRecentlyAdded.map((task) => (
                  <ListItem key={task.id}>
                    <Typography variant="body2">{task.name}</Typography>
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <CardActions>
              <Button component={Link} href={route('tasks.index')}>
                See All
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="elevation">
            <CardContent>
              <Typography variant="h6">Due Soon/Past Due</Typography>
              <List dense>
                {tasksDueSoon.map((task) => (
                  <ListItem key={task.id}>
                    <Typography variant="body2">{task.name}</Typography>
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <CardActions>
              <Button component={Link} href={route('tasks.index')}>
                See All
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </AuthenticatedLayout>
  )
}
