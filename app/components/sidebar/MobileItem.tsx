'use client'
import React from 'react'
import { IconType } from 'react-icons'
import clsx from 'clsx'
import Link from 'next/link'

interface MobileItemProps {
    label:string,
    onClick?: ()=>void,
    active: boolean | undefined,
    href:string,
    Icon:IconType
}

const MobileItem: React.FC<MobileItemProps> = ({
    label,
    onClick,
    active,
    href,
    Icon
}) => {

    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    }

  return (
    <Link
    href={`${href}`}
    onClick={handleClick}
    className={clsx(`
    group
    flex
    gap-x-3
    text-sm
    leading-6
    font-semibold
    w-full
    justify-center
    p-4
    text-gray-500
    hover:text-black
    hover:bg-gray-100
    `, active && `bg-gray-100 text-black`)}
    >
    <Icon className='h-6 w-6'/>
    </Link>
  )
}

export default MobileItem;