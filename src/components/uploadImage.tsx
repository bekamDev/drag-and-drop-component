import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Cloud from "../assets/Cloud.png";
// import "./uplodImage.css";

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      setSelectedImage(file);
      onImageUpload(file);
    },
    [onImageUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div
        className={`image-upload-container text-center cursor-pointer w-[462px] h-[338px] m-5  ${
          isDragActive ? "drag-over" : ""
        }`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {selectedImage ? (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            className="preview-image w-[40%] h-[50%] mb-4"
          />
        ) : (
          <div className="wrapper ">
            <button
              type="button"
              className="upload-button bg-[#3a6ab3] hover:bg-[#2d599b] text-white py-2 px-4 border-none rounded-[4px] cursor-pointer w-[152px] h-[42px] shadow-xl text-[20px] "
            >
              Upload
            </button>
            <span className="file-size-text font-[system-ui] text-[17px] font-medium leading-7 tracking-wide text-left ml-5 w-[182] h-14">
              JPG or PNG format Maximum 5Mb
            </span>
            <div className="upload-text text-center mt-4 border-dashed border border-slate-900 p-4 w-[100%] h-[50vh] rounded-[29px]  ">
              <br />
              <img src={Cloud} className="upload-image pt-[50px]  ml-[30%] " />
              <br />
              <span className="drop-zone-text text-center">
                Drag and drop an image here
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageUpload;
