import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
    icon?: React.ReactNode;
    title: string;
    description: string;
    className?: string;
}

export const Card: React.FC<CardProps> = ({
    icon,
    title,
    description,
    className,
}) => {
    return (
        <div
            className={cn(
                'rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl',
                className
            )}
        >
            {icon && <div className="mb-4 text-creditai-green">{icon}</div>}
            <h3 className="mb-3 text-xl font-bold text-creditai-gray-900">{title}</h3>
            <p className="text-creditai-gray-600">{description}</p>
        </div>
    );
};
