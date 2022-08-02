import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./style";
import { FiCircle } from "react-icons/fi";

export interface StatusProps{
    status: "PENDENTE" | "ENTREGUE" | "RETIRADA" | "CANCELADA";
}

const Status : React.FC<StatusProps> = ({status}) => {
    return (
        <Container status={status}>
            <FiCircle />
            {status}
        </Container>
    )
}

export default Status;