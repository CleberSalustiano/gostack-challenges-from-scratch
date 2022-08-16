/* eslint-disable @typescript-eslint/ban-types */
import React, { InputHTMLAttributes, ReactNode } from "react";

import Dropzone, { useDropzone } from "react-dropzone";
import { DropContainer, UploadMessage } from "./style";

interface UploadProps {
    onUpload: Function;
    children?: ReactNode;
}

const UploadFile: React.FC<UploadProps> = ({ onUpload }: UploadProps) => {
    const renderDragMessage = (
        isDragActive: boolean,
        isDragRejest: boolean,
    ): ReactNode => {
        if (!isDragActive) {
            return (
                <UploadMessage>
                    Selecione ou arraste o arquivo aqui.
                </UploadMessage>
            );
        }

        if (isDragRejest) {
            return (
                <UploadMessage type="error">
                    Arquivo não suportado
                </UploadMessage>
            );
        }

        return (
            <UploadMessage type="success">Solte o arquivo aqui</UploadMessage>
        );
    };

    return (
        <Dropzone accept={{"image/jpeg":[], "image/png":[]}} onDropAccepted={(files) => onUpload(files)}>
            {({ acceptedFiles,
                getRootProps,
                getInputProps,
                isDragActive,
                isDragReject,
            }): any => (
                <DropContainer
                    {...getRootProps()}
                    isDragActive={isDragActive}
                    isDragReject={isDragReject}
                >
                    <input {...getInputProps()} data-testid="upload" />
                    {renderDragMessage(isDragActive, isDragReject)}
                </DropContainer>
            )}
        </Dropzone>
    );
};

export default UploadFile;
