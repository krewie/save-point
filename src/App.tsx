import Home from "./pages/Home";
import "./App.css";
import "./styles/cards.css"

function App() {
  return (
    <>
      <div className="ps2-stars" aria-hidden="true" />
      <div className="ps2-clouds" aria-hidden="true" />

      <div className="ps2-geometry" aria-hidden="true">
        <span className="ps2-cube ps2-cube--one" />
        <span className="ps2-cube ps2-cube--two" />
        <span className="ps2-cube ps2-cube--three" />
        <span className="ps2-cube ps2-cube--four" />
        <span className="ps2-cube ps2-cube--five" />
        <span className="ps2-cube ps2-cube--six" />
      </div>

      <div className="ps2-screen">
        <header className="ps2-topbar">
          <div className="ps2-logo-dot" />
          <span>save-point / Hidden_Archive</span>
        </header>

        <main>
          <Home />
        </main>

        <footer className="ps2-footer">
          <span>
            <b className="button-circle">○</b> Open
          </span>
          <span>
            <b className="button-cross">×</b> Back
          </span>
        </footer>
      </div>
    </>
  );
}

export default App;