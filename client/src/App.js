import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId =
    "416362102082-uie0sstu1kcggg8b628qd7g8fsjoml0v.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
