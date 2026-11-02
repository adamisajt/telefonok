import { useState } from "react";
import type { Telefon } from "../Telefon";

interface AdminProps {
  telefonok: Telefon[];
  setTelefonok: (telefonok: Telefon[]) => void;
}

function Admin({ telefonok, setTelefonok }: AdminProps) {
  const [marka, setMarka] = useState("");
  const [modell, setModell] = useState("");
  const [ar, setAr] = useState("");
  const [elerheto, setElerheto] = useState(true);

  const [szerkesztettIndex, setSzerkesztettIndex] = useState(-1);

  function urlapTorlese() {
    setMarka("");
    setModell("");
    setAr("");
    setElerheto(true);
    setSzerkesztettIndex(-1);
  }

  function mentes() {
    if (marka.trim() === "" || modell.trim() === "" || ar.trim() === "") {
      alert("Mindent mezot ki kene tolteni!!!");
      return;
    }

    if (!Number.isFinite(Number(ar)) || Number(ar) <= 0) {
      alert("Az ar legyen poziziv!!!");
      return;
    }

    const ujTelefon: Telefon = {
      marka: marka.trim(),
      modell: modell.trim(),
      ar: Number(ar),
      elerheto: elerheto,
    };

    if (szerkesztettIndex === -1) {
      setTelefonok([...telefonok, ujTelefon]);
    } else {
      const ujLista = telefonok.map((telefon, index) => {
        if (index === szerkesztettIndex) {
          return ujTelefon;
        }

        return telefon;
      });

      setTelefonok(ujLista);
    }

    urlapTorlese();
  }

  function szerkesztes(index: number) {
    const telefon = telefonok[index];

    setMarka(telefon.marka);
    setModell(telefon.modell);
    setAr(String(telefon.ar));
    setElerheto(telefon.elerheto);
    setSzerkesztettIndex(index);
  }

  function torles(index: number) {
    const biztos = window.confirm("Biztos torolni akarod ezt a telefont?");

    if (!biztos) {
      return;
    }

    const ujLista = telefonok.filter((_, sorszam) => sorszam !== index);

    setTelefonok(ujLista);
    urlapTorlese();
  }

  return (
    <section>
      <h2>Admin oldal</h2>

      <section className="urlap-doboz my-4">
        <h3 className="h4">
          {szerkesztettIndex === -1
            ? "Új telefon felvétele"
            : "Telefon módosítása"}
        </h3>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            mentes();
          }}
        >
          <div className="mb-3">
            <label htmlFor="marka" className="form-label">
              Marka
            </label>

            <input
              id="marka"
              type="text"
              className="form-control"
              value={marka}
              onChange={(event) => setMarka(event.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="modell" className="form-label">
              Modell
            </label>

            <input
              id="modell"
              type="text"
              className="form-control"
              value={modell}
              onChange={(event) => setModell(event.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="ar" className="form-label">
              Ar (Ft)
            </label>

            <input
              id="ar"
              type="number"
              className="form-control"
              min="1"
              step="1"
              value={ar}
              onChange={(event) => setAr(event.target.value)}
              required
            />
          </div>

          <div className="form-check mb-3">
            <input
              id="elerheto"
              type="checkbox"
              className="form-check-input"
              checked={elerheto}
              onChange={(event) => setElerheto(event.target.checked)}
            />

            <label htmlFor="elerheto" className="form-check-label">
              Elerheto
            </label>
          </div>

          <button type="submit" className="btn btn-success me-2">
            {szerkesztettIndex === -1 ? "Hozzáadás" : "Mentés"}
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={urlapTorlese}
          >
            Megse / Urlap torlese
          </button>
        </form>
      </section>

      <h3 className="h4">Telefonok listaja</h3>

      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">Marka</th>
              <th scope="col">Modell</th>
              <th scope="col">Ar</th>
              <th scope="col">Allapot</th>
              <th scope="col">Muveletek</th>
            </tr>
          </thead>

          <tbody>
            {telefonok.map((telefon, index) => (
              <tr key={index}>
                <td>{telefon.marka}</td>
                <td>{telefon.modell}</td>
                <td>{telefon.ar} Ft</td>
                <td>{telefon.elerheto ? "Elerheto" : "Nem elerheto"}</td>

                <td>
                  <div className="d-flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="btn btn-warning btn-sm"
                      onClick={() => szerkesztes(index)}
                    >
                      Modositas
                    </button>

                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => torles(index)}
                    >
                      Torles
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {telefonok.length === 0 && <p>Nincsenek felvett telefonok</p>}
    </section>
  );
}

export default Admin;
