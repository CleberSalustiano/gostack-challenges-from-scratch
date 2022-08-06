import React, { ButtonHTMLAttributes, useState } from "react";
import { Container } from "./style";
import { FiCircle } from "react-icons/fi";

interface ConstStatusProps {
    status: "PENDENTE" | "ENTREGUE" | "RETIRADA" | "CANCELADA";
}

export interface StatusProps {
    start_date: string;
    end_date: string;
    canceled_at: string;
}

const Status: React.FC<StatusProps> = ({ start_date, canceled_at, end_date }) => {
    let status: "PENDENTE" | "ENTREGUE" | "RETIRADA" | "CANCELADA";
    if (canceled_at !== null) {
        status = "CANCELADA"
    }else if (start_date === null) {
        status = "PENDENTE"
    } else if (end_date === null) {
        status = "RETIRADA"
    } else {
        status = "ENTREGUE"
    }
    return (
        <Container status={status}>
            <FiCircle />
            {status}
        </Container>
    );
};

export default Status;
