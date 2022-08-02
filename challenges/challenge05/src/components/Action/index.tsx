import React, { HTMLAttributes } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { Container, Menu } from "./style";

interface ActionProps extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    setIsOpen: () => void;
}

const Action: React.FC<ActionProps> = ({
    isOpen,
    setIsOpen,
    onClick,
    children,
}) => {
    return (
        <Container onClick={onClick}>
            <FiMoreHorizontal />
            <Menu isOpen={isOpen}>{isOpen && <>{children}</>}</Menu>
        </Container>
    );
};

export default Action;
