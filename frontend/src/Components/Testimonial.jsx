import React, { useEffect, useState } from 'react';
import './Testimonial.css';
import r1 from '../assets/image.jpg'
import r2 from '../assets/image.jpg'
import r3 from '../assets/image.jpg'
import r4 from '../assets/image.jpg'

const testimonials = [
  {
    id: 1,
    image: r1,
    name: 'Mr.Subramanyam',
    designation: 'Data Analyst',
    company: 'FLM EduTech',
    feedback: 'The digital solutions provided by VR2tech have transformed our online visibility. The team delivered a robust, scalable platform that significantly improved our user engagement and analytics capabilities.',
  },
  {
    id: 2,
    image: r2,
    name: 'Mrs.Manjula',
    designation: 'Administration',
    company: 'Designer.Web',
    feedback: 'VR2tech helped streamline our marketing campaigns by building efficient, automated systems. Their expertise boosted our lead generation efforts and saved countless hours of manual work.',
  },
  {
    id: 3,
    image: r3,
    name: 'Mr. Shiva Reddy',
    designation: 'Managing Director',
    company: 'VRR COnstructuions',
    feedback: 'Their team built a seamless, responsive web application that exceeded our expectations. The product launch was a success, thanks to the high-performance tech stack implemented by VR2tech.',
  },
  {
    id: 4,
    image: r4,
    name: 'Mr. Shekar Reddy',
    designation: 'Managing Director',
    company: 'Sannidhi Group',
    feedback: 'A smooth experience working with VR2tech. They developed a custom design tool that improved my workflow and saved hours. The user interface is intuitive and the technology is reliable.',
  },
  {
    id: 5,
    image: r1,
    name: 'Mr.Bhargava Reddy',
    designation: 'Director',
    company: 'Gowthami Institutions',
    feedback: 'VR2tech helped scale our startup by building a cutting-edge mobile app that perfectly fits our needs. Their attention to detail and dedication to innovation set them apart in the tech space.',
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change testimonial every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container testimonial-section py-5">
      <div className="testimonial-showcase">
        <h1><span>"What Our Customers Say"</span></h1>
        <p>See how our clients transformed their businesses with our innovative solutions. From improving user experiences to streamlining operations, we've helped them reach their goals. Let their success inspire your next step with us!</p>
      </div>
      <div className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={testimonial.image} alt={`${testimonial.name}`} />
            <p className="feedback">"{testimonial.feedback}"</p>
            <h4><span>{testimonial.name}</span></h4>
            <p className="designation">{testimonial.designation}, {testimonial.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
