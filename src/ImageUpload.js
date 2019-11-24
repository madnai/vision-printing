import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import { connect } from 'react-redux';
import ProgressBar from 'react-bootstrap/ProgressBar'

// Setup Firebase
firebase.initializeApp({
    apiKey: "AIzaSyAskuxeoupJ-rQstN457Mxod8uiIiEUOD4",
    authDomain: "testing-f1cd4.firebaseapp.com",
    databaseURL: "https://testing-f1cd4.firebaseio.com",
    storageBucket: "gs://testing-f1cd4.appspot.com"
});

class ImageUpload extends React.Component {
  state = {
    filenames: [],
    downloadURLs: [],
    isUploading: false,
    uploadProgress: 0
  };


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
      .then(url => this.props.onImageUpload(url))

      localStorage.setItem('images', downloadURL)

    this.setState(oldState => ({
      filenames: [...oldState.filenames, filename],
      downloadURLs: [...oldState.downloadURLs, downloadURL],
      uploadProgress: 100,
      isUploading: false
    }));
    // this.props.onImageUpload(downloadURL);
  };

   imgStyle = {
       width: "30%"
   }

  render() {
    return (
      <div>
        <div style={{marginBottom: '15px'}}>
        <label style={{backgroundColor: '#D8002A', color: 'white', padding: 10, borderRadius: 4, cursor: 'pointer'}}>
          Wybierz pliki
        <FileUploader
          hidden
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
        </label>
        </div>
        <div style={{width: '35%', textAlign: 'center', display: 'inline-block', textAlign: 'center'}}>
        <ProgressBar  now={this.state.uploadProgress} />
        {this.state.uploadProgress != 0 ? (
          <p>{this.state.uploadProgress}%</p>
        ) : null}
        
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    img: state.images
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onImageUpload: (images) => dispatch({type: 'UPLOAD', payload: images})
  }
}
//TODO: remove mapStateToProps and replace with null
export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);