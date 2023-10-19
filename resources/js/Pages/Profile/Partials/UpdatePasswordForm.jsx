import { useRef } from 'react'
import { useForm } from '@inertiajs/react'
import { Transition } from '@headlessui/react'
import { TextField, Typography, Box, Grid, Button } from '@mui/material'

export default function UpdatePasswordForm({ className = '' }) {
  const passwordInput = useRef()
  const currentPasswordInput = useRef()

  const { data, setData, errors, put, reset, processing, recentlySuccessful } =
    useForm({
      current_password: '',
      password: '',
      password_confirmation: '',
    })

  const updatePassword = (e) => {
    e.preventDefault()

    put(route('password.update'), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors) => {
        if (errors.password) {
          reset('password', 'password_confirmation')
          passwordInput.current.focus()
        }

        if (errors.current_password) {
          reset('current_password')
          currentPasswordInput.current.focus()
        }
      },
    })
  }

  return (
    <Grid container sx={{ mb: 3 }}>
      <Grid item xs={12} md={6}>
        <Box>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Update Password
          </Typography>

          <Typography sx={{ mb: 2 }}>
            Ensure your account is using a long, random password to stay secure.
          </Typography>
        </Box>

        <form onSubmit={updatePassword}>
          <TextField
            id="current_password"
            ref={currentPasswordInput}
            value={data.current_password}
            onChange={(e) => setData('current_password', e.target.value)}
            type="password"
            label="Current password"
            error={Boolean(errors.current_password)}
            helperText={errors.current_password}
            sx={{ width: '100%', mb: 2 }}
          />

          <TextField
            id="password"
            ref={passwordInput}
            value={data.password}
            onChange={(e) => setData('password', e.target.value)}
            type="password"
            label="New Password"
            error={Boolean(errors.password)}
            helperText={errors.password}
            sx={{ width: '100%', mb: 2 }}
          />

          <TextField
            id="password_confirmation"
            value={data.password_confirmation}
            onChange={(e) => setData('password_confirmation', e.target.value)}
            type="password"
            className="mt-1 block w-full"
            autoComplete="new-password"
            label="Confirm Password"
            error={Boolean(errors.password_confirmation)}
            helperText={errors.password_confirmation}
            sx={{ width: '100%', mb: 2 }}
          />

          <Box className="flex items-center gap-4">
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
