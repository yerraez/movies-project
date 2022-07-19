
import { Create } from "./components/Create";
import { List } from "./components/List";
import Search from "./components/Search";

function App() {
  return (
    <div className="layout">
      {/* Cabecera */}
  <header className="header">
      <div className="logo">
          <div className="play"></div>
      </div>
      <h1> Mis Peliculas</h1>
  </header>
  {/*Barra de navegacion*/}
  <nav className="nav">
      <ul>
          <li><a href="">Inicio</a></li>
          <li><a href="">Peliculas</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contacto</a></li>
      </ul>
  </nav>
  {/*Contenido principal */}
  <section className="content">
    <List />
  </section>
{/*Barra lateral*/}
  <aside className="lateral">
    <Search />
    <Create />
  </aside>
  {/*Pie de pagina */}
  <footer className="footer">
      &copy; Master JavaScript ES12
  </footer>
</div>

  );
}

export default App;
