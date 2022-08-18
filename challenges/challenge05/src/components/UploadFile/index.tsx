/* eslint-disable @typescript-eslint/ban-types */
import React, { ReactNode, useEffect, useRef } from "react";
import imageDefault from "../../assets/imageDefault.png";
import Dropzone from "react-dropzone";
import { DropContainer, UploadMessage } from "./style";
import { useField } from "@unform/core";

interface UploadProps {
    onUpload: Function;
    children?: ReactNode;
    name: string;
}

const UploadFile: React.FC<UploadProps> = ({ onUpload, name }: UploadProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, defaultValue, registerField } = useField(name);

    useEffect(() => {
        registerField({
          name: fieldName,
          ref: inputRef.current,
          path: 'value',
        });
      }, [fieldName, registerField]);

    const renderDragMessage = (
        isDragActive: boolean,
        isDragRejest: boolean,
    ): ReactNode => {
        if (!isDragActive) {
            return (
                <UploadMessage>
                    <img src={imageDefault} alt="" />
                    Adicionar Foto
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
            <UploadMessage type="success">
                <img src={imageDefault} alt="" />
                Adicionar Foto
            </UploadMessage>
        );
    };

    return (
        <Dropzone
            accept={{ "image/jpeg": [], "image/png": [] }}
            onDropAccepted={(files) => onUpload(files)}
        >
            {({
                acceptedFiles,
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
                    <input {...getInputProps()} data-testid="upload" ref={inputRef}/>
                    {renderDragMessage(isDragActive, isDragReject)}
                </DropContainer>
            )}
        </Dropzone>
    );
};

export default UploadFile;
