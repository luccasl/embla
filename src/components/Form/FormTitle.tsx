import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`

const FormTitle: React.FC<{
    title: string
}> = ({
    title
}) => {
    return <Title>{ title }</Title>
}

export { FormTitle }