//Content
import TextResources from '../../Content/TextResources.json';

//Props
import { ButtonProps } from "../../Props/ButtonProps";

//Button component
export const Button = (props: ButtonProps) => {
    const { disabled, onClick } = props;

    return (
        <button disabled={disabled} onClick={onClick} type="button">{TextResources.button.title}</button>
    )
}