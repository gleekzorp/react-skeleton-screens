const { default: Articles } = require("./components/articles");
const { default: UserDetails } = require("./components/user-details");

function App() {
  return (
    <div className="App">
      <header>
        <div>Skeletons</div>
      </header>
      <div className="content">
        <Articles />
        <UserDetails />
      </div>
    </div>
  );
}

export default App;
