/// <reference types="react" />
declare const border: {
    none: string;
    small: string;
    medium: string;
    full: string;
};
declare const buttonSize: {
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
};

interface ButtonProps {
    label: string;
    backgroundColor?: string;
    color?: string;
    fullWidth?: boolean;
    hover?: string;
    clickColor?: string;
    buttonSize?: keyof typeof buttonSize;
    border?: keyof typeof border;
}

declare function Button({ ...props }: ButtonProps): JSX.Element;

export { Button };
