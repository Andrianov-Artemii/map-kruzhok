import React from 'react'

function InlineTag(props)
{
    return(
        <p type="button" class="btn btn-outline-secondary mr-2 mb-2">{props.title}</p>
    )
}

export default InlineTag