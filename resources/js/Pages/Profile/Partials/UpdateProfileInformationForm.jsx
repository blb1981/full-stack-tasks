import { Link, useForm, usePage } from '@inertiajs/react'
import { Transition } from '@headlessui/react'
import {
  Box,
  TextField,
  Grid,
  Typography,
  Button,
  Link as MuiLink,
} from '@mui/material'

export default function UpdateProfileInformation({
  mustVerifyEmail,
  status,
  className = '',
}) {
  const user = usePage().props.auth.user

  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      name: user.name,
      email: user.email,
    })

  const submit = (e) => {
    e.preventDefault()

    patch(route('profile.update'))
  }

  console.log(errors)

  return (
    <Grid container sx={{ mb: 3 }}>
      <Grid item xs={12} md={6}>
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ mb: 1 }} variant="h4">
            Profile Information
          </Typography>

          <Typography>
            Update your account's profile information and email address.
          </Typography>
        </Box>

        <form onSubmit={submit}>
          <TextField
            id="name"
            className="mt-1 block w-full"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            required
            autoComplete="name"
            label="Name"
            error={Boolean(errors.name)}
            helperText={errors.name}
            sx={{ width: '100%', mb: 2 }}
          />

          <TextField
            id="email"
            type="email"
            className="mt-1 block w-full"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            required
            label="Email Address"
            error={Boolean(errors.email)}
            helperText={errors.email}
            sx={{ width: '100%', mb: 2 }}
          />

          {mustVerifyEmail && user.email_verified_at === null && (
            <Box>
              <Typography>
                Your email address is unverified.
                <MuiLink
                  component={Link}
                  href={route('verification.send')}
                  method="post"
                  as="button"
                >
                  Click here to re-send the verification email.
                </MuiLink>
              </Typography>

              {status === 'verification-link-sent' && (
                <Typography>
                  A new verification link has been sent to your email address.
                </Typography>
              )}
            </Box>
          )}

          <Box>
            <Button variant="contained" disabled={processing} type="submit">
              Save
            </Button>

            <Transition
              show={recentlySuccessful}
              enter="transition ease-in-out"
              enterFrom="opacity-0"
              leave="transition ease-in-out"
              leaveTo="opacity-0"
            >
              <Typography>Saved.</Typography>
            </Transition>
          </Box>
        </form>
      </Grid>
    </Grid>
  )
}
