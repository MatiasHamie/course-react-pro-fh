import { ProductButtons, ProductImage, ProductTitle } from "../components";
import { ProductCard } from "../components/ProductCard";
import "../styles/custom-styles.css";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            key={product.id}
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, productInCart]) => {
          return (
            <ProductCard
              product={productInCart}
              className="bg-dark text-white"
              key={key}
              style={{ width: "100px" }}
              onChange={onProductCountChange}
              value={productInCart.count}
            >
              <ProductImage className="custom-image" />
              <ProductButtons
                className="custom-buttons"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            </ProductCard>
          );
        })}
      </div>

      <div>
        <code>{JSON.stringify(shoppingCart, null, 2)}</code>
      </div>
    </div>
  );
};
