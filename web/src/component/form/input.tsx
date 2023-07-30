import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      autoComplete='off'
      className='bg-zinc-900 py-3 px-4 rounded placeholder:text-sm placeholder:text-zinc-500'
    />
  );
}
