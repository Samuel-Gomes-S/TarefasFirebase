import {
    deleteDoc,
    doc
} from "@firebase/firestore";
import {
    Container,
    DescriptionArea,
    Description,
    ButtonArea,
    EditBTN,
    ConcludeBTN
} from "./styles";
import { FaEdit } from "react-icons/fa";
import { MdOutlineRecommend } from "react-icons/md";
import { db } from "../../firebaseConnections";
import { toast } from "react-toastify";


export default function TaskList({ data, input, editing, idTask }) {

    function handleEditTask() {
        input(data.description)
        editing(true)
        idTask(data.id)
    }

    async function handleconclude() {
        await deleteDoc(doc(db, 'tasks', data.id)).then(() => {
            toast.success('Tarefa concluida.')
        }).catch((error) => {
            toast.error(`Erro ao tentar concluir a tarefa:  ${error.code}`)
        })


    }

    return (

        <Container key={data.id} >
            <DescriptionArea>
                <Description>
                    Tarefa: <br />
                    {data.description}
                </Description>
            </DescriptionArea>
            <ButtonArea>
                <EditBTN
                    onClick={() => handleEditTask()}
                >
                    <FaEdit />
                    Editar
                </EditBTN>
                <ConcludeBTN
                    onClick={() => handleconclude()}
                >
                    <MdOutlineRecommend />
                    Concluir
                </ConcludeBTN>
            </ButtonArea>
        </Container >

    )
}