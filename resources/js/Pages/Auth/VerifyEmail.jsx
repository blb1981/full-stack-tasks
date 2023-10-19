import GuestLayout from '@/Layouts/GuestLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import {
  CircularProgress,
  Typography,
  Button,
  Link as MuiLink,
  Box,
} from '@mui/material'

export default function VerifyEmail({ status }) {
  const { post, processing } = useForm({})

  const submit = (e) => {
    e.preventDefault()

    post(route('verification.send'))
  }

  return (
    <GuestLayout displayTitle="Please Verify Email">
      <Head title="Email Verification" />

      <Typography>
        Thanks for signing up! Before getting started, could you verify your
        email address by clicking on the link we just emailed to you? If you
        didn't receive the email, we will gladly send you another.
      </Typography>

      {status === 'verification-link-sent' && (
        <Typography>
          A new verification link has been sent to the email address you
          provided during registration.
        </Typography>
      )}

      <form onSubmit={submit}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 2,
          }}
        >
          <Button variant="contained" disabled={processing} type="submit">
            {processing ? (
              <CircularProgress size="1.5rem" />
            ) : (
              'Resend verification email'
            )}
          </Button>

          <MuiLink component={Link} href={route('logout')} method="post">
            Log Out
          </MuiLink>
        </Box>
      </form>
    </GuestLayout>
  )
}
