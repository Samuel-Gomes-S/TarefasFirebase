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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseConnections";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const refName = useRef()
    const refPassword = useRef()
    const refEmail = useRef()
    const navigation = useNavigate()

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

        await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user
            return updateProfile(user, {
                displayName: name
            })
        }).then(() => {
            toast.success('Usuario cadastrado!')
            setEmail('')
            setName('')
            setPassword('')
            navigation('/admin', { replace: true })
        }).catch((error) => {

            if (error.code == 'auth/email-already-in-use') {
                toast.warning('Já possui uma conta registrada com esse email')
                return
            }
            if (error.code == 'auth/weak-password') {
                toast.warning('A senha deve possuir no minimo 6 caracteres')
                return
            }

        })

    }
    return (
        <Container>
            <Text>
                Registrar conta
            </Text>
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
                <SubmitButton
                    onClick={handleRegister}
                >
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