import "../styles/testimonialCard.css";
import { BsStarFill, BsStar } from "react-icons/bs";

export default function TestimonialCard({
  item,
}: {
  item: {
    id: number;
    content: string;
    avatar: string;
    client: string;
    position: string;
    rating: number;
  };
}) {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<BsStarFill className="star-icon" key={i} />);
      } else {
        stars.push(<BsStar className="star-icon" key={i} />);
      }
    }
    return stars;
  };
  // ...

  return (
    <div className="testimonial-card">
      <p>
        <i className="bx bxs-quote-a;t-left quote-icon-left"></i>
        {item.content}-
        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
        <i className="stars">{renderStars(item.rating)}</i>
      </p>

      <img src={item.avatar} className="testimonials-img" alt="profile photo" />
      <h3>{item.client}</h3>
      <h4>{item.position}</h4>
    </div>
  );
}
