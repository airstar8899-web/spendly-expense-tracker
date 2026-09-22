const Card = ({ children, className = "" }) => {
  return (
    <div className={`rounded-2xl p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;