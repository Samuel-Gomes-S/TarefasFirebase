import React, {
    useEffect,
    useState
} from "react";
import {
    Container,
    TextArea,
    Text,
    RegisterBTN,
    Form,
    SignOutBTN
} from "./styles";
import TaskList from "../../Components/TaskList/TaskList";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebaseConnections";
import {
    addDoc,
    collection,
    doc,
    onSnapshot,
    query,
    updateDoc,
    where
} from "firebase/firestore";

export default function Admin() {

    const [taskInput, setTaskInput] = useState('')
    const [list, setList] = useState([])
    const [userInfo, setUserInfo] = useState('')
    const [inEditing, setInEditing] = useState(false)
    const [taskId, setTaskId] = useState(undefined)

    //buscar informações do usuario local.
    useEffect(() => {

        function localUser() {
            const user = localStorage.getItem('@user') || null
            setUserInfo(user ? JSON.parse(user) : null)

        }
        localUser()
    }, [])

    //para buscar as tarefas do usuario
    useEffect(() => {

        async function loadTasks() {
            if (userInfo) {
                onSnapshot(
                    query(collection(db, 'tasks'), where('user', '==', userInfo.uid)), (snapshot) => {
                        const data = snapshot.docs.map((item) => ({ id: item.id, ...item.data() }))
                        setList(data)
                    })

            }
        }

        loadTasks()
    }, [userInfo])

    function registerTask(e) {
        console.log(list)
        e.preventDefault()

        if (!taskInput) {
            toast.warning("Digite a sua tarefa!")
            return
        }
        handleRegister()
    }

    async function handleRegister() {
        try {
            const task = await addDoc(collection(db, 'tasks'), {
                description: taskInput,
                createdAt: new Date(),
                user: userInfo.uid
            })
            toast.success('Tarefa registrada')
            setTaskInput('')
        } catch (error) {
            toast.error('Erro ao adicionar a tarefa ' + error)
        }
    }



    async function logOut() {
        await signOut(auth)
        localStorage.removeItem('@user')
        toast.success('LogOut realizado com sucesso!')
    }

    async function handleUpdateTask(e) {
        e.preventDefault()
        try {
            const taskRef = doc(db, 'tasks', taskId)
            const task = await updateDoc(taskRef, {
                description: taskInput,
            }).then(() => {
                setTaskInput('')
                taskId(undefined)
                setInEditing(false)
            })
        } catch (error) {
            toast.error('Erro ao atualizar a tarefa ' + error)
        }
    }
    return (
        <Container>
            <Text>
                {'Tarefas do(a)'}
                {userInfo.name ? userInfo.name : 'usuario(a)'}
            </Text>
            <Form>
                <TextArea
                    placeholder="Digite aqui sua tarefa"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
                {inEditing ? <RegisterBTN
                    onClick={handleUpdateTask}
                >
                    Salvar edição
                </RegisterBTN> :
                    <RegisterBTN
                        onClick={registerTask}
                    >
                        Registrar tarefa
                    </RegisterBTN>}
            </Form>

            {list.map((item) => (
                <TaskList
                    data={item}
                    input={setTaskInput}
                    editing={setInEditing}
                    idTask={setTaskId}
                />)
            )}
            <SignOutBTN
                onClick={logOut}
            >
                Sair
            </SignOutBTN>
        </Container>
    )
}