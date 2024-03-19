import "../styles/testimonialCard.css";

export default function TestimonialCard({
  item,
}: {
  item: {
    id: number;
    content: string;
    avatar: string;
    client: string;
    position: string;
  };

  // ...
}) {
  return (
    <div className="testimonial-card">
      <p>
        <i className="bx bxs-quote-a;t-left quote-icon-left"></i>
        {item.content}
        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
      </p>

      <img src={item.avatar} className="testimonials-img" alt="profile photo" />
      <h3>{item.client}</h3>
      <h4>{item.position}</h4>
    </div>
  );
}
