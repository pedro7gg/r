import { ListaProdutos } from "../componentes/ListaProdutos";
import NavBar from "../componentes/NavBar";

function Produto() {
  return (
    <NavBar>
      <ListaProdutos />
    </NavBar>
  );
}

export { Produto };
