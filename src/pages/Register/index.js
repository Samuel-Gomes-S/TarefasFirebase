import React, { useRef, useState } from "react";
import {
    Container,
    Form,
    Input,
    SignInButton,
    SubmitButton,
    Text
} from "./styles";
import { toast } from "react-toastify";

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const refName = useRef()
    const refPassword = useRef()
    const refEmail = useRef()

    async function handleRegister(e) {
        e.preventDefault()
        if (!name) {
            refName.current.focus()
            toast.warn("Preencha o campo do nome")
            return
        }
        if (!email) {
            refEmail.current.focus()
            toast.warn("Preencha o campo email")
            return
        }
        if (!password) {
            toast.warn("Preencha o campo da senha")

            refPassword.current.focus()

            return
        }
    }
    return (
        <Container>
            <Text>Registrar conta </Text>
            <Form>
                <Input
                    type="text"
                    placeholder="Digite seu  nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    ref={refName}
                />

                <Input
                    type="text"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ref={refEmail}
                />
                <Input
                    type="password"
                    placeholder="Digite uma senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ref={refPassword}
                />
                <SubmitButton onClick={handleRegister}>
                    Registrar
                </SubmitButton>
            </Form>
            <SignInButton
                to={'/'}
            >
                Já possui uma conta? Acesse aqui
            </SignInButton>
        </Container>
    )
}