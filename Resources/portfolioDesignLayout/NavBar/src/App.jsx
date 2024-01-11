import "./App.scss";
import { Navbar } from "./components";
import { ToogleProvider } from "./context/Toogle";
function App() {
  return (
    <>
      <ToogleProvider>
        <Navbar />
      </ToogleProvider>
    </>
  );
}

export default App;
