import os
import sys

#测试

tag = "develop"
os.chdir(os.path.abspath(os.path.join(os.getcwd(), "")))

os.system("git fetch --all")

os.system("git checkout release")
os.system("git fetch && git merge -s recursive -X theirs origin/release")
os.system("git merge -s recursive -X theirs origin/" + tag)

os.system("yarn")

os.system("npm run build")
os.system("git add -A && git commit -m DDP人工智能系统发版")
os.system("git push origin release")
