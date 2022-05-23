const tasks = [
    {
      "id": 1,
      "text": "test",
      "other": "no-show",
      "day": "monday",
      "reminder": true
    },
    {
      "text": "Test4",
      "day": "Wednesday",
      "reminder": false,
      "id": 3
    },
    {
      "text": "Task6",
      "day": "Thursday",
      "reminder": true,
      "id": 4
    }
]

const Tasks = () => {
  return (
    <>
        {tasks.map((task) => (
            <h3>{task.text}</h3>
        ))}
    </>
  )
}

export default Tasks