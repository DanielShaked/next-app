import axios from 'axios'
import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'


interface Props {
    searchParams: { sortOrder: string }
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {




    return (
        <>
            <h1>Users!</h1>
            <Link href='/users/new' className='btn btn-primary'>New User</Link>
            <Suspense fallback={<p>Loading...</p>}></Suspense>
            <UserTable sortOrder={sortOrder} />
        </>
    )
}

export default UsersPage