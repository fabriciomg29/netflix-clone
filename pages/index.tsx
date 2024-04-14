// 'use client'
// 'use server'

import { NextPageContext } from 'next'
import { signOut, getSession } from 'next-auth/react'

export async function getServerSideProps(context: NextPageContext) {

    const session = await getSession(context)

    console.log('session2: ', session)

    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}

export default function Home() {
    return (
        <>
            <h1 className="text-4xl font-bold underline text-amber-600">
                NetFlix Clone 2
            </h1>
            <button className='h-10 w-full bg-white' onClick={() => signOut()}>
                Sign Out
            </button>
        </>
    )
}