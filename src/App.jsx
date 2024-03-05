import Header from "./layout/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  const isAuthenticated = true;
  const user = {
    username: "John Doe",
    email: "",
  };
  return (
    <>
      <Router>
        <Header isAuthenticated={isAuthenticated} user={user} />
        <Routes>
          {/* Routes go here */}
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App