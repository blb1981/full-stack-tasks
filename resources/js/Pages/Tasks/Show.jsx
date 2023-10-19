import { Link } from '@inertiajs/react'

import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout'

const Show = ({ auth, task }) => {
  console.log(task)
  return (
    <AuthenticatedLayout user={auth.user}>
      <div>
        {task.name} <button onClick={() => handleDelete(task)}>X</button>
        <Link href={`/tasks/edit/${task.id}`}>Edit</Link>
      </div>
    </AuthenticatedLayout>
  )
}

export default Show
