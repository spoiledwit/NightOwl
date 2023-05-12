'use client'

import clsx from 'clsx'
import React from 'react'

interface ButtonProps {
    type: 'button' | 'submit' | 'reset' | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    type,
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled
}) => {

  return (
    <button
    onClick={onClick}
    disabled={disabled}
    type={type}
    className={clsx(
        `
        flex
        justify-center
        rounded-md
        px-3
        py-2
        text-sm
        font-semibold
        focus:visible:outline
        focus:visible:outline-2
        focus:visible:outline-offset-2
        `,
        disabled ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-fuchsia-500 text-white hover:bg-fuchsia-600',
        fullWidth && 'w-full',
        secondary && 'bg-gray-700 text-white hover:bg-gray-600',
        danger && 'bg-rose-500 text-white hover:bg-rose-600',
        !secondary && !danger && !disabled && 'hover:bg-fuchsia-600'
    )}
    >
        {children}
    </button>
    )
}

export default Button;