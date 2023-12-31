import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const InfoUserPage = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const tab = searchParams.get("tab");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await axios.get(`https://dummyjson.com/users/${id}`);
        setUser(userData.data);

        if (tab === "posts") {
          const postsData = await axios.get(`https://dummyjson.com/users/${id}/${tab}`);
          setPosts(postsData.data.posts);
        } else if (tab === "todos") {
          const todosData = await axios.get(`https://dummyjson.com/users/${id}/${tab}`);
          setTodos(todosData.data.todos);
        } else {
          setPosts([]);
          setTodos([]);
        }
      } catch (error) {
        console.error(error, "ошибка при получении данных");
      }
    };

    fetchData();
  }, [id, tab, setSearchParams]);

  return (
    <div>
      <div className="info">
        <div>{user.id}</div>
        <div>
          <p>Name and surname</p>
          {user.firstName}
          {user.lastName}
        </div>
        <div>
          <p>Age</p>
          <p>{user.age}</p>
        </div>

        <div>
          <button
           className="btn" onClick={() => setSearchParams({ tab: "posts" })}>
            User posts
          </button>
          <button className="btn" onClick={() => setSearchParams({ tab: "todos" })}>
            User todos
          </button>
        </div>

        {tab === "posts" && posts.length > 0 && (
          <div className="post-todo">
            {posts.map((post) => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body} </p>
                <div>Tags {post.tags}</div>
                <div>reactions{post.reactions}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "todos" && todos.length > 0 && (
          <div className="post-todo">
            {todos.map((todo) => (
              <div key={todo.id}>
                <h3>{todo.todo}</h3>
                <div className="completed">Completed: {todo.completed ? "yes" : "no"}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoUserPage;


// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams, useSearchParams } from "react-router-dom";

// const InfoUserPage = () => {
//   const [user, setUser] = useState({});
//   const [posts, setPosts] = useState([]);
//   const [todos, setTodos] = useState([]);

//   const { id } = useParams();
//   const [searchParams, setSearchParams] = useSearchParams();

//   const tab = searchParams.get("tab");

//   useEffect(() => {
//     axios
//       .get(`https://dummyjson.com/users/${id}`)
//       .then((response) => setUser(response.data))
//       .catch((error) => console.error(error, "error user data"));
//   }, [id]);

//   useEffect(() => {
//     if (tab === "posts") {
//       axios
//         .get(`https://dummyjson.com/users/${id}/${tab}`)
//         .then((response) => setPosts(response.data.posts))
//         .catch((error) => console.error(error, "error user post"));
//     } else {
//       setPosts([]);
//     }
//   }, [id, tab]);

//   useEffect(() => {
//     if (tab === "todos") {
//       axios
//         .get(`https://dummyjson.com/users/${id}/${tab}`)
//         .then((response) => setTodos(response.data.todos))
//         .catch((error) => console.error(error, "error user todos"));
//     } else {
//       setTodos([]);
//     }
//   }, [id, tab]);

//   return (
//     <div>
//       <div>
//         <div>{user.id}</div>
//         <div>
//           <p>Name and surname</p>
//           {user.firstName}
//           {user.lastName}
//         </div>
//         <div>
//           <p>Age</p>
//           <p>{user.age}</p>
//         </div>

//         <div>
//           <button onClick={() => setSearchParams({ tab: "posts" })}>
//             User posts
//           </button>
//           <button onClick={() => setSearchParams({ tab: "todos" })}>
//             User todos
//           </button>
//         </div>

//         {tab === "posts" && posts.length > 0 && (
//           <div>
//             {todos.map((post) => (
//               <div key={post.id}>
//                 <h3>{post.title}</h3>
//                 <p>{post.body} </p>
//                 <div>Tags {post.tags}</div>
//                 <div>reactions{post.reactions}</div>
//               </div>
//             ))}
//           </div>
//         )}

//         {tab === "todos" && posts.length > 0 && (
//           <div>
//             {todos.map((todo) => (
//               <div key={todo.id}>
//                 <h3>{todo.todo}</h3>
//                 <div>Completed {todo.completed ? "yes" : "no"}</div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default InfoUserPage;