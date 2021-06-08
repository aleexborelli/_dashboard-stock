import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

interface Props {
  onFileUploaded: (file: File) => void;
}

const MyDropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);

      onFileUploaded(file);
    },
    [onFileUploaded],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="point thumbnail" />
      ) : isDragActive ? (
        <p>
          <FiUpload />
          Solte o arquivo aqui...
        </p>
      ) : (
        <p>
          <FiUpload />
          Arraste e solte uma imagem aqui, ou clique para selecione uma imagem
        </p>
      )}
    </div>
  );
};

export default MyDropzone;