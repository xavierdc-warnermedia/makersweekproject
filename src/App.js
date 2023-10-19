import "./App.css";
import LiveStream from "./components/LiveStream/LiveStream";
import ControlButtons from "./components/ControlButtons/ControlButtons";

const appToken = "2ULyDIrOljSrEruubMzX4z";
const api = `https://app.singular.live/apiv2/controlapps/${appToken}/control`;
const subCompositionId = {Banner: '396e4376-fab0-c797-0403-9308c845623f', Bug: '-Nh3SfriIYTRtIqEW6LQ'};
const controlNodeId = ['Banner', 'Bug'];

function App() {
  return (
    <div className="App">
      <LiveStream />
      <ControlButtons api={api} subCompId={subCompositionId} controlNodeId={controlNodeId} />
    </div>
  );
}

export default App;
