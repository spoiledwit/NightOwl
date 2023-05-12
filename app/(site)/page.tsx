import React from 'react'
import AuthForm from './components/AuthForm';
import {GiOwl} from 'react-icons/gi';

const Home = () => {
    return (
        <div className='
    flex
    min-h-full
    flex-col
    justify-center
    py-12
    sm:px-6
    lg:px-8
    bg-bgClr'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <GiOwl className='mx-auto w-auto h-20 text-fuchsia-500' />
                <h2
                    className='text-center mt-4 text-3xl font-bold tracking-tight text-gray-100'
                >
                    Enter the 
                    {` `}
                    <span className='text-fuchsia-500'>
                    twilight    
                    </span>
                </h2>

                <AuthForm />
            </div>
        </div>
    )
}

export default Home;