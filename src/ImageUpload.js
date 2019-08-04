import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

// Setup Firebase
firebase.initializeApp({
    apiKey: "AIzaSyAskuxeoupJ-rQstN457Mxod8uiIiEUOD4",
    authDomain: "testing-f1cd4.firebaseapp.com",
    databaseURL: "https://testing-f1cd4.firebaseio.com",
    storageBucket: "gs://testing-f1cd4.appspot.com"
});

export default class ImageUpload extends React.Component {
  state = {
    filenames: [],
    downloadURLs: [],
    isUploading: false,
    uploadProgress: 0
  };

  sendData = () => {
    this.props.parentCallback(this.state.downloadURLs);
}

  handleUploadStart = () =>
    this.setState({
      isUploading: true,
      uploadProgress: 0
    });

  handleProgress = progress =>
    this.setState({
      uploadProgress: progress
    });

  handleUploadError = error => {
    this.setState({
      isUploading: false
      // Todo: handle error
    });
    console.error(error);
  };

  handleUploadSuccess = async filename => {
    const downloadURL = await firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => console.log('url ', url))

      localStorage.setItem('images', downloadURL)

    this.setState(oldState => ({
      filenames: [...oldState.filenames, filename],
      downloadURLs: [...oldState.downloadURLs, downloadURL],
      uploadProgress: 100,
      isUploading: false
    }));

    this.sendData();
  };

   imgStyle = {
       width: "30%"
   }

  render() {
    return (
      <div>
        <FileUploader
          accept="image/*"
          name="image-uploader-multiple"
          randomizeFilename 
          storageRef={firebase.storage().ref("images")}
          onUploadStart={this.handleUploadStart}
          onUploadError={this.handleUploadError}
          onUploadSuccess={this.handleUploadSuccess}
          onProgress={this.handleProgress}
          multiple
        />

        <p>Progress: {this.state.uploadProgress}</p>

        <p>Filenames: {this.state.filenames.join(", ")}</p>

        {/* <div>
          {this.state.downloadURLs.map((downloadURL, i) => {
            return <img style={this.imgStyle} key={i} src={downloadURL} />;
          })}
        </div> */}
      </div>
    );
  }
}