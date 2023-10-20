import { useEffect } from 'react'
import { Head, Link as iLink, useForm } from '@inertiajs/react'

import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import MuiLink from '@mui/material/Link'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

import GuestLayout from '@/Layouts/GuestLayout'
import { Typography } from '@mui/material'

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  })

  useEffect(() => {
    return () => {
      reset('password')
    }
  }, [])

  const submit = (e) => {
    e.preventDefault()
    post(route('login'))
  }

  return (
    <GuestLayout displayTitle="Login">
      <Head title="Login" />
      <>
        {status && <Typography sx={{ mb: 2 }}>{status}</Typography>}

        <form onSubmit={submit}>
          <TextField
            id="email"
            type="email"
            label="Email"
            name="email"
            variant="outlined"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
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
            label="Password"
            sx={{ width: '100%', mb: 2 }}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />

          <FormControlLabel
            sx={{ mb: 2 }}
            control={
              <Checkbox
                checked={data.remember}
                onChange={(e) => setData('remember', e.target.checked)}
              />
            }
            label="Remember me?"
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1,
              mb: 2,
            }}
          >
            {canResetPassword && (
              <MuiLink component={iLink} href={route('password.request')}>
                Forgot your password?
              </MuiLink>
            )}
            <Button variant="contained" disabled={processing} type="submit">
              {processing ? <CircularProgress size="1.5rem" /> : 'Log in'}
            </Button>
          </Box>
          <Box>
            <MuiLink component={iLink} href={route('register')}>
              Need an account? Click here to register.
            </MuiLink>
          </Box>
        </form>
      </>
    </GuestLayout>
  )
}
