const Button = ({ children, text, color = "black" }) => {

    // 이벤트 객체
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    }

    return (
    <button    
        onClick={() => {
            console.log(text);
        }}
        style={{ color: color }}
    >
        {text} - {color}
        {children}
    </button>
    );
}

export default Button;