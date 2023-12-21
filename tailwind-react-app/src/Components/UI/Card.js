const Card = (props) => {
  return (
    <div className="p-6 w-1/2 h-fit m-3 bg-white rounded-xl shadow-lg flex items-center space-x-4">
      {props.children}
    </div>
  );
};

export default Card;
