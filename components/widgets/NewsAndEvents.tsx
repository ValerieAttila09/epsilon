import React from 'react';
import { newsData } from '@/lib/constants';
import { eventsData } from '@/lib/constants';

const NewsAndEvents: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* News Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{newsData.title}</h2>
            <div className="space-y-6">
              {newsData.items.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <a href={item.button.href} className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                    {item.button.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{eventsData.title}</h2>
            <div className="space-y-6">
              {eventsData.items.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <a href={item.button.href} className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                    {item.button.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndEvents;
