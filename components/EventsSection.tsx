import React from 'react';
import { eventsData } from '../lib/constants';

const EventsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Events</h2>
        <div className="max-w-4xl mx-auto">
          {eventsData.items.map((item, index) => (
            <div key={index} className="border-t border-gray-200 py-8">
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <a href={item.button.href} className="text-blue-600 font-bold hover:underline">
                {item.button.label}
              </a>
            </div>
          ))}
          <div className="text-center mt-12">
            <button className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300">
              View All Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
