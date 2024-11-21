import React from 'react'

const Heading = (props) => {
    return (
        <h1 className='text-3xl sm:text-2xl font-bold text-gray-600 mb-14 self-start dark:text-white transition-colors'>
            {props.text}
        </h1>
    )
}

export default Heading