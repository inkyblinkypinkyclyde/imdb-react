import React from 'react'
import Release from './release'

const UpcomingReleases = ({ releases }) => {
    const releaseNodes = releases.map((release) => {
        return (
            <li>
                <Release key={release.id} name={release.name} url={release.url} />
            </li>
        )
    })

    return (
        <>
            <h1>Upcoming Releases UK</h1>
            <ul>
                {releaseNodes}
            </ul>
        </>
    )
}

export default UpcomingReleases