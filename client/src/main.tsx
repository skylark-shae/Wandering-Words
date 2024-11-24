import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/Register",
//         element: <Register />,
//       },
//       {
//         path: "/",
//         element: <Home />,
//       },
//     ],
//   },
// ]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
