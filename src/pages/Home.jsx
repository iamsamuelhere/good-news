import AddEvent from "../components/modals/AddEvent";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
const Home = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          variant="outlined"
          style={{
            fontSize: "1.2em",
            padding: "0.5em",
            backgroundColor: "#fafbfb",
            margin: "0.5em",
            textAlign: "center",
          }}
        >
          Dear, child of God!!
        </Card>
      </div>

      <Paper
        elevation={1}
        style={{
          height: "70vh",
          padding: "1em",
          margin: "1em",
          overflowY: "scroll",
        }}
      >
        <AddEvent />
      </Paper>
    </>
  );
};

export default Home;
