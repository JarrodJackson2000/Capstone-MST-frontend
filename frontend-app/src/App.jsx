import "./App.css";
import { UserContextProvider } from "./context/UserContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <UserContextProvider>
        <AppRoutes />
      </UserContextProvider>
    </>
  );
}

export default App;
