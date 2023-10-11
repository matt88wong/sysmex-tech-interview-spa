//Content
import TextResources from '../../Content/TextResources.json';

//CSS
import '../../CSS/Components/TextBox.css';

//Props
import { TextBoxProps } from '../../Props/TextBoxProps';

//Allows a user to type in a text value and returns the text value via callbacks
export const TextBox = (props: TextBoxProps) => {
    const { onTextValueChange, textColor, textValue} = props;

    return (
        <div className='TextBox-Container'>
            <h1>{TextResources.textbox.title}</h1>
            <input className='TextBox' onChange={onTextValueChange} placeholder={TextResources.textbox.placeholder} style={{color: textColor}} type="text" value={textValue}/>
        </div>
    );
};