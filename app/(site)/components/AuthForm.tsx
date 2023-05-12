'use client'

import Button from '@/app/components/Button';
import Input from '@/app/components/inputs/Input';
import React, { useCallback, useEffect, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import AuthSocialButton from './AuthSocialButton';
import { BsGithub, BsGoogle } from "react-icons/bs"
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { signIn } from "next-auth/react"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const AuthForm = () => {

    type Variant = 'login' | 'register';
    const [variant, setVariant] = useState<Variant>('login');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session?.user) {
          router.push('/users');   
        }
    }, [session])

    const toggleVariant = useCallback(() => {
        if (variant === 'login') {
            setVariant('register');
        }
        else {
            setVariant("login")
        }
    }, [variant]);

    const { register, handleSubmit, formState: {
        errors,
    } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);
        if (variant === "register") {
            await axios.post('/api/register', data)
                .then(async () => {
                    await signIn('credentials', {
                        redirect: false,
                        ...data,
                    })
                })
                .catch((err: any) => {
                    toast.error(`Uh-oh! Nighttime glitch. Let's fix that`, {
                        style: {
                            background: '#1f2937',
                            color: '#fff',
                        },
                    });
                }).finally(() => {
                    setIsLoading(false);
                })
        }
        else {
            await signIn('credentials', {
                redirect: false,
                ...data,
            })
                .then((res: any) => {
                    if (res?.error) {
                        toast.error(`Uh-oh! Wrong login details.`, {
                            style: {
                                background: '#1f2937',
                                color: '#fff',
                            },
                        });
                    }
                    if (res?.ok && !res?.error) {
                        toast.success(`Welcome back!`, {
                            style: {
                                background: '#1f2937',
                                color: '#fff',
                            },
                        });
                        router.push("/users");
                    }
                }).finally(() => {
                    setIsLoading(false);
                })
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);
        signIn(action, {
            redirect: false,
        })
            .then((res: any) => {
                if (res?.error) {
                    toast.error(`Uh-oh! Wrong login details.`, {
                        style: {
                            background: '#1f2937',
                            color: '#fff',
                        },
                    });
                }
                if (res?.ok && !res?.error) {
                    toast.success(`Welcome back!`, {
                        style: {
                            background: '#1f2937',
                            color: '#fff',
                        },
                    });
                }
            }).finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <div
            className='
    mt-8
    sm:mx-auto
    sm:w-full
    sm:max-w-md
    '
        >
            <div
                className='
        bg-fuchsia-950
        px-4
        py-8
        shadow
        sm:rounded-lg
        sm:px-10
        '
            >
                <form
                    className='space-y-6'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === 'register' && (
                        <Input
                            label='Name'
                            id='name'
                            type='name'
                            register={register}
                            required={true}
                            errors={errors}
                            disabled={isLoading}
                        />
                    )}
                    <Input
                        label='Email'
                        id='email'
                        type='email'
                        register={register}
                        required={true}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <Input
                        label='Password'
                        id='password'
                        type='password'
                        register={register}
                        required={true}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <div>
                        <Button
                            fullWidth={true}
                            disabled={isLoading}
                            type='submit'
                        >
                            {variant === 'register' ? 'Register' : 'Login'}
                        </Button>
                    </div>
                </form>

                <hr className='mt-6' />

                <div
                    className='
           mt-6
           flex gap-2
           '
                >
                    <AuthSocialButton
                        icon={BsGithub}
                        disabled={isLoading}
                        onClick={() => socialAction('github')}
                    />
                    <AuthSocialButton
                        icon={BsGoogle}
                        disabled={isLoading}
                        onClick={() => socialAction('google')}
                    />
                </div>
                <div className='
        flex
        gap-2
        justify-center
        text-sm
        mt-6
        px-2
        text-gray-200
        '>
                    <div>
                        {variant === 'register' ? 'Ready to fly again?' : "Haven't joined the party yet?"}
                    </div>
                    <div
                        onClick={toggleVariant}
                        className='underline cursor-pointer text-fuchsia-500'
                    >
                        {variant === 'register' ? 'Login' : 'Register'}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AuthForm;