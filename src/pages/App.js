import "./App.css";
import NavigationBar from "../components/Navbar/NavigationBar";
import Intro from "../pages/home/Intro";
import Terpopuler from "../components/Terpopuler";
import Internasional from "../components/Internasional";

import "../style/Landingpage.css";

function App() {
  return (
    <div>
      {/*intro section*/}
      <div className="BG">
        <NavigationBar />
        <Intro />
      </div>
      {/*end section*/}
      <div className="Terpopuler">
        <Terpopuler />
        <div className="Internasional">
          <Internasional />
        </div>
      </div>
    </div>
  );
}

export default App;
