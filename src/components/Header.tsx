interface HeaderProps {
  oldal: string;
  setOldal: (oldal: string) => void;
}

function Header({ oldal, setOldal }: HeaderProps) {
  return (
    <header className="bg-dark text-white p-4">
      <div className="container">
        <h1>Telefonok</h1>

        <nav className="d-flex flex-wrap gap-2" aria-label="Fomenu">
          <button
            type="button"
            className={
              oldal === "kezdolap" ? "btn btn-light" : "btn btn-outline-light"
            }
            onClick={() => setOldal("kezdolap")}
          >
            Kezdolap
          </button>

          <button
            type="button"
            className={
              oldal === "admin" ? "btn btn-light" : "btn btn-outline-light"
            }
            onClick={() => setOldal("admin")}
          >
            Admin
          </button>

          <button
            type="button"
            className={
              oldal === "moderator" ? "btn btn-light" : "btn btn-outline-light"
            }
            onClick={() => setOldal("moderator")}
          >
            Moderator
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
