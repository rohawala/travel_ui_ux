'use client';

import Image from 'next/image';
import React from 'react';

interface Tour {
  id: string;
  title: string;
  mediaUrl: string;
  duration: string;
  difficulty: string;
  groupSize: string;
  isVideo?: boolean;
}

const tours: Tour[] = [
  {
    id: 'hassan2',
    title: 'Hassan II Mosque Tour',
    mediaUrl: 'https://www.youtube.com/embed/7P8G1UnJDtQ?autoplay=1&mute=1&loop=1&playlist=7P8G1UnJDtQ',
    duration: '5 Days',
    difficulty: 'Easy',
    groupSize: '2 – 12 People',
    isVideo: true,
  },
  {
    id: 'sahara',
    title: 'Sahara Camel Trek',
    mediaUrl: '/sahara.webp',
    duration: '3 Days',
    difficulty: 'Medium',
    groupSize: '2 – 8 People',
  },
  {
    id: 'sahara2',
    title: 'Desert Camel Experience',
    mediaUrl: '/sahara2.webp',
    duration: '4 Days',
    difficulty: 'Medium',
    groupSize: '2 – 10 People',
  },
  {
    id: 'aitbenhaddou',
    title: 'Aït Benhaddou Adventure',
    mediaUrl: '/image4.jpg',
    duration: '2 Days',
    difficulty: 'Easy',
    groupSize: '2 – 6 People',
  },
];

export default function Camp() {
  return (
    <section className="w-full py-16 px-4">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
        Special Group Tours
      </h2>
      <div className="flex flex-col gap-12 max-w-6xl mx-auto">
        {tours.map((t, i) => (
          <div
            key={t.id}
            className={`flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg overflow-hidden ${
              i % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between">
              <h3 className="text-2xl font-semibold text-gray-900">{t.title}</h3>
              <div className="mt-6 space-y-4 text-gray-700">
                <Feature iconPath="M8 7V3m8 4V3m-9 8h10m-10 4h10m-3 4h3m-8 0h3">
                  Duration: {t.duration}
                </Feature>
                <Feature iconPath="M12 6v6l4 2">Difficulty: {t.difficulty}</Feature>
                <Feature iconPath="M17 20h5V8H2v12h5M12 10a4 4 0 100-8 4 4 0 000 8z">
                  Group Size: {t.groupSize}
                </Feature>
              </div>
              <button className="mt-6 self-start bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                View Details →
              </button>
            </div>

            <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
              {t.isVideo ? (
                <iframe
                  src={t.mediaUrl}
                  title={t.title}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <Image src={t.mediaUrl} alt={t.title} fill className="object-cover" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Feature({ iconPath, children }: { iconPath: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d={iconPath} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{children}</span>
    </div>
  );
}
