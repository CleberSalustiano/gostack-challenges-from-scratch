import React, { useCallback, useEffect } from "react";
import { ActionDataProps, OrderProp } from "../../pages/OrderPage";
import api from "../../service/api";
import { Container } from "./style";

interface NoteProps {
    setVisible: (arg: ActionDataProps) => void;
    order?: OrderProp;
}

const NoteVisualization: React.FC<NoteProps> = ({
    setVisible,
    order,
}) => {
    const handleSetVisible = useCallback(() => {
        setVisible({ isDataAction: false, id: "" });
    }, [setVisible]);

    console.log(order)
    
    return (
        <>
            <Container>
                <div onClick={handleSetVisible} />
                <div>
                    <h2>Informações da encomenda</h2>
                    <p>{order?.recipient.state}, {order?.recipient.number}</p>
                    <p>{order?.recipient.city} - {order?.recipient.state}</p>
                    <p>{order?.recipient.cep}</p>

                    <div></div>

                    <h2>Datas</h2>
                    <p>
                        <strong>Retirada:</strong> {order?.start_date}
                    </p>
                    <p>
                        <strong>Entrega:</strong> {order?.end_date ? order?.end_date : <>-</> }
                    </p>

                    <div></div>

                    <h2>Assinatura</h2>
                    <p>Sem assinatura</p>
                </div>
            </Container>
        </>
    );
};

export default NoteVisualization;
