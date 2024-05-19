import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.edge.service import Service
from selenium.webdriver.support import expected_conditions as EC

class TestRank(unittest.TestCase):
    def setUp(self):
        edge_service = Service(executable_path='F:/WebDriver/msedgedriver.exe')
        self.driver = webdriver.Edge(service=edge_service)
    def test_web_rank(self):
        driver = self.driver
        driver.get("http://localhost:3000/")
        time.sleep(5)

    #test case 1: Nhan rank khi chua co dang nhap
        respond1 = ""
        expected_respond1 = "Three friends lam bai tap kiem thu phan mem"

        input_rank = driver.find_element(By.XPATH, '/html/body/div[1]/div/nav/ul[1]/li[5]/div/a/span')
        input_rank.click()
        time.sleep(2)

        respond_element1 = WebDriverWait(driver,3).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]/p[1]")))
        respond_text1 = respond_element1.text

        if(respond_text1 == expected_respond1):
            respond1 = "true"
        else:
            respond1 = "false"

    #tese case 2: Nhan rank khi da dang nhap
        respond2 = ""
        expected_respond2 = "Three friends lam bai tap kiem thu phan mem"

        button_sign_in = driver.find_element(By.XPATH, '/html/body/div[1]/div/div[1]/div[3]/button[2]')
        button_sign_in.click()
        time.sleep(2)

        input_acc = driver.find_element(By.XPATH, '/html/body/div[3]/div/div/div/div/div[2]/form/div[1]/div/input')
        input_acc.send_keys('2151013083son@ou.edu.vn')
        time.sleep(2)
        input_continue1 = driver.find_element(By.XPATH, '/html/body/div[3]/div/div/div/div/div[2]/form/button[2]')
        input_continue1.click()
        time.sleep(2)

        intput_pass = driver.find_element(By.XPATH, '/html/body/div[3]/div/div/div/div/div[3]/form/div/div/div[2]/input')
        intput_pass.send_keys('Nvson@2003')
        time.sleep(2)
        input_continue2 = driver.find_element(By.XPATH, '/html/body/div[3]/div/div/div/div/div[3]/form/button[2]')
        input_continue2.click()
        time.sleep(2)

        input_rank = driver.find_element(By.XPATH, '/html/body/div[1]/div/nav/ul[1]/li[5]/div/a/span')
        input_rank.click()
        time.sleep(2)

        respond_element2 = WebDriverWait(driver, 3).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]/p[1]")))
        respond_text2 = respond_element2.text

        if (respond_text2 == expected_respond2):
            respond2 = "true"
        else:
            respond2 = "false"

        print(respond1, respond2)

if __name__ == '__main__':
    unittest.main()
