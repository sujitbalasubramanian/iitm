import sys,os
from subprocess import Popen
from resources.config import SERVER_IP,SERVER_USERNAME

# ssh -i ~/aws/streamer.pem -R 6605:localhost:5505 ubuntu@ec2-52-66-168-66.ap-south-1.compute.amazonaws.com -v -o ConnectTimeout=10

if __name__ == '__main__':
    if(len(sys.argv) < 2):
        print("enter local and sever port")
    else:
        cpath = os.getcwd()
        cmd = [cpath+"/spawn-env/bin/python", cpath+"/inference.py", sys.argv[2]]
        sshcmd = ["ssh","-i","~/aws/streamer.pem","-NR",sys.argv[1]+":localhost:"+sys.argv[2],SERVER_IP,"-v"]

        sshtunnel = Popen(sshcmd)
        process = Popen(cmd)
