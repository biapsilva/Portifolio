import { FormEvent, useState } from 'react'
import React from 'react'

import { ButtonPesquisar, FormPesquisa, InputPesquisar } from './Styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormPesquisa onSubmit={aoEnviarForm}>
      <InputPesquisar
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <ButtonPesquisar type="submit">Pesquisar</ButtonPesquisar>
    </FormPesquisa>
  )
}
export default FormVagas
