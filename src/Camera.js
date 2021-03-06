class Camera {
  constructor(video_node) {
    //Camera stream DOM node
    this.video_node = video_node;
  }

  //Camera feed (viewfinder) on
  switch_on() {
    //Get camera media stream and set on player <video>
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: { min: 600, ideal: 700, max: 800 },
          height: { min: 600, ideal: 700, max: 800 },
          facingMode: "user"
        },
        audio: false
      })
      .then(stream => {
        this.video_node.srcObject = this.stream = stream;
      });
  }

  //Camera feed (viewfinder) off
  switch_off() {
    try {
      //pause video node
      this.video_node.pause();
      //Stop media stream
      this.stream.getTracks()[0].stop();
    } catch (err) {
      console.error(err);
    }
  }

  //Capture phto from camera steam
  take_photo() {
    //Create a <canvas> element to render the photo
    let canvas = document.createElement("canvas");
    //Set canvas dimensions same as video stream
    canvas.setAttribute("width", 600);
    canvas.setAttribute("height", 600);
    //Get canvas context
    let context = canvas.getContext("2d");
    //Draw (render) the image onte the canvas
    context.drawImage(this.video_node, 0, 0, canvas.width, canvas.height);
    //Get the canvas image as a data uri
    this.photo = context.canvas.toDataURL();
    //Destroy canvas
    context = null;
    canvas = null;
    return this.photo;
  }
}

export default Camera;
