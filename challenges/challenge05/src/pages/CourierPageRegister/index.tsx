import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiCheck } from "react-icons/fi";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import UploadFile from "../../components/UploadFile";
import { FormHeader, Main } from "../OrderPageRegister/style";
import { FormBody } from "./style";
import filesize from "filesize";
import api from "../../service/api";

interface FileProps {
    file: File;
    name: string;
    readableSize: string;
}

interface registerCourierProps {
    name: string;
    email: string;
    file: FileProps;
}

const CourierPageRegister: React.FC = () => {
    const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
    const formRef = useRef<FormHandles>(null);

    const token = localStorage.getItem("FastFeet:token");

    const handleSubmit = useCallback(async ({name, email, file} :registerCourierProps) => {
        const onlyFile = file.file;
        const { data } = await api.post("/couriers",{name, email, onlyFile} ,{
            headers: {
                authorization: token as string,
            },
        });
    }, []);

    const submitFile = (files: File[]): void => {
        const filesWithProps: FileProps[] = files.map((file) => ({
            file,
            name: file.name,
            readableSize: filesize(file.size),
        }));
        console.log(filesWithProps);
        setUploadedFiles(filesWithProps);
    };

    return (
        <>
            <Header bold="couriers" />
            <Main>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <FormHeader>
                        <h2>Cadastro de encomendas</h2>
                        <div>
                            <Button
                                pageRef="/couriers"
                                voltar={true}
                                withArrow={true}
                            >
                                VOLTAR
                            </Button>
                            <button>
                                <FiCheck /> SALVAR
                            </button>
                        </div>
                    </FormHeader>
                    <FormBody>
                        <UploadFile name="file" onUpload={submitFile}></UploadFile>
                        {!!uploadedFiles.length &&
                            uploadedFiles.map((files) => {
                                return <span>{files.name}</span>;
                            })}
                        <Input
                            name="nome"
                            type="text"
                            title="Nome"
                            placeHolder="Digite o seu nome"
                        />

                        <Input
                            name="email"
                            type="text"
                            title="Email"
                            placeHolder="Digite o seu email"
                        />
                    </FormBody>
                </Form>
            </Main>
        </>
    );
};

export default CourierPageRegister;
