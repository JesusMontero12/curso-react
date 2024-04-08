import Layout from "./components/layout/Layout";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  const saludoSlogan =
    "Damos la bienvenida a tu nuevo armario. ¡Prepárate para lucir increíble!";
  return (
    <>
      <Layout>
        <ItemListContainer greeting={saludoSlogan} />
      </Layout>
    </>
  );
}

export default App;
