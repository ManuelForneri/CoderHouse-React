import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTqhJpBzpxehvWps6yCY4PJ86Th6X_CK8",
  authDomain: "el-abuelo-tessore.firebaseapp.com",
  projectId: "el-abuelo-tessore",
  storageBucket: "el-abuelo-tessore.appspot.com",
  messagingSenderId: "378216248262",
  appId: "1:378216248262:web:efc81fe40283ab45d638c7",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
