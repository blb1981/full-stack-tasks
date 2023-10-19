import { useRef, useState } from 'react'
import DangerButton from '@/Components/DangerButton'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import Modal from '@/Components/Modal'
import SecondaryButton from '@/Components/SecondaryButton'
import TextInput from '@/Components/TextInput'
import { useForm } from '@inertiajs/react'
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  Box,
} from '@mui/material'

export default function DeleteUserForm({ className = '' }) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false)
  const passwordInput = useRef()

  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
  } = useForm({
    password: '',
  })

  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true)
  }

  const deleteUser = (e) => {
    e.preventDefault()

    destroy(route('profile.destroy'), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset(),
    })
  }

  const closeModal = () => {
    setConfirmingUserDeletion(false)

    reset()
  }

  return (
    <section className={`space-y-6 ${className}`}>
      <header>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Delete Account
        </Typography>

        <Typography sx={{ mb: 2 }}>
          Once your account is deleted, all of its resources and data will be
          permanently deleted. Before deleting your account, please download any
          data or information that you wish to retain.
        </Typography>
      </header>

      <Button variant="contained" color="error" onClick={confirmUserDeletion}>
        Delete Account
      </Button>

      <Dialog open={confirmingUserDeletion} onClose={closeModal} sx={{ p: 2 }}>
        {/* <Modal show={confirmingUserDeletion} onClose={closeModal}> */}
        <form onSubmit={deleteUser}>
          <DialogTitle variant="h5">
            Are you sure you want to delete your account?
          </DialogTitle>
          <DialogContent>
            <Typography sx={{ mb: 2 }}>
              Once your account is deleted, all of its resources and data will
              be permanently deleted. Please enter your password to confirm you
              would like to permanently delete your account.
            </Typography>
            <Box>
              <TextField
                id="password"
                type="password"
                name="password"
                ref={passwordInput}
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                label="Password"
                error={Boolean(errors.password)}
                helperText={errors.password}
                sx={{ mb: 2 }}
              />
            </Box>

            <Button
              variant="outlined"
              onClick={closeModal}
              sx={{ mr: 1, mb: 1 }}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              color="error"
              className="ml-3"
              disabled={processing}
              sx={{ mr: 1, mb: 1 }}
            >
              Delete Account
            </Button>
          </DialogContent>
        </form>
        {/* </Modal> */}
      </Dialog>
    </section>
  )
}
