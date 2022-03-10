

export default function Home() {
  return (
    <form action="/api/create" method="post">
      <h1>Add A Parent & A Child</h1>
      <input name="parent-name" placeholder="Parent's Name" />
      <input name="parent-id" placeholder="Parent's ID" />
      <input name="student-name" placeholder="Student's Name" />
      <input name="student-id" placeholder="Students's ID" />
      <input name="student-image" placeholder="Students's Photo" />
      <button>Submit</button>
    </form>
  )
}
