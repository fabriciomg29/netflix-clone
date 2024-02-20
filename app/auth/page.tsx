"use client"

import Input from "@/components/input";
import { useState } from "react";

export default function Auth() {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black h-full w-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            Sign in
                        </h2>
                        <div className="flex flex-col gap-4">
                            <Input
                                id="name"
                                label="Username"
                                onChange={(e: any) => setName(e.target.value)}
                                value={name}
                            />
                            <Input
                                id="email"
                                label="Email"
                                onChange={(e: any) => setEmail(e.target.value)}
                                value={email}
                            />
                            <Input
                                id="password"
                                label="Senha"
                                onChange={(e: any) => setEmail(e.target.value)}
                                value={password}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}