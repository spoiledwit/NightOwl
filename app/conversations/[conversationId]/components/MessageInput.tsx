'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
import { HiPaperAirplane } from "react-icons/hi";

interface MessageInputProps {
    id: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
}

const MessageInput:React.FC<MessageInputProps> = ({
    type,
    id,
    required,
    register,
    errors,
    placeholder
}) => {
  return (
    <div
    className="
    relative w-full
    "
    >
        <input type={type} id={id}
        autoComplete={id}
        {...register(id, {required})}
        placeholder={placeholder}
        className="
        text-black
        font-light
        py-2
        px-4
        bg-neutral-100
        w-full
        rounded-full
        focus:outline-none
        "
        />
    </div>
  )
}

export default MessageInput