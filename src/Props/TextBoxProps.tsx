import { ChangeEvent } from 'react';

export interface TextBoxProps {
    onTextValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
    textValue: string;
}