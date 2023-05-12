'use client'
import Avatar from '@/app/components/Avatar';
import { User } from '@prisma/client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react'

interface UserBoxProps {
    data: User;
}

const UserBox: React.FC<UserBoxProps> = ({
    data
}) => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    
    const handleClick = useCallback(()=>{
        setIsLoading(true);
        axios.post('/api/conversations',{
            userId: data.id
        }).then((res)=>{
            router.push(`/conversations/${res.data.id}`);
        })
        .catch((err)=>{})
        .finally(()=>{
            setIsLoading(false);
        })
    }, [data, router])

  return (
    <div
    onClick={handleClick}
    className='
    w-full
    relative
    flex
    items-center
    space-x-3
    mt-2
    p-3
    hover:bg-fuchsia-950
    cursor-pointer
    transition
    duration-100
    ease-in-out
    rounded-lg
    '
>
    <Avatar 
    user={data}
    />
    <div
    className='
    min-w-0 flex-1
    '
    >
        <div className='
        focus:outline-none
        '>
            <div
            className='
            flex
            justify-between
            items-center
            mb-1
            '
            >
                <p className='
                text-sm
                font-medium
                text-fuchsia-100
                truncate
                '>
                    {data.name}
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default UserBox