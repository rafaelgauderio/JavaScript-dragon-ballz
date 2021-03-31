import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render , fireEvent} from '@testing-library/react'
import FormCep from './FormCep'
import { act } from 'react-dom/test-utils'


global.fetch = jest.fn().mockImplementation(() =>
 Promise.resolve({
     json: () => ({
      cep: '90245000',
      logradouro: 'Rua Brasil',
      bairro: 'Centro' 
     })
 })
)

it ('Should render cep form', () => {
    const {debug, getByPlaceholderText} = render(<FormCep />)

    const cepInput = getByPlaceholderText('CEP').closet('input')
    fireEvent.change(cepInput, { target: { value: '90245000'}})
  
    await act(() => global.fetch)

    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(container).toMatchSnapshot()


} )

// # yarn jest FormCep
// # yarn jest FormCep -u -- agora atualizar o snapshot