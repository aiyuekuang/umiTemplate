import json
import os
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import Select
from selenium import webdriver
from time import sleep

def jq(el):
  return seleniumXpathEngine.driver.execute_script(el)

class OperationJson:
    def __init__(self,file_name=None):
        if file_name:
            self.file_name = file_name
        else:
            self.file_name = './package.json'
        self.data = self.get_data()

    def get_data(self):
        fp = open(self.file_name)
        data = json.load(fp)
        fp.close()
        return data

    def get_value(self,id):
        return self.data[id]

def getTag():
  return "feature/v"+OperationJson(os.path.join(os.getcwd() + "/package.json")).get_value('version')


class SeleniumXpathEngine:
    def __init__(self,url):
      self.driver = webdriver.Chrome()
      self.driver.get(url)


    def setJquery(self):
      if self.driver.execute_script('return typeof(jQuery) === "undefined"'):
        jQuerify = open(os.path.join(os.getcwd() + '/bin/jquery-1.7.2.min.js'), "r+").read()
        self.driver.execute_script(jQuerify)
        sleep(1)

    def xPathClick(self,xPath,info=""):
      try:
        return self.driver.find_element_by_xpath(xPath).click()
      except:
        print(info + "--点击未触发")

    def text(self,select,text,info=""):
      try:
        self.setJquery()
        self.driver.execute_script('$("'+select+'")[0].focus()')
        sleep(2)
        self.driver.execute_script('$("'+select+'").val("'+ text +'")')
        sleep(2)
        self.driver.execute_script('$("'+select+'")[0].dispatchEvent(new Event("input"))')
      except:
        print(info + "--写入未触发")
    def xPathSelect(self,xPath,text,info=""):
      try:
        selectTag = Select(self.driver.find_element_by_xpath(xPath))
        selectTag.select_by_value(text)
      except:
        print(info + "--未触发")
    def window(self,no,info=""):
      try:
        self.driver.switch_to.window(self.driver.window_handles[no])
      except:
        print(info + "--未触发切换第"+no+"窗口")
    def scroll(self,dom,height,info=""):
      try:
        self.setJquery()
        sleep(2)
        self.driver.execute_script("$('"+dom+"').scrollTop("+height+")")
      except:
        print(info + "--未触发")


