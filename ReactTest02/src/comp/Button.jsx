const Button = ({text, no, age}) =>{
    const clickButton = (e)=>{
        console.log("clickButton!!");
        console.log(e);
    };
    
    return (
        <button onClick={clickButton}>
            {text} : {no} : {age}
        </button>
    );
};
export default Button;