import React from 'react';

// Import specific icon libraries from react-icons
import { TbCertificate2, TbYoga } from 'react-icons/tb';
import { RiCalendarScheduleLine } from 'react-icons/ri';

function HomeIntroCards({ icon, content }) {
  const iconMap = {
    TbCertificate2: TbCertificate2,
    TbYoga: TbYoga,
    RiCalendarScheduleLine: RiCalendarScheduleLine
  };

  const IconComponent = iconMap[icon];

  return (
    <div className="flex items-center space-x-4 p-4 border rounded-md shadow-md">
      <div className="text-4xl text-primary">
        {/* Render the dynamically imported icon */}
        {IconComponent ? <IconComponent /> : null}
      </div>
      <div className="text-lg font-medium">
        {/* Display the content */}
        {content}
      </div>
    </div>
  );
}

export default HomeIntroCards;
