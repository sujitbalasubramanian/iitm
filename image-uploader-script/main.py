import requests
import os

def send_snap(image_path):
    url = "http://52.66.168.66:4000/api/snap/upload"
    files = {'snap': open(image_path, 'rb')}

    try:
        response = requests.post(url, files=files)
        print("snap uploaded successfully!")
        create_snap(response.json()["snap_path"])
    except requests.exceptions.RequestException as e:
        print(f"Error sending snap: {e}")

def create_snap(snap_path):
    url = "http://52.66.168.66:4000/api/snap"
    data = {
        "device_name": "balu_station",
        "stream" : 6601,
        "snap_path": snap_path,
        "violation": "helmet",
        "rn_no": "TN 47 J 9999"
    }

    try:
        response = requests.post(url, json=data)
        print("snap created successfully!")
    except requests.exceptions.RequestException as e:
        print(f"Error sending snap: {e}")

images = os.listdir("images/")

for i, file in enumerate(images):
    print(f"image {i+1} sending...")
    send_snap(f"images/{file}")
    print("sent.\n")
