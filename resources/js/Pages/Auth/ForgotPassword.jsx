import GuestLayout from '@/Layouts/GuestLayout'
import { Head, useForm } from '@inertiajs/react'

import { CircularProgress, TextField, Button, Typography } from '@mui/material'

export default function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  })

  const submit = (e) => {
    e.preventDefault()

    post(route('password.email'))
  }

  return (
    <GuestLayout displayTitle="Forgot Passowrd">
      <Head title="Forgot Password" />

      <Typography>
        Forgot your password? No problem. Just let us know your email address
        and we will email you a password reset link that will allow you to
        choose a new one.
      </Typography>

      {status && <Typography>{status}</Typography>}

      <form onSubmit={submit}>
        <TextField
          id="email"
          type="email"
          name="email"
          value={data.email}
          onChange={(e) => setData('email', e.target.value)}
          label="Email address"
          error={Boolean(errors.email)}
          helperText={errors.email}
          sx={{ width: '100%', my: 2 }}
        />

        <Button variant="contained" disabled={processing} type="submit">
          {processing ? (
            <CircularProgress size="1.5rem" />
          ) : (
            'Email Password Reset Link'
          )}
        </Button>
      </form>
    </GuestLayout>
  )
}
