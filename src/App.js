import { RouterProvider } from "react-router-dom";
import AuthProvider from "./contexts/auth-provider";
import router from "./routes/router";

function App() {
  return (
    <div className='w-5/6 mx-auto'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
