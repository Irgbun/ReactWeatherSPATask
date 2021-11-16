interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  children: string
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return <button onClick={onClick}>{children}</button>;
  }
  