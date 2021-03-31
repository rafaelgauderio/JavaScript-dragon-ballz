import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Render from './Render'

/*
it ('Should render Hey user', () =>  {
        const container = render (<Render />) 
        console.log("CONTAINER", container)
})
*/

it ('Should render Hey user', () =>  {
    const { debug, getByText } = render (<Render />) 
    expect(getByText('Hey, user')).toBeInTheDocument()
})

it ('Should render Hey user', () =>  {
    const { debug, getByText } = render (<Render name="Rafael" />) 
    expect(getByText('Hello, Rafael!')).toBeInTheDocument()
})


/* para rodar o teste
na pasta do projeto
# yarn jest Render
*/