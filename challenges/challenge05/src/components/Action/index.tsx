import React, { HTMLAttributes, useCallback, useState } from "react";
import { FiEdit2, FiEye, FiMoreHorizontal, FiTrash2 } from "react-icons/fi";
import { ActionDataProps } from "../../pages/OrderPage";
import api from "../../service/api";
import { Container, Menu } from "./style";

interface ActionProps extends HTMLAttributes<HTMLDivElement> {
    typeAction: "orders" | "couriers" | "recipients" | "problems";
    id: string;
    setDeleted?: (arg0: ActionDataProps) => void;
    setVisualizationVisible?: (arg0: ActionDataProps) => void;
}

const Action: React.FC<ActionProps> = ({
    typeAction,
    id,
    setDeleted,
    setVisualizationVisible: setVisible,
}) => {
    const [isOpen, setActionOpen] = useState(false);

    const [isSure, setIsSure] = useState(false);

    const token = localStorage.getItem("FastFeet:token");

    const handleOpen = useCallback(() => {
        setActionOpen(!isOpen);
        if (isOpen === false) {
            setIsSure(false);
        }
    }, [isOpen]);

    const handleAreYouSureRemove = useCallback(() => {
        setIsSure(true);
    }, []);

    const handleRemove = useCallback(async () => {
        await api.delete("/" + typeAction + "/" + id, {
            headers: {
                authorization: token as string,
            },
        });
        setIsSure(false);
        if (setDeleted instanceof Function) {
            setDeleted({ isDataAction: true, id });
        }
    }, [typeAction, id, token, setDeleted]);

    const handleVisible = useCallback(() => {
        if (setVisible instanceof Function) {
            setVisible({ isDataAction: true, id });
            handleOpen();
        }
    }, [setVisible, handleOpen]);

    return (
        <Container>
            <FiMoreHorizontal onClick={handleOpen} />
            <Menu isOpen={isOpen}>
                {isOpen && typeAction === "orders" && (
                    <>
                        <div onClick={handleVisible}>
                            <FiEye className="view" /> Visualizar
                        </div>
                        <div>
                            <FiEdit2 className="edit" /> Editar
                        </div>
                        <div onClick={handleAreYouSureRemove}>
                            {isSure ? (
                                <div onClick={handleRemove}>
                                    <FiTrash2 className="remove" /> Tem certeza?
                                </div>
                            ) : (
                                <div>
                                    <FiTrash2 className="remove" /> Excluir
                                </div>
                            )}
                        </div>
                    </>
                )}
                {isOpen &&
                    (typeAction === "couriers" ||
                        typeAction === "recipients") && (
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
