import { Link } from "react-router-dom";
import product from "../data";

const Products = () => {
  return (
    <section className="section">
      <div className="products">
        {product.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
