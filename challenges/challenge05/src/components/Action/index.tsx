import React, { HTMLAttributes, useCallback, useState } from "react";
import { FiEdit2, FiEye, FiMoreHorizontal, FiTrash2 } from "react-icons/fi";
import { Container, Menu } from "./style";

interface ActionProps extends HTMLAttributes<HTMLDivElement> {
    typeAction: "orders" | "couriers" | "recipients" | "problems";
}

const Action: React.FC<ActionProps> = ({
    typeAction
}) => {

    const [isOpen, setActionOpen] = useState(false);

    const handleOpen = useCallback(() => {
        setActionOpen(!isOpen);
    }, [isOpen]);

    return (
        <Container onClick={handleOpen}>
            <FiMoreHorizontal />
            <Menu isOpen={isOpen}>
                {isOpen && typeAction === "orders" && (
                    <>
                        <div>
                            <FiEye className="view" /> Visualizar
                        </div>
                        <div>
                            <FiEdit2 className="edit" /> Editar
                        </div>
                        <div>
                            <FiTrash2 className="remove" /> Excluir
                        </div>
                    </>
                )}
                {isOpen && ((typeAction === "couriers" || typeAction === "recipients")) && (
                    <>
                        <div>
                            <FiEdit2 className="edit" /> Editar
                        </div>
                        <div>
                            <FiTrash2 className="remove" /> Excluir
                        </div>
                    </>
                )}
                {isOpen && typeAction === "problems" && (
                    <>
                        <div>
                            <FiEdit2 className="edit" /> Visualizar
                        </div>
                        <div>
                            <FiTrash2 className="remove" /> Cancelar encomenda
                        </div>
                    </>
                )}
            </Menu>
        </Container>
    );
};

export default Action;
