//Content
import TextResources from '../../Content/TextResources.json';

//Props
import { ShowButtonProps } from "../../Props/ShowButtonProps";

//Show button component
export const ShowButton = (props: ShowButtonProps) => {
    const { disabled, onClick } = props;

    return (
        <button disabled={disabled} onClick={onClick} type="button">{TextResources.showbutton.title}</button>
    )
}