const dishes = [
  {
    name: "Greek Salad",
    price: "$12.99",
    description: "Fresh greens, tomatoes, olives and feta."
  },
  {
    name: "Bruschetta",
    price: "$7.99",
    description: "Grilled bread with fresh tomatoes and herbs."
  },
  {
    name: "Lemon Dessert",
    price: "$5.99",
    description: "A delicious dessert with a lemon flavor."
  }
];

export default function Specials() {
  return (
    <section className="specials">
      <h2>This week's specials!</h2>

      <div className="dish-grid">
        {dishes.map((dish) => (
          <article className="dish-card" key={dish.name}>
            <h3>{dish.name}</h3>
            <p className="price">{dish.price}</p>
            <p>{dish.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
