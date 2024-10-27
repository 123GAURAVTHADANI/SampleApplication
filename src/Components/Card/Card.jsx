import { useNavigate } from "react-router-dom";
import "./Styles/Card.css";
function Card({ item }) {
  const navigate = useNavigate(null);
  const handleChange = (item) => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="card" onClick={async () => await handleChange(item)}>
      <img src={item.image} />
      <h3>{item.title}</h3>
    </div>
  );
}
export default Card;
