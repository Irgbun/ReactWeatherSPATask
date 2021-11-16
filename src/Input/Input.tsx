interface InputProps {
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />;
}