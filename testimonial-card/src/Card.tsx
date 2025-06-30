interface CardProps {
  avatar: string;
  name: string;
  instagram: string;
  description: string;
}

const Card = ({ avatar, name, instagram, description }: CardProps) => {
  return (
    <div className="max-w-[340px] p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start gap-4 mb-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
        <div className="min-w-0">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-sm text-gray-500">{instagram}</p>
        </div>
      </div>

      <p className="text-base leading-relaxed text-gray-700">{description}</p>
    </div>
  );
};

export { Card };
