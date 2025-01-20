const Button = (props) =>{
    console.log(props);
    return <button>{props.name} + {props.age}</button>
}

export default Button;