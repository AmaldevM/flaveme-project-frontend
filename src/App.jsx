import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import bgImage from "./assets/5.jpg";


const bgStyle = {
  backgroundImage: `url(${bgImage})`,
  minHeight: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function App() {
  return (
    <div style={bgStyle} className="overflow-x-hidden">
       <div className="min-h-screen bg-white/10 backdrop-blur-3xl">
       <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
