import React from "react";

const Message = React.memo(function Message({ message }) {
  return <p>{message}</p>;
});

const ListItem = React.memo(function ListItem({ post }) {
  return (
    <li key={post.id}>
      <p>{post.title}</p>
    </li>
  );
});

const List = React.memo(function List({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <ListItem key={post.id} post={post} />
      ))}
    </ul>
  );
});

export default function B({ message, posts }) {
  return (
    <div>
      <h1>B Component</h1>
      <Message message={message} />
      <List posts={posts} />
    </div>
  );
}
