Webcam.set({
    width:310,
    height:310,
    image_format : 'png',
    png_quality:90,
    constraints: {
        facingMode:"Environment"
    }
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

