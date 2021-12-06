import os
import sys


tag = "develop"
os.chdir(os.path.abspath(os.path.join(os.getcwd(), "")))

os.system("git fetch --all")

os.system("git pull")
os.system("git add .")
os.system("git commit -m DDP人工智能发版系统提交代码 --no-verify")
os.system("git push")

os.system("git checkout release")
os.system("git fetch && git merge -s recursive -X theirs origin/release")
os.system("git merge -s recursive -X theirs origin/" + tag)

os.system("git add -A && git commit -m DDP人工智能系统发版 --no-verify")
os.system("git push origin release")

os.system("git checkout " + tag)

