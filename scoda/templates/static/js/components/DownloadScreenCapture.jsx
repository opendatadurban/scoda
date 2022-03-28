import React, { useState } from 'react';
import Button from './Button';
import { Modal, ModalBody, Spinner } from 'reactstrap';

const DownloadScreenCapture = (props) => {

  const [loader, setLoader] = useState(false)
  const download = (e) => {

    setLoader(true)
    var htmlToImage = require('html-to-image');
    e.preventDefault()
    htmlToImage.toJpeg(document.getElementById('content'), { quality: 0.95 })
      .then(function (dataUrl) {
        setLoader(false)
        var link = document.createElement('a');
        link.download = 'data-snapshot.jpeg';
        link.href = dataUrl;
        link.click();
      });

  }
  return (
    <>
      <Button className={["download-screen-capture "] + props.className} onClick={download} text={props.buttonText} id="download" />
      {loader ?
        <Modal id="loader" isOpen={loader} className="modal-dialog-centered loader">
          <ModalBody>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-0 ml-3 pt-4">
                <Spinner type="grow" color="secondary" size="sm" />
                <Spinner type="grow" color="success" size="sm" />
                <Spinner type="grow" color="danger" size="sm" />
                <Spinner type="grow" color="warning" size="sm" />
              </div>
              <div className="col-0 pt-4 pl-4 float-left">Downloading Image...</div>
            </div>
            <br />
          </ModalBody>
        </Modal>
        : ''
      }
    </>

  );
}
export default DownloadScreenCapture;