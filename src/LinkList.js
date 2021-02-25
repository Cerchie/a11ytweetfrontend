import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import LinksFromAPICall from './LinksFromAPICall'

function LinkList() {
    const links = LinksFromAPICall()
    if (links === undefined) {
        return (
            <>
                <h1>No links returned from Github</h1>
            </>
        )
    }
    return (
        <>
            <h1 className="shadow-lg text-blue-900 text-6xl p-6 m-12">
                a11y repos
            </h1>
            <p className="shadow-xl text-blue-900 text-2xl p-6 m-12">{links}</p>
        </>
    )
}

export default LinkList
