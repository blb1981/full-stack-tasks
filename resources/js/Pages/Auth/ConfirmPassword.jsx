import { useEffect } from 'react'
import { Head, useForm } from '@inertiajs/react'
import { Button, CircularProgress, TextField, Typography } from '@mui/material'

import GuestLayout from '@/Layouts/GuestLayout'

export default function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: '',
  })

  useEffect(() => {
    return () => {
      reset('password')
    }
  }, [])

  const submit = (e) => {
    e.preventDefault()

    post(route('password.confirm'))
  }

  return (
    <GuestLayout displayTitle="Confirm Password">
      <Head title="Confirm Password" />

      <Typography>
        This is a secure area of the application. Please confirm your password
        before continuing.
      </Typography>

      <form onSubmit={submit}>
        <TextField
          id="password"
          type="password"
          name="password"
          value={data.password}
          required
          onChange={(e) => setData('password', e.target.value)}
          label="Password"
          error={Boolean(errors.password)}
          helperText={errors.password}
          sx={{ width: '100%', mb: 2 }}
        />

        <Button disabled={processing}>
          {processing ? <CircularProgress size="1.5rem" /> : 'Confirm'}
        </Button>
      </form>
    </GuestLayout>
  )
}
