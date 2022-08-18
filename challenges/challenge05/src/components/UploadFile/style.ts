import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface UploadProps {
    isDragActive: boolean;
    isDragReject: boolean;
    refKey?: string;
    [key: string]: any;
    type?: "error" | "success" | "default";
}

const dragActive = css`
    border-color: #12a454;
`;

const dragReject = css`
    border-color: #e83f5b;
`;

export const DropContainer = styled.div.attrs({
    className: "dropzone",
})`
    border: 1.5px dashed #969cb3;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    

    transition: height 0.2s ease;

    ${(props: UploadProps): false | FlattenSimpleInterpolation =>
        props.isDragActive && dragActive}

    ${(props: UploadProps): false | FlattenSimpleInterpolation =>
        props.isDragReject && dragReject}
`;

const messageColors = {
    default: "#aaa",
    error: "#e83f5b",
    success: "#12a454",
};

export const UploadMessage = styled.p`
    display: flex;
    font-size: 16px;
    line-height: 24px;
    padding: 48px 0;
    font-weight: 500;
    color: ${({ type }: UploadProps) => messageColors[type || "default"]};
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 100px;
        height: 100px;
    }
`;
