'use client'

import React from 'react'
import clsx from 'clsx'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
  label: string;
  id: string;
  type: string;
  required: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled
}) => {
  return (
    <div>
      <label 
      className='
      block
      text-sm
      font-medium
      leading-6
      text-white
      '
      htmlFor={id}>
        {label}
      </label>
      <div
      className='
      mt-2'
      >
        <input type={type} id={id} autoComplete={id} 
        disabled={disabled}
        {...register(id, {required})}
        className={clsx(
          `form-input
          block
          w-full
          rounded-md
          border-0
          bg-fuchsia-900
          py-1.5
          text-gray-100
          shadow-sm
          ring-inset
          placeholder:text-gray-400
          focus:ring-2
          focus:ring-inset
          focus:ring-fuchsia-700
          outline-none
          focus:outline-none
          sm:text-sm
          sm:leading-6
          `, errors[id] && `focus:ring-rose-500`,
          disabled && `opacity-50 cursor-default`
        )}
        />
      </div>
    </div>
  )
}

export default Input;