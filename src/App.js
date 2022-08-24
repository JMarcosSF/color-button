import { useState } from 'react';

export const replaceCamelWithSpaces =(colorName) => {
    return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
    const [buttonColor, setButtonColor] = useState('red');
    const [buttonIsEnabled, setButtonIsEnabled] = useState(true);
    const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

    const toggleColorButtonCheckbox = () => {
        setButtonIsEnabled(!buttonIsEnabled);
        setButtonColor('gray');
    }

    return (
        <div>
            <button
                style={{ backgroundColor: !buttonIsEnabled ? 'gray' : buttonColor }}
                onClick={() => setButtonColor(newButtonColor)}
                disabled={!buttonIsEnabled}
            >
                Change to {newButtonColor}
            </button>
            <br />
            <input type="checkbox" onChange={toggleColorButtonCheckbox} id="disable-button-checkbox" />
            <label htmlFor="disable-button-checkbox" >Disable button</label>
        </div>
    );
}

export default App;