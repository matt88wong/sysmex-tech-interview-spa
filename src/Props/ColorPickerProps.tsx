import { ChangeEvent } from "react";

export interface ColorPickerProps {
    onPickedColorValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
    pickedColorValue: string;
}