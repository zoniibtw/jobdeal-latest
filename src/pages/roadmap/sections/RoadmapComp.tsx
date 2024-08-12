import React from 'react';
import { useTranslation } from 'react-i18next';

// Define the type for roadmap items
type RoadmapItem = {
  date: string;
  details: string[];
};

const RoadmapComp: React.FC = () => {
  const { t } = useTranslation(['roadmap']);

  // Use type assertions to ensure the details are treated as arrays of strings
  const roadmapItems: RoadmapItem[] = [
    {
      date: t('one.date'),
      details: t('one.details', { returnObjects: true }) as string[], // Type assertion
    },
    {
      date: t('two.date'),
      details: t('two.details', { returnObjects: true }) as string[], // Type assertion
    },
    {
      date: t('three.date'),
      details: t('three.details', { returnObjects: true }) as string[], // Type assertion
    },
    {
      date: t('four.date'),
      details: t('four.details', { returnObjects: true }) as string[], // Type assertion
    },
    {
      date: t('five.date'),
      details: t('five.details', { returnObjects: true }) as string[], // Type assertion
    },
  ];

  return (
    <div className="container mx-auto pb-20 pt-10">
      <div className="grid md:grid-cols-3 gap-4">
        {roadmapItems.map((item, index) => (
          <div key={index} className="bg-white/5 border border-white/25 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 text-white">{item.date}</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {item.details.map((detail, idx) => (
                <li key={idx} className="mb-1 text-white/75">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapComp;