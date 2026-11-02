import { useState } from "react";
import type { Telefon } from "./Telefon";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Kezdolap from "./pages/Kezdolap";
import Admin from "./pages/Admin";
import Moderator from "./pages/Moderator";

import "./App.css";

function App() {
  const [oldal, setOldal] = useState("kezdolap");

  const [telefonok, setTelefonok] = useState<Telefon[]>([
    {
      marka: "Samsung",
      modell: "Galaxy A55",
      ar: 150000,
      elerheto: true,
    },
    {
      marka: "Apple",
      modell: "iPhone 15",
      ar: 300000,
      elerheto: true,
    },
    {
      marka: "Xiaomi",
      modell: "Redmi Note 13",
      ar: 85000,
      elerheto: false,
    },
    {
      marka: "Google",
      modell: "Pixel 8",
      ar: 220000,
      elerheto: true,
    },
    {
      marka: "Motorola",
      modell: "Moto G54",
      ar: 70000,
      elerheto: false,
    },
  ]);

  return (
    <div className="alkalmazas">
      <Header oldal={oldal} setOldal={setOldal} />

      <main className="container my-4">
        {oldal === "kezdolap" && <Kezdolap telefonok={telefonok} />}

        {oldal === "admin" && (
          <Admin telefonok={telefonok} setTelefonok={setTelefonok} />
        )}

        {oldal === "moderator" && (
          <Moderator telefonok={telefonok} setTelefonok={setTelefonok} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
