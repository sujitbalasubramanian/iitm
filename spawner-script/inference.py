from flask import Flask, Response
import cv2
import sys

app = Flask(__name__)

camera = cv2.VideoCapture(1)

def gen_frames():
    while True:
        # Capture frame-by-frame
        success, frame = camera.read()  # read the camera frame
        if not success:
            break
        else:
            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')  # concat frame one by one and show result
    camera.release()


@app.route('/video_feed')
def video_feed():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    if(len(sys.argv) < 2):
        print("get cam and port")
    else:
        app.run(port=sys.argv[1])
