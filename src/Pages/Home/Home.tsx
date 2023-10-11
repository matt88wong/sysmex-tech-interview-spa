//Components
import { Button, TextBox } from '../../Components';

//Content
import TextResources from '../../Content/TextResources.json';

//Dependencies
import { ChangeEvent, useState } from 'react';

//Main page for the SPA - renders all the required components together
export const Home = () => {
    const [textValue, setTextValue] = useState('');
    
    //Update the textboxes text value
    const handleTextValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTextValue(e.target.value);
    };

    //Show the required alert box and set the alert to have the textbox text value
    const handleButtonClick = () => {
        alert(textValue);
    }

    return (
        <div>
            {TextResources.home.name}
            {TextResources.home.title}
            <TextBox onTextValueChange={handleTextValueChange} textValue={textValue} />
            <Button disabled={!textValue} onClick={handleButtonClick} />
        </div>
    );
}