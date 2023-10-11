//Content
import TextResources from '../../Content/TextResources.json';

//CSS
import '../../CSS/Components/ColorPicker.css';

//Props
import { ColorPickerProps } from '../../Props/ColorPickerProps';

//Picks a color and returns a string value via callbacks
export const ColorPicker = (props: ColorPickerProps) => {
    const { onPickedColorValueChange, pickedColorValue } = props;

    return (
        <div className="ColorPicker-Container">
            <h1>{TextResources.colorpicker.title}</h1>
            <input className="ColorPicker" onChange={onPickedColorValueChange} type="color" value={pickedColorValue}/>
        </div>
    );
}