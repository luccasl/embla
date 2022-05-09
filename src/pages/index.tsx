import { NextPage } from 'next'
import styled from 'styled-components'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Form, FieldGroup, FormTitle } from '../components/Form'
import { Logo } from '../components/Logo'
import { TextInput } from '../components/TextInput'
import { MdEmail, MdLock } from 'react-icons/md'
import useLogin, { UseLoginProperties } from '../lib/hooks/useLogin'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { ErrorMessage } from '../components/ErrorMessage'
import { useRouter } from 'next/router'
import { MountainIllustration } from '../components/MountainIllustration'
import { useDispatch } from 'react-redux'
import { setAuthError } from '../lib/reducers/authReducer'
import { useAppSelector } from '../lib/store/hooks'

const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
  padding-left: 2rem;
`

const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Front = styled.div`
  z-index: 10;
`

const InvalidFieldMessage: string = 'O campo está vázio.'

const Home: NextPage = () => {
  const router = useRouter()

  const dispatch = useDispatch()

  const authError = useAppSelector(state => state.auth.authError)

  const [accessToken, login]: UseLoginProperties = useLogin();

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  useEffect(()=> {
    if (accessToken === '') {
      return;
    }

    router.replace('/customers')
  }, [accessToken])

  const validateFields = (): boolean => {
    let success: boolean = true

    if (email.trim() === '') {
      setEmailError(InvalidFieldMessage)

      success = false
    } else {
      setEmailError('')
    }

    if (password.trim() === '') {
      setPasswordError(InvalidFieldMessage)

      success = false
    } else {
      setPasswordError('')
    }

    return success
  }

  const onClickLogin = async (event: React.MouseEvent) => {
    event.preventDefault()

    if (!validateFields()) {
      dispatch(setAuthError(''))

      return;
    }

    login(email, password)
  }

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setEmail(value)
  }

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setPassword(value)
  }

  return (
    <Container>
      <MountainIllustration />
      <Front>
        <Center>
          <Logo src='/logo.svg' alt='Embla logo' />
        </Center>
        <Center>
          <Card>
            <Form>
              <h1>Login</h1>
              <FieldGroup>
                <TextInput
                  inputId='email'
                  label='E-mail'
                  type='email'
                  left={ <MdEmail size={ 21 } /> }
                  value={ email }
                  onChange={ onEmailChange }
                  error={ emailError } />
                <TextInput
                  inputId='password'
                  label='Senha'
                  type='password'
                  left={ <MdLock size={ 21 } /> }
                  value={ password }
                  onChange={ onPasswordChange }
                  error={ passwordError } />
              </FieldGroup>
              <Button onClick={ onClickLogin }>
                Entrar
              </Button>
              <ErrorMessage>
                { authError }
              </ErrorMessage>
            </Form>
          </Card>
        </Center>
      </Front>
    </Container>
  )
}

export default Home
