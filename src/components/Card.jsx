const Card = ({ title, description }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
