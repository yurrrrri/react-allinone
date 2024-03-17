function Message({ message }) {
  return <p>{message}</p>;
}

function ListItem({ post }) {
  return (
    <li key={post.id}>
      <p>{post.title}</p>
    </li>
  );
}

function List({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <ListItem key={post.id} post={post} />
      ))}
    </ul>
  );
}

export default function B({ message, posts }) {
  return (
    <div>
      <h1>B Component</h1>
      <Message message={message} />
      <List posts={posts} />
    </div>
  );
}
