import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useCallback, useRef, useState } from "react";
import { FiCheck } from "react-icons/fi";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import UploadFile from "../../components/UploadFile";
import { FormHeader, Main } from "../OrderPageRegister/style";
import { FormBody } from "../RecipientsPageRegister/style";
import filesize from "filesize";

interface FileProps {
    file: File;
    name: string;
    readableSize: string;
}

const CourierPageRegister: React.FC = () => {
    const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(() => {}, []);

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
                        <UploadFile onUpload={submitFile}></UploadFile>
                        {!!uploadedFiles.length &&
                            uploadedFiles.map((files) => {
                                return <>{files.name}</>;
                            })}
                        <Input
                            name="produto"
                            type="text"
                            title="Nome do Produto"
                            placeHolder="Digite o produto"
                        />

                        <Input
                            name="produto"
                            type="text"
                            title="Nome do Produto"
                            placeHolder="Digite o produto"
                        />
                    </FormBody>
                </Form>
            </Main>
        </>
    );
};

export default CourierPageRegister;
