export default function B({ message, posts }) {
  return (
    <div>
      <h1>B Component</h1>
      <p>{message}</p>
      <ul>{posts}</ul>
    </div>
  );
}
