import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading ...</p>;

  return (
    <div>
      <div>
        {" "}
        {users.map((user) => {
          return (
            <div key={user.id}>
              <Link
                to={`/users/${user.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {user.name}
              </Link>
              <p>{user.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
