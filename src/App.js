import Container from "./components/Container";
import Home from "./views/Home";
import Info from "./views/Info";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container>
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="character/:characterId" element={<Info />} />
      </Routes>
    </Container>
  );
}

export default App;
