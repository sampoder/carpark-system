export default function Home() {
  return (
    <form action="/api/pickup" method="post">
      <h1>Initiate A Pickup</h1>
      <input name="parent-id" placeholder="Parent's ID" />
      <button>Submit</button>
    </form>
  )
}
