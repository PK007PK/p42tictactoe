const Square = ({ value, onClickEvent }) => {
  return (
    <button onClick={onClickEvent} className="square">
      {value}
    </button>
  );
};

export default Square;
