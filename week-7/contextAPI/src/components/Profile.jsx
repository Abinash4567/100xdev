import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
  <div>
    <h1>Profile</h1>
    {user && <h2>{user.username}</h2>}
  </div>)
}

export default Profile;