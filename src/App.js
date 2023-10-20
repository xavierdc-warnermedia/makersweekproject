import "./App.css";
import LiveStream from "./components/LiveStream/LiveStream";
import ControlButtons from "./components/ControlButtons/ControlButtons";

const appToken = "2ULyDIrOljSrEruubMzX4z";
const api = `https://app.singular.live/apiv2/controlapps/${appToken}/control`;
const subCompositionId = {Banner: '396e4376-fab0-c797-0403-9308c845623f', Bug: '-Nh3SfriIYTRtIqEW6LQ'};
const controlNodeId = ['Banner', 'Bug'];

const SingularAddress = 'https://app.singular.live/output/3GF39ozicKphl7iXF57QkC/Output?aspect=16:9';
const liveStreamAddress = 'https://fave.api.cnn.io/v1/demo/?mediumId=livec76319f599742ab668c8b3ba6dcfed3ce7e817ad&mediumEnvironment=prod&isLive=true';


function App() {
  return (
    <div className="App">
      <LiveStream SingularAddress={SingularAddress} liveStreamAddress={liveStreamAddress} />
      {/* <ControlButtons api={api} subCompId={subCompositionId} controlNodeId={controlNodeId} /> */}
    </div>
  );
}

export default App;
