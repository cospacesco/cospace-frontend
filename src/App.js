import Landing from "./components/Landing";
import Sidebar from "./components/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Dashboard from "./components/Dashboard";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles;
  return (
    <>
      {/* <Sidebar /> */}
      {/* <Landing /> */}
      {/* <h1>Hello</h1> */}

      <Dashboard />
    </>
  );
}

export default App;
