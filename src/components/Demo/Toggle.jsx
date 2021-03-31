import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireExent } from '@testing-library/react'
import Render from './Toogle'


it ('Should render Toggle', () => {
    const { debug, getByText } = render (<Toggle />)
    expect(getByText('Turn on')).toBeTruth()
})

it ('Should render Toggle Turn off', () => {
    const { debug, getByText } = render (<Toggle />)
    debug()
    const button = getByText('Turn on').closest('button')
    fireEvent.click(button)
    debug()
    expect(getByText('Turn Off')).toBeTruth()
})

//# yarn test Toggle