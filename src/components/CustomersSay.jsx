
const reviews = [
  {
    name: "Alex",
    rating: "★★★★★",
    comment: "Amazing food and friendly service!"
  },
  {
    name: "Jordan",
    rating: "★★★★☆",
    comment: "A lovely place for dinner."
  },
  {
    name: "Taylor",
    rating: "★★★★★",
    comment: "The Mediterranean flavors were delicious."
  }
];




export default function CustomersSay() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>

      <div className="review-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.name}>
            <p>{review.rating}</p>
            <h3>{review.name}</h3>
            <p>{review.comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
}