//import logo from "./logo.svg";
import "./App.css";
import { Profile } from "./Components/Profile/Profile";
import user from "./Components/user.json";
import { Statistics } from "./Components/Statistics/Statistics";
import data from "./Components/data.json";
import { FriendList } from "./Components/FriendList/FriendList";
import friends from "./Components/friends.json";
import { Transactions } from "./Components/Transactions/Transactions";
import data1 from "./Components/transactions.json";

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
      <Transactions items={data1} />
    </div>
  );
}

export default App;
