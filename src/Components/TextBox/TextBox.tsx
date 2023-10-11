//Content
import TextResources from '../../Content/TextResources.json';

//CSS
import '../../CSS/Components/TextBox.css';

//Props
import { TextBoxProps } from '../../Props/TextBoxProps';

//TextBox component
export const TextBox = (props: TextBoxProps) => {
    const { onTextValueChange, textValue} = props;

    //Put style prop on input tag with value as textbox colour prop thang
    return (
        <div className='TextBox-Container'>
            <h1>{TextResources.textbox.title}</h1>
            <input className='TextBox' name="TextBox" id="TextBox" onChange={onTextValueChange} placeholder={TextResources.textbox.placeholder} type="text" value={textValue}/>
        </div>
    );
};