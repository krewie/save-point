import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="desktop-window">
        <div className="desktop-window__titlebar">
          <span className="desktop-window__title">SAVE-POINT</span>

          <div className="desktop-window__controls">
            <span className="ps-control ps-control--triangle">△</span>
            <span className="ps-control ps-control--circle">○</span>
            <span className="ps-control ps-control--cross">×</span>
            <span className="ps-control ps-control--square">□</span>
          </div>
        </div>

        <div className="desktop-window__body">
          <header className="site-header">
            <p className="site-kicker">日本語メディア学習アーカイブ</p>
            <h1>SAVE-POINT</h1>
            <p className="site-subtitle">
              My Japanese media study archive.
            </p>
          </header>

          <main>
            <Home />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;