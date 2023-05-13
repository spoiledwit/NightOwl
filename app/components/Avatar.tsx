'use client'

import { User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import useActiveList from '../hooks/useActiveList'

interface AvatarProps {
    user: User | null
}

const Avatar: React.FC<AvatarProps> = ({
    user
}) => {

  const {members} = useActiveList()
  const isActive = members?.indexOf(user?.id!) !== -1

  return (
    <div
    className='relative'
    >
        <div className='
        relative
        inline-block
        rounded-full
        overflow-hidden
        h-8
        w-8
        md:h-10
        md:w-10
        '>
    <Image 
    alt='avatar'
    fill
    src={user?.image || "/images/Avatar.jpeg"}
    /> 
        </div>
        {isActive && (   <span 
        className='
        absolute
        block
        rounded-full
        bg-fuchsia-500
        ring-2
        ring-white
        top-0
        right-0
        h-2
        w-2
        md:h-3
        md:w-3
        '
        />)}
     
    </div>
  )
}

export default Avatar;