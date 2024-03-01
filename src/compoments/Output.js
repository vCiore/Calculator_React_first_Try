const Output = ({output, calculatorButtons, onOutput, onReset}) => {

    return (
        <div>
            <h2 className='result'>{output}</h2>

            <div className='calculator'>

                {calculatorButtons.map((el, index) =>
                    <button
                        className='input'
                        key={index}
                        onClick={() => onOutput(index)}
                    >
                        {el}

                    </button>
                )
                }

                <button
                    className='reset'
                    onClick={onReset}
                > C
                </button>

            </div>
        </div>
    )
}

export default Output;