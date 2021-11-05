import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    const teamsLinks =
      "https://teams.microsoft.com/l/meetup-join/19%3Ameeting_ODg1NWE2ZDEtMTViYS00OWRlLTkzMzYtZjY4NThjMDllYmJh%40thread.v2/0?context=%7B%22Tid%22%3A%2224fe244f-890e-46ef-be2f-a5202976b7a5%22%2C%22Oid%22%3A%22d40d32e0-7e94-47ed-b180-38b34e53c496%22%2C%22MessageId%22%3A%220%22%7D";

    if (window.location.pathname === "/teams") {
      window.location.href = teamsLinks;
    }
    return (
      <>
        <div className="App">
          <header className="App-header">Redirecting...</header>
        </div>
      </>
    );
  }
}

export default App;
