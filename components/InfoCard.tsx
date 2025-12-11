import React from 'react';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white p-6 rounded-xl border border-gray-200 shadow-sm ${className}`}>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default InfoCard;
