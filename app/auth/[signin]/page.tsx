'use client'

import React, { useState } from 'react'

const SignInPage = () => {

    const [credentials, setCredentials] = useState()
    return (
        <div>
            <form action="">
                <label htmlFor="">
                    enter email
                    <input type="email" />
                </label>
                <label htmlFor="">
                    enter password
                    <input type="password" />
                </label>
                <label htmlFor="">
                    enter name
                    <input type="text" />
                </label>
                <button onClick={(ev) => {
                    ev.preventDefault()
                    console.log('submitimg');
                }}>submit</button>
            </form>
        </div>
    )
}

export default SignInPage