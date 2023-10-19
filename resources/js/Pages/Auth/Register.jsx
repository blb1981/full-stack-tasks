import { useEffect } from 'react'
import { Head, Link as ILink, useForm } from '@inertiajs/react'

import {
  CircularProgress,
  TextField,
  Button,
  Link as MuiLink,
  Box,
} from '@mui/material'

import GuestLayout from '@/Layouts/GuestLayout'

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation')
    }
  }, [])

  const submit = (e) => {
    e.preventDefault()

    post(route('register'))
  }

  return (
    <GuestLayout displayTitle="Register">
      <Head title="Register" />

      <form onSubmit={submit}>
        <TextField
          id="name"
          name="name"
          value={data.name}
          onChange={(e) => setData('name', e.target.value)}
          required
          label="Name"
          sx={{ width: '100%', mb: 2 }}
          error={Boolean(errors.name)}
          helperText={errors.name}
        />

        <TextField
          id="email"
          type="email"
          name="email"
          value={data.email}
          onChange={(e) => setData('email', e.target.value)}
          required
          label="Email"
          sx={{ width: '100%', mb: 2 }}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />

        <TextField
          id="password"
          type="password"
          name="password"
          value={data.password}
          onChange={(e) => setData('password', e.target.value)}
          required
          label="Password"
          sx={{ width: '100%', mb: 2 }}
          error={Boolean(errors.password)}
          helperText={errors.password}
        />

        <TextField
          id="password_confirmation"
          type="password"
          name="password_confirmation"
          value={data.password_confirmation}
          autoComplete="new-password"
          onChange={(e) => setData('password_confirmation', e.target.value)}
          required
          label="Confirm Password"
          sx={{ width: '100%', mb: 2 }}
          error={Boolean(errors.password_confirmation)}
          helperText={errors.password_confirmation}
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <MuiLink component={ILink} href={route('login')}>
            Already registered?
          </MuiLink>

          <Button variant="contained" disabled={processing} type="submit">
            {processing ? <CircularProgress size="1.5rem" /> : 'Register'}
          </Button>
        </Box>
      </form>
    </GuestLayout>
  )
}
