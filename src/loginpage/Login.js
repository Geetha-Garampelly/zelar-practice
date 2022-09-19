import {useState} from "react";
import {createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "./firebase";
import { Box } from "@mui/system";
function App() {
  const [Email,setEmail] = useState("");
  const [password, setpassword] = useState("");
  // const [emailError, setEmailError] = useState('');
  const loginpage = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, Email,password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Box className="App">
      <header className="App-header">
       <Box>
        <h3>Login page</h3>
        <input type="text" placeholder="email" onChange={(event) =>{
          setEmail(event.target.value);
        }} /><br></br><br></br>
        <input type="password" placeholder="password" onChange={(event) => {
          setpassword(event.target.value); }}/><br/><br />
        <button>submit</button>
       </Box>
      </header>
    </Box>
  );
}
export default App;
