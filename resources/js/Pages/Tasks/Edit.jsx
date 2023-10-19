import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout'
import { useForm } from '@inertiajs/react'

const Create = ({ auth, task }) => {
  const { data, setData, put, processing, errors } = useForm({
    name: task.name,
    due_date: task.due_date,
    is_complete: task.is_complete,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    put(route('tasks.update', task))
  }

  return (
    <AuthenticatedLayout user={auth.user}>
      <div>
        <h1>Edit Task: {task.name}</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="p-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setData('name', e.target.value)}
              value={data.name}
            />
            <div>{errors.name}</div>
          </div>
          <div className="my-5">
            <label className="p-2" htmlFor="dueDate">
              Due Date:
            </label>
            <input
              type="date"
              name="due_date"
              id="dueDate"
              onChange={(e) => setData('due_date', e.target.value)}
              value={data.due_date}
            />
            <div>{errors.due_date}</div>
          </div>

          <div className="my-5 mx-3">
            <label htmlFor="isComplete">Complete?</label>
            <input
              type="checkbox"
              name="is_complete"
              id="isComplete"
              checked={data.is_complete}
              onChange={(e) => setData('is_complete', e.target.checked)}
            />
          </div>
          <div className="my-5">
            <button disabled={processing} type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </AuthenticatedLayout>
  )
}

export default Create
