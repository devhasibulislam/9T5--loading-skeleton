import "./App.css";
import { useEffect, useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import UserCard from "./components/UserCard";
import SkeletonCard from "./components/SkeletonCard";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://randomuser.me/api/?results=20")
        .then((request) => request.json())
        .then((response) => {
          setUsers(response?.results);
          setLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="App container py-5">
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <div className="display-1 bg-primary p-5 rounded text-light text-center mb-5">
          List of users
        </div>
        <div className="mt-5 ">
          <div
            className="row justify-content-center px-lg-0 px-md-0 px-2"
            style={{ gap: "1rem" }}
          >
            {loading && <SkeletonCard size={20} />}
            {users?.map(
              (
                {
                  gender,
                  name: { title, first, last },
                  email,
                  phone,
                  picture: { large },
                },
                index
              ) => (
                <UserCard
                  key={index}
                  gender={gender}
                  title={title}
                  first={first}
                  last={last}
                  email={email}
                  phone={phone}
                  large={large}
                />
              )
            )}
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
}

export default App;
