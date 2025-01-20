const Button2 = (props) => {
  console.log(props);
  return (
    <button>
      {props.info.name} + {props.info.age} + {props.info.addr}
    </button>
  );
};

export default Button2;
