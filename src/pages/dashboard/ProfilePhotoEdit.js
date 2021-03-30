import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { edit_photo } from "../../store/action";
import { storage } from "../../components/addlisting/Storage";
import imageCompression from "browser-image-compression";
import userImg from '../../assets/images/team2.jpg'
import Cropper from '../../components/addlisting/Cropper'

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
    const current_user = JSON.parse(localStorage.getItem('__current_user__'))
    const [files, setFiles] = useState([]);
    const [progress, setProgres] = useState(0);
    const [imgUpload, setImgUpload] = useState(false)
    const [photo, setPhoto] = useState(userImg);
    const [photoUploaded, setPhotoUploaded] = useState(false)
    const [getFile, setGetFile] = useState(false)

    const [getCropedImage, setGetCropedImage] = useState(null);
    const [photoTmp, setPhotoTmp] = useState(null);
    const [imgUploded, setImgUploded] = useState(false)

    function deleteOldPic() {
        if (current_user !== null) {
            if (current_user.user_type === "Seller") {
                const desertRef = storage.ref().child(`/images/${current_user.photo_name}`);
                desertRef.delete().then(function () {
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }

    const handleFileChange = (event) => {
        const target = event;
        updateTmpImage(target);
    }

    const updateTmpImage = (file) => {
        const fr = new FileReader();
        fr.onload = () => {
            setPhotoTmp(fr.result);
        }
        fr.readAsDataURL(file);
    }

    const handleValidatePhoto = () => {
        if (getCropedImage) {
            getCropedImage().then((img) => {
                img.lastModifiedDate = new Date();
                img.name = `${new Date().getTime()}.jpg`;
                setImgUploded(true)
                const file = []
                file.push(img)
                savePhoto(file)
                console.log(file);
                setFiles(
                    file.map((file) => {
                        return Object.assign(file, {
                            preview: URL.createObjectURL(file),
                        });
                    }))
            }).catch(err => {
                console.log("croping error", err);
            })
        }
    }

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setPhotoUploaded(true)
            handleFileChange(acceptedFiles[0])
        },
    });

    const savePhoto = (acceptedFiles) => {
        var options = {
            maxSizeMB: 4,
            maxWidthOrHeight: 220,
            useWebWorker: true,
            fileType: "image/jpeg",
        };
        deleteOldPic()
        var d = new Date().getTime();
        var num = d.toString();
console.log(acceptedFiles);
        imageCompression(acceptedFiles[0], options)
            .then(function (compressedFile) {
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
                        const fileName = num + compressedFile.name
                        storage.ref("images")
                            .child(fileName)
                            .getDownloadURL()
                            .then((fireBaseUrl) => {
                                setPhoto(fireBaseUrl);
                                setImgUpload(false)
                                setPhotoUploaded(false)
                                const body = {
                                    seller_img: fireBaseUrl,
                                    photo_name: fileName,
                                    _id: current_user._id
                                }
                                props.actions.edit_photo(body).then((res) => console.log(res))

                            });
                    }
                );
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }


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

    useEffect(
        () => {
            if (current_user !== null) {
                if (current_user.user_type === "Seller") {
                    setPhoto(current_user.seller_img)
                }
            }
            let a = files.forEach((file) => URL.revokeObjectURL(file.preview));
        },
        [files, props]
    );

    return (
        <>
            <div className="user-pro-img mb-4">

                <div className="dropdown">
                    {!imgUpload &&
                        <>
                            <img src={photo} alt="user" />
                            <button onClick={() => { setImgUpload(true) }}
                                className="theme-btn edit-btn dropdown-toggle border-0 after-none"
                                aria-expanded="false">
                                <i className="la la-photo"></i> Edit</button>
                        </>
                    }
                    {imgUpload &&
                        <div>
                            <div className="upload-btn-box">
                                <div className="drag-and-drop-wrap text-center">
                                    <div className="drag-and-drop-file">
                                        {photoUploaded &&
                                            <div>
                                                <aside style={thumbsContainer}>{thumbs}</aside>

                                                {!imgUploded && <><Cropper image={photoTmp} setGetCropedImage={setGetCropedImage} />
                                                    <div className="btn-box text-left">
                                                        <button type="button" className="theme-btn border-0 button-success mr-1" onClick={() => { handleValidatePhoto() }} >save changes</button>
                                                        <button type="button" onClick={() => { setPhotoUploaded(false); setImgUpload(false) }} className="theme-btn border-0">Cancel</button>
                                                    </div>
                                                </>}
                                            </div>
                                        }
                                        {!photoUploaded &&
                                            <div>
                                                <div {...getRootProps({ className: "dropzone" })}>
                                                    <input {...getInputProps()} />
                                                    <span className="drag-drop-icon">
                                                        {/* <BsCloudUpload /> */}
                                                    </span>
                                                    <h3>Drag & Drop Files Here to Upload</h3>
                                                    <Link to="#" className="drag-drop-btn">Browse Files</Link>
                                                </div>
                                                <button type="button" onClick={() => { setPhotoUploaded(false); setImgUpload(false) }} className="theme-btn border-0">Cancel</button>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

const mapDispatchToProps = (dispatchEvent) => {
    return {
        actions: bindActionCreators(
            {
                edit_photo,
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
