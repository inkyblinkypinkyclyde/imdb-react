import React from 'react'
import Release from './release'

const UpcomingReleases = ({ releases }) => {
    const releaseNodes = releases.map((release) => {
        return (
            <Release key={release.id} name={release.name} url={release.url} />
        )
    })

    return (
        <>
            {releaseNodes}
        </>
    )
}

export default UpcomingReleases