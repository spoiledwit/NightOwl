'use client'

import clsx from 'clsx';
import React from 'react'
import { IconType } from 'react-icons'

interface AuthSocialButtonProps {
    icon: IconType;
    onClick: () => void;
    disabled?: boolean;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
    icon: Icon,
    onClick,
    disabled = false,
}) => {
  return (
    <button
    type='button'
    onClick={onClick}
    disabled={disabled}
    className={clsx(
      `
    inline-flex
    w-full
    justify-center
    rounded-md
    bg-white
    px-4
    py-2
    text-gray-400
    shadow-sm
    ring-1
    ring-inset
    ring-gray-300
    hover:bg-gray-200
    focus:outline-offset-0
    `, disabled && 'cursor-default opacity-50')}
    >
        <Icon className='text-fuchsia-700' />
    </button>
  )
}

export default AuthSocialButton;