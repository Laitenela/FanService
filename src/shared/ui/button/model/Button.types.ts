type ButtonTypes = "primary" | "test" | "success" | "link";

export type ButtonProps = {
  type: ButtonTypes;
  children: string | JSX.Element | JSX.Element[];
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}