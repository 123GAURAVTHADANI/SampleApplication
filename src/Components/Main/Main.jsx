import { useFetch } from "../../Hooks/useFetch";
import Card from "../Card/Card";
import "./Styles/Main.css";

function Main() {
  const products = useFetch("https://fakestoreapi.com/products");

  return (
    <div className="main__container">
      {products &&
        products.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
    </div>
  );
}
export default Main;