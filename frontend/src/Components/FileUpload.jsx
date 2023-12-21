import upload from "../assets/upload-doc.svg";
import xmark from "../assets/x-mark.svg";
import file from "../assets/file.svg";

import Dropzone from "react-dropzone";

function FileElement({ File }) {
  return (
    <div className="flex">
      <img src={file} className="mr-2" />
      <p className="w-32 truncate ...">{File.name}</p>
    </div>
  );
}

export default function ({ onClose, onUpload, files, setFiles }) {
  function handleDrop(acceptedFiles) {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10">
      <div className="border-dashed border-2 w-screen lg:w-[48vw] 2xl:w-[28vw] bg-white rounded relative pb-24 mb-32">
        <img
          src={xmark}
          alt="x-mark"
          className="w-4 absolute top-2 right-2.5 cursor-pointer"
          onClick={onClose}
        />
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()} className="cursor-pointer">
                <input {...getInputProps()} />
                <div className="pt-32">
                  <img
                    src={upload}
                    alt="upload-doc"
                    className="w-8 flex mx-auto"
                  />
                  <p className="text-center mt-4">Drag File Here</p>
                </div>
              </div>
            </section>
          )}
        </Dropzone>
        <div className="mt-5 flex justify-center">
          <div>
            {files.map((file) => (
              <FileElement File={file} />
            ))}
          </div>
        </div>
        {files.length > 0 && (
          <div className="flex justify-center mt-5">
            <button className="white-button text-sm" onClick={onUpload}>
              Upload
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
