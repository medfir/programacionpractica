import { Link } from "wouter";
export default function Header() {
  return (
    <div className="Header">
      <Link className="Opcion" href="/">
        Inicio :D
      </Link>
      <Link className="Opcion" href="/nueva">
        Nueva persona (U.U)
      </Link>
      <Link className="Opcion" href="/listado">
        Listado (X.X)
      </Link>
    </div>
  );
}
