import { useState } from 'react'
import React from 'react'


function Showcase() {
    const [name, setName] = useState('Brad')
    return (
        <div>
            <h2>Showcase</h2>
            <p>Hello {name}</p>
        </div>
    )
}

export default Showcase