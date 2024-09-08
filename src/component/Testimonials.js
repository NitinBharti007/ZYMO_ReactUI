import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Sidharth Nair",
    image: "https://placehold.co/100x100",
    text: "This app is a great initiative, it helps people compare the prices and helps us find the best deal. I would like to specially thank Ms. Tanya and Ms. Divya for the customer service they provided me. 👍",
    rating: 5
  },
  {
    name: "Pakhi",
    image: "https://placehold.co/100x100",
    text: "Very convenient to use. I use this app for all my renting requirements. I can easily compare prices for different websites and do not have to waste time searching here and there. Best offers and best deals! Highly recommended",
    rating: 5
  },
  {
    name: "Aastha Pratik",
    image: "https://placehold.co/100x100",
    text: "Reasonable charges and smooth app. I liked the immediate response.",
    rating: 5
  },
  {
    name: "Another Person",
    image: "https://placehold.co/100x100",
    text: "Great app, very user-friendly. The comparison feature is fantastic!",
    rating: 5
  },
  {
    name: "Yet Another Person",
    image: "https://placehold.co/100x100",
    text: "Fantastic service and support. Highly recommend this app!",
    rating: 5
  }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3; // Number of cards to show at once
    const cardWidth = 320; // Width of each card including padding and border
    const gap = 20; // Gap between cards in pixels

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                (prevIndex + 1) % Math.ceil(testimonials.length / itemsToShow)
            );
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <h1 className="text-5xl font-bold mb-4 text-center text-gray-800">What Our Customers Say</h1>
            <p className="text-lg font-medium mb-12 text-center text-gray-600">Here’s how our users feel about our app</p>
            <div className="overflow-hidden w-full">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ 
                        transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
                        width: `${(cardWidth + gap) * testimonials.length - gap}px`
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="bg-gradient-to-b from-purple-500 to-purple-700 text-white p-6 rounded-2xl flex-shrink-0 mx-2"
                            style={{ width: `${cardWidth}px`, boxSizing: 'border-box' }}
                        >
                            <div className="flex items-center mb-4">
                                <img 
                                    src={testimonial.image} 
                                    alt={`yha uske jagh pr kuch bhi ${testimonial.name}`} 
                                    className="w-16 h-16 rounded-full border-4 border-white mr-4 shadow-md" 
                                />
                                <div>
                                    <h2 className="text-xl font-semibold">{testimonial.name}</h2>
                                    <div className="flex mt-1">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <i key={i} className="fas fa-star text-yellow-400 text-lg"></i>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-base">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
