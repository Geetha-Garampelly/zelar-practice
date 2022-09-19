import Login from "../login page";
import Homepage from "../Home Page";
import { Logout } from "@mui/icons-material";

const AppRoutes = () => {
    const { theme } = useContext(UIContext);
  
    return (
      <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/login" element={<Login />} />
              <Route
                exact
                path="/"
                element={
                  <PrivateRoute>
                    <Homepage />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/loginpage"
                element={<Logout type="" />}
              />
              <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>
      </BrowserRouter>
    );
  };
  
  export default AppRoutes;