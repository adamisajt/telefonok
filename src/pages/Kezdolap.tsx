import type { Telefon } from "../Telefon";

interface KezdolapProps {
  telefonok: Telefon[];
}

function Kezdolap({ telefonok }: KezdolapProps) {
  return (
    <section>
      <h2 className="mb-3">Telefonok</h2>

      <p>Telefonok szama: {telefonok.length}</p>

      {telefonok.length === 0 && <p>Nincsenek felvett telefonok</p>}

      <div className="row g-3">
        {telefonok.map((telefon, index) => (
          <article className="col-md-6 col-lg-4" key={index}>
            <div className="card telefon-kartya h-100">
              <div className="card-body">
                <h3 className="h5 card-title">{telefon.marka}</h3>

                <p>{telefon.modell}</p>

                <p>Ar: {telefon.ar} Ft</p>

                <span
                  className={
                    telefon.elerheto ? "badge bg-success" : "badge bg-danger"
                  }
                >
                  {telefon.elerheto ? "Elerheto" : "Nem elerheto"}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Kezdolap;
