import { PokemonsProvider } from "@context/PokemonsContext";
import Home from "@pages/Home";
import { GlobalStyles } from "@styles/GlobalStyles";

function App() {
  return (
    <PokemonsProvider>
      <Home />
      <GlobalStyles />
    </PokemonsProvider>
  );
}

export default App;
