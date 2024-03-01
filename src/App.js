import './App.css';
import {useState} from "react";
import Title from "./compoments/Title";
import Output from "./compoments/Output";
import EqualButton from "./compoments/EqualButton";

function App() {

    const calculatorButtons = ['0', '1', '+', 'x^y', '2', '3', '-', '√x', '4', '5', '*', '1/x', '6', '7', '/', 'x^2', '8', '9', 'lnx']

    const operationsTwoArguments = ['+', '-', 'x^y','*', '/', '=']

    const operationsOneArgument = ['√x', '1/x', 'x^2' ,'lnx']

    const [number, setNumber] = useState('')

    const [result, setResult] = useState('')

    const [output, setOutput] = useState('')

    const [meetOperation, setMeetOperation] = useState(false)

    const [operation, setOperation] = useState('')

    //const [newCalculus, setNewCalculus] = useState(false)


    const handleOutput = (indexButton) => {

        const value = calculatorButtons[indexButton]

        console.log(value)



        if (!meetOperation) {

            if (!operationsTwoArguments.includes(value) && !operationsOneArgument.includes(value)) {

                setResult(prevResult => prevResult + value)
                setOutput(output + value)

            } else if (operationsTwoArguments.includes(value)) {

                setMeetOperation(true)
                setOperation(value)
                setOutput(() => value !== 'x^y' ? output + value : output + '^')

            } else if (operationsOneArgument.includes(value)) {

                if (value === '√x') {
                    setOutput(Math.sqrt(Number(result)));
                }
                if (value === '1/x') {
                    setOutput(1/Number(result));
                }
                if (value === 'x^2') {
                    setOutput((Number(result))**2);
                }
                if (value === 'lnx') {
                    setOutput(Math.log(Number(result)));
                }

            }
        }

        if (meetOperation) {


            if (!operationsTwoArguments.includes(value)) {

                setNumber(prevNumber => prevNumber + value)
                setOutput(output + value)

            }
        }

    }

    const handleEqual = (index) => {

        console.log(index)
        if (operation === '+') {

            setOutput(Number(result) + Number(number))
        }

        if (operation === '-') {

            setOutput(Number(result) - Number(number))
        }

        if (operation === '*') {

            setOutput(Number(result) * Number(number))
        }

        if (operation === 'x^y') {

            setOutput(Number(result) ** Number(number))
        }

        if (operation === '/') {
            if (number !== '0') {

                setOutput(Number(result) / Number(number))

            } else {

                setOutput('Can\'t divide by 0')
            }
        }

    }

    const handleReset = () => {
        setOutput('')
        setResult('')
        setOperation('')
        setNumber('')
        setMeetOperation(false)
    }

    return (
        <div className="App">

            <Title/>

            <Output
                output={output}
                calculatorButtons={calculatorButtons}
                onOutput={handleOutput}
                onReset={handleReset}
            />

            <EqualButton
                onCalculation={handleEqual}
            />

        </div>
    );
}

export default App;
