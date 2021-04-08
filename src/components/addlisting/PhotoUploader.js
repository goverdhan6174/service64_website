import React, { useEffect, useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
// import { BsCloudUpload } from "react-icons/bs";
// import { Base64 } from 'js-base64';
// import { encode, decode } from 'js-base64';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { upload_img, CROP_IMAGE } from "../../store/action";
import { storage } from "./Storage.js";
import imageCompression from "browser-image-compression";
import Cropper from "./Cropper";
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 0,
  marginRight: 0,
  width: "100%",
  height: "auto",
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  width: "100%",
};

const img = {
  display: "block",
  width: "100%",
  height: "auto",
};

function PhotoUploader(props) {
  const [files, setFiles] = useState([]);
  const [progress, setProgres] = useState(0);
  const [getCropedImage, setGetCropedImage] = useState(null);
  const [photoTmp, setPhotoTmp] = useState(null);
  const [imgUploded, setImgUploded] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setImgUploded(true);
      handleFileChange(acceptedFiles[0]);
    },
  });

  const handleValidatePhoto = () => {
    if (getCropedImage) {
      getCropedImage()
        .then((img) => {
          img.lastModifiedDate = new Date();
          img.name = `${new Date().getTime()}.jpg`;
          var options = {
            maxSizeMB: 4,
            maxWidthOrHeight: 220,
            useWebWorker: true,
            fileType: "image/jpeg",
          };
          imageCompression(img, options)
            .then(function (compressedFile) {
              compressedFile.lastModified = new Date();
              save_img(compressedFile);
            })
            .catch(function (error) {
              console.log(error.message);
            });
          const file = [];
          file.push(img);

          setFiles(
            file.map((file) => {
              return Object.assign(file, {
                preview: URL.createObjectURL(file),
              });
            })
          );
          setImgUploded(false);
        })
        .catch((err) => {
          console.log("croping error", err);
        });
    }
  };

  const updateTmpImage = (file) => {
    const fr = new FileReader();
    fr.onload = () => {
      setPhotoTmp(fr.result);
    };
    fr.readAsDataURL(file);
  };
  const handleFileChange = (event) => {
    const target = event;
    updateTmpImage(target);
  };

  function save_img(compressedFile) {
    var d = new Date().getTime();
    var num = d.toString();
    const uploadTask = storage
      .ref(`/images/${num + compressedFile.name}`)
      .put(compressedFile);
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        const progress = Math.round(
          (snapShot.bytesTransferred / snapShot.totalBytes) * 100
        );
        setProgres(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        const fileName = num + compressedFile.name;
        storage
          .ref("images")
          .child(fileName)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            const image = {
              photo: fireBaseUrl,
              photo_name: fileName,
            };
            console.log(image);
            props.actions.upload_img(image);
          });
      }
    );
  }
  console.log(files);

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        {console.log(file.preview)}

        <img
          id="thumb-image"
          src={file.preview}
          style={img}
          alt="Author Profile"
        />
      </div>
    </div>
  ));

  useEffect(() => {
    if (props.item.CROPED_IMAGE) {
      save_img(props.item.CROPED_IMAGE);
    }
    let a = files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [props]);

  return (
    <>
      <div className="billing-form-item">
        <div className="billing-title-wrap">
          <h3 className="widget-title pb-0">Upload your photo</h3>
          <div className="title-shape margin-top-10px"></div>
        </div>
        <div className="cropper-container"></div>
        <div className="billing-content">
          <div className="row">
            <div className="col-lg-12">
              {!imgUploded ? (
                <div className="drag-and-drop-wrap text-center">
                  <div className="drag-and-drop-file">
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input {...getInputProps()} />
                      <span className="drag-drop-icon">
                        {/* <BsCloudUpload /> */}
                      </span>
                      <h3>Drag & Drop Files Here to Upload</h3>
                      <Link to="#" className="drag-drop-btn">
                        Browse Files
                      </Link>
                    </div>
                    <progress value={progress} max="100" /> {progress + "%"}
                    <aside style={thumbsContainer}>{thumbs}</aside>
                  </div>
                </div>
              ) : (
                <>
                  <Cropper
                    image={photoTmp}
                    setGetCropedImage={setGetCropedImage}
                  />
                  <div className="btn-box text-center">
                    <button
                      className="theme-btn border-0 button-success mt-4"
                      onClick={handleValidatePhoto}
                    >
                      Save
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        upload_img,
        CROP_IMAGE,
      },
      dispatchEvent
    ),
  };
};

const mapStateToProps = (state) => {
  return {
    item: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUploader);
