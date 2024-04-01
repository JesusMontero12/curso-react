import Navbar from "./components/layout/navBar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  const saludoSlogan =
    "Damos la bienvenida a tu nuevo armario. ¡Prepárate para lucir increíble!";
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={saludoSlogan} />
    </div>
  );
}

export default App;
