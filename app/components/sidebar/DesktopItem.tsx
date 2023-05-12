'use client'

import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { IconType } from 'react-icons'

interface DesktopItemProps {
  label: String,
  Icon: IconType,
  href: String,
  onClick?: () => void,
  active?: boolean
}

const DesktopItem : React.FC<DesktopItemProps> = ({
  label,
  Icon,
  href,
  onClick,
  active
}) => {

  const handleClick = () => {
    if (onClick) {
        return onClick();
    }
  }

  return (
    <li
    onClick={handleClick}
    >
      <Link href={`${href}`}
      className={clsx(`
      group
      flex
      gap-x-3
      rounded-md
      p-3
      text-sm
      leading-6
      font-semibold
      text-fuchsia-400
      hover:text-fuchsia-400
      hover:bg-fuchsia-950
      `, active && `bg-fuchsia-950`)}
      >
      <Icon className='h-6 w-6 shrink-0' />
      <span className='sr-only'>
        {label}
      </span>
      </Link>
    </li>
  )
}

export default DesktopItem;