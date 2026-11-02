import type { Telefon } from "../Telefon";

interface ModeratorProps {
  telefonok: Telefon[];
  setTelefonok: (telefonok: Telefon[]) => void;
}

function Moderator({ telefonok, setTelefonok }: ModeratorProps) {
  function allapotValtas(index: number) {
    const ujLista = telefonok.map((telefon, sorszam) => {
      if (sorszam === index) {
        return {
          ...telefon,
          elerheto: !telefon.elerheto,
        };
      }

      return telefon;
    });

    setTelefonok(ujLista);
  }

  return (
    <section>
      <h2>Moderatori oldal</h2>

      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">Marka</th>
              <th scope="col">Modell</th>
              <th scope="col">Ar</th>
              <th scope="col">Allapot</th>
              <th scope="col">Muvelet</th>
            </tr>
          </thead>

          <tbody>
            {telefonok.map((telefon, index) => (
              <tr key={index}>
                <td>{telefon.marka}</td>
                <td>{telefon.modell}</td>
                <td>{telefon.ar} Ft</td>

                <td>
                  <span
                    className={
                      telefon.elerheto ? "badge bg-success" : "badge bg-danger"
                    }
                  >
                    {telefon.elerheto ? "Elerheto" : "Nem elerheto"}
                  </span>
                </td>

                <td>
                  <button
                    type="button"
                    className={
                      telefon.elerheto
                        ? "btn btn-danger btn-sm"
                        : "btn btn-success btn-sm"
                    }
                    onClick={() => allapotValtas(index)}
                  >
                    {telefon.elerheto ? "Nem elerheto" : "Elerheto"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {telefonok.length === 0 && <p>Nincs felvett telefon</p>}
    </section>
  );
}

export default Moderator;
