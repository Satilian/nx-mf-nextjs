declare module "*.module.css" {
  const styles: { [className: string]: string };
  export = styles;
}

declare module "app1/Cropper" {
  interface IProps {
    dataUrl: string;
    width?: number;
    height?: number;
    onResize?: (dataUrl: string) => void;
  }

  const Cropper: (props: IProps) => JSX.Element;

  export default Cropper;
}

declare module "app1/Button" {
  interface IButtonProps
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    btnType?: string;
    size?: string;
    children?: ReactNode;
  }

  const Button: (props: IButtonProps) => JSX.Element;

  export default Button;
}
