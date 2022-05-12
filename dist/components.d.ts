declare const border: {
    none: string;
    small: string;
    medium: string;
    full: string;
};
interface ButtonProps {
    label: string;
    border?: keyof typeof border;
    fullWidth?: boolean;
    size?: "small" | "xsmall" | "medium" | "large" | "xlarge";
    variant?: "primary" | "secondary" | "tertiary";
}
declare function Button({ label, fullWidth, ...props }: ButtonProps): JSX.Element;
declare namespace Button {
    var defaultProps: {
        variant: string;
        border: string;
        size: string;
    };
}

export { Button };
