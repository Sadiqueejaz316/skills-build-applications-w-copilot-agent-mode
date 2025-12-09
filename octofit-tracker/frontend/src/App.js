

function App() {
  return (
    <Router>
      <nav className="navbar navbar-light bg-light border-bottom mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">Octofit Tracker</Link>
          <div>
            <Link className="mx-2 text-dark text-decoration-none" to="/activities">Activities</Link>
            <Link className="mx-2 text-dark text-decoration-none" to="/leaderboard">Leaderboard</Link>
            <Link className="mx-2 text-dark text-decoration-none" to="/teams">Teams</Link>
            <Link className="mx-2 text-dark text-decoration-none" to="/users">Users</Link>
            <Link className="mx-2 text-dark text-decoration-none" to="/workouts">Workouts</Link>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<div className="d-flex justify-content-center align-items-center" style={{height: '40vh'}}><h2 className="fw-bold">Welcome to Octofit Tracker!</h2></div>} />
        </Routes>
      </div>
    </Router>
  );
}


import logo from '../public/logo192.png';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-light border-bottom mb-4">
        <div className="container-fluid d-flex align-items-center">
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <img src={logo} alt="Octofit Logo" className="App-logo" />
            Octofit Tracker
          </Link>
          <div>
            <Link className="mx-2 text-light text-decoration-none" to="/activities">Activities</Link>
            <Link className="mx-2 text-light text-decoration-none" to="/leaderboard">Leaderboard</Link>
            <Link className="mx-2 text-light text-decoration-none" to="/teams">Teams</Link>
            <Link className="mx-2 text-light text-decoration-none" to="/users">Users</Link>
            <Link className="mx-2 text-light text-decoration-none" to="/workouts">Workouts</Link>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<div className="d-flex justify-content-center align-items-center" style={{height: '40vh'}}><h2 className="fw-bold">Welcome to Octofit Tracker!</h2></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
