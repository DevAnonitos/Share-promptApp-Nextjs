import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.edge.service import Service
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import os

class Test_Sign_in(unittest.TestCase):
    def setUp(self):
        # option = webdriver.ChromeOptions()
        # option.set_capability('goog:loggingPrefs', {'performance': 'ALL'})
        # option.add_experimental_option("debuggerAddress", "127.0.0.1:9222")
        # driver = webdriver.Chrome(options=option)
        # # edge_service = Service(executable_path= 'F:/WebDriver/msedgedriver.exe')
        # # self.driver = webdriver.Edge(service= edge_service)
        option = webdriver.ChromeOptions()
        option.set_capability('goog:loggingPrefs', {'performance': 'ALL'})
        option.add_experimental_option("debuggerAddress", "127.0.0.1:9222")
        self.driver = webdriver.Chrome(options=option)

    def test_web_sign_in(self):
        self.driver.get("https://webcomic-website.vercel.app/")
        time.sleep(5)

        # while(True):
        #     time.sleep(2)
        #test case 1: Dang nhap bang gg
        button_sign_in = self.driver.find_element(By.XPATH, '/html/body/div[1]/div/div[1]/div[3]/button[2]')
        button_sign_in.click()
        time.sleep(2)

        button_sign_in_gg = self.driver.find_element(By.XPATH, '/html/body/div[3]/div/div/div/div/div[2]/div[1]/button[2]')
        button_sign_in_gg.click()
        time.sleep(2)

        input_acc_gg = self.driver.find_element(By.XPATH, '/html/body/div[1]/div[1]/div[2]/c-wiz/div/div[2]/div/div/div[1]/form/span/section/div/div/div[1]/div/div[1]/div/div[1]/input')
        input_acc_gg.send_keys('nvson522003@gmail.com')
        time.sleep(2)

        button_next1 = self.driver.find_element(By.XPATH, '/html/body/div[1]/div[1]/div[2]/c-wiz/div/div[3]/div/div[1]/div/div/button')
        button_next1.click()
        time.sleep(2)

        input_pass = self.driver.find_element(By.XPATH, '/html/body/div[1]/div[1]/div[2]/c-wiz/div/div[2]/div/div/div[1]/form/span/section[2]/div/div/div[1]/div[1]/div/div/div/div/div[1]/div/div[1]/input')
        input_pass.send_keys('Nvson@2003')
        time.sleep(2)

        button_next2 = self.driver.find_element(By.XPATH, '/html/body/div[1]/div[1]/div[2]/c-wiz/div/div[3]/div/div[1]/div/div/button')
        button_next2.click()
        time.sleep(2)

        button_next3 = self.driver.find_element(By.XPATH, '/html/body/div[1]/div[1]/div[2]/c-wiz/div/div[3]/div/div/div[2]/div/div/button')
        button_next3.click()
        time.sleep(2)

        # input_name = self.driver.find_element(By.XPATH, '/html/body/div[1]/div/div[2]/div/div/div[2]/form/div[1]/div/input')
        # input_name.send_keys('VanSon1212')
        # time.sleep(2)

        # button_next4 = self.driver.find_element(By.XPATH, '/html/body/div[1]/div/div[2]/div/div/div[2]/form/div[2]/button')
        # button_next4.click()
        # time.sleep(2)

if __name__ == '__main__':
    unittest.main()
