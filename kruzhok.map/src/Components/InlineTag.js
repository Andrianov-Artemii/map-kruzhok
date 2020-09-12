import React from 'react'

function InlineTag(props)
{
    return(
        <button type="button" class="btn btn-outline-secondary mr-2 mb-2">{props.title}</button>
    )
}

export default InlineTag