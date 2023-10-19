import { useEffect } from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head, useForm } from '@inertiajs/react'

import { Box, Button, CircularProgress, TextField } from '@mui/material'

export default function ResetPassword({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
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

    post(route('password.store'))
  }

  return (
    <GuestLayout displayTitle="Reset Password">
      <Head title="Reset Password" />

      <Box>
        <form onSubmit={submit}>
          <TextField
            id="email"
            type="email"
            name="email"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
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
            label="Password"
            sx={{ width: '100%', mb: 2 }}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />

          <TextField
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            className="mt-1 block w-full"
            autoComplete="new-password"
            onChange={(e) => setData('password_confirmation', e.target.value)}
            label="Confirm Password"
            sx={{ width: '100%', mb: 2 }}
            error={Boolean(errors.password_confirmation)}
            helperText={errors.password_confirmation}
          />

          <Button
            variant="contained"
            className="ml-4"
            disabled={processing}
            type="submit"
          >
            {processing ? <CircularProgress size="1.5rem" /> : 'Reset Password'}
          </Button>
        </form>
      </Box>
    </GuestLayout>
  )
}
