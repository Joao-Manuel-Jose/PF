import React, { ReactNode } from 'react';

interface BadgeProps {
  icon: ReactNode;
  count: number;
}

const Badge: React.FC<BadgeProps> = ({ icon, count }) => {
  return (
    <div className="relative inline-block">
      {/* Ícone */}
      <span className="inline-block relative">
        {icon}

        {/* Badge */}
        {count > 0 && (
          <span className="absolute top-0 right-0  font-extrabold text-white  bg-red-500" style={{
            fontSize:'10px',
            borderRadius:'50%',
            paddingInline:'4px'
          }}>
            {count}
          </span>
        )}
      </span>
    </div>
  );
};

export default Badge;
