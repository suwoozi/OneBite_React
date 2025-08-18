const Display = ({ currentInput = 0, expression = "" }) => {

    return(
        <div className="display">
            <h2 className="expression">{expression}</h2>
            <h1 className="current">{currentInput}</h1>
        </div>
    );
};

export default Display;