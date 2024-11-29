import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
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
        <React.Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
