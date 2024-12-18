import React, {
    useState,
    useRef
} from "react";
import {
    Container,
    Form,
    Input,
    RegisterButton,
    Slogan,
    SubmitButton,
    Title
} from "./styles";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConnections";
import { useNavigate } from "react-router-dom";


export default function Home() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigate()
    const refPassword = useRef()
    const refEmail = useRef()



    async function handleSignIn(e) {
        e.preventDefault()
        if (!email) {
            toast.warn("Preencha o campo email")
            refEmail.current.focus()
            return
        }
        if (!password) {
            toast.warn("Preencha o campo senha")
            refPassword.current.focus()
            return
        }

        await signInWithEmailAndPassword(auth, email, password).then(() => {
            toast.success('Logado com sucesso')
            navigation('/admin', { replace: true })
        }).catch((error) => {
            toast.warning('Verifique os dados digitados.')

        })
    }

    return (
        <Container>
            <Title>
                Lista de tarefas
            </Title>
            <Slogan>
                Gerencie suas tarefas diarias
            </Slogan>
            <Form>
                <Input
                    ref={refEmail}
                    type="text"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    ref={refPassword}
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <SubmitButton
                    onClick={handleSignIn}
                >
                    Acessar
                </SubmitButton>
            </Form>
            <RegisterButton
                to="/register"
            >
                Não possui uma conta? Registre-se aqui
            </RegisterButton>
        </Container>
    )
}