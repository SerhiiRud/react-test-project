import logo from "./logo.svg";
import "./App.css";
import { Profile } from "./Components/Profile/Profile";
import user from "./Components/user.json";
import { Statistics } from "./Components/Statistics/Statistics";
import data from "./Components/data.json";
import { FriendList } from "./Components/FriendList/FriendList";
import friends from "./Components/friends.json";

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
