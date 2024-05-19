from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
import unittest
from selenium.webdriver.edge.service import Service
from selenium.webdriver.support import expected_conditions as EC

class TestComment(unittest.TestCase):
    def setUp(self):
        # Set the path to your Edge WebDriver executable
        # self.driver = webdriver.Edge(executable_path='"F:\WebDriver\msedgedriver.exe"')
        edge_service = Service(executable_path='D:\Downloads\Webdriver\msedgedriver.exe')
        self.driver = webdriver.Edge(service=edge_service)

    def test_web_Comment(self):
        driver = self.driver
        driver.get("http://localhost:3000/")
        time.sleep(5)

        input_home = driver.find_element(By.XPATH, "/html/body/div[1]/div/div[1]/div[1]/a")

        # Log in
        button_sign_in = driver.find_element(By.XPATH, '/html/body/div[1]/div/div[1]/div[3]/button[2]')
        button_sign_in.click()
        time.sleep(2)

        input_acc = driver.find_element(By.XPATH, '/html/body/div[3]/div/div/div/div/div[2]/form/div[1]/div/input')
        input_acc.send_keys('minhquan123')
        time.sleep(3)
        input_continue1 = driver.find_element(By.XPATH, '/html/body/div[3]/div/div/div/div/div[2]/form/button[2]')
        input_continue1.click()
        time.sleep(3)

        intput_pass = driver.find_element(By.XPATH,
                                          '/html/body/div[3]/div/div/div/div/div[3]/form/div/div/div[2]/input')
        intput_pass.send_keys('minhquanz123')
        time.sleep(3)
        input_continue2 = driver.find_element(By.XPATH, '/html/body/div[3]/div/div/div/div/div[3]/form/button[2]')
        input_continue2.click()
        time.sleep(4)

        #First Comment case: Test Comment + Like + Trả lời 1 comment ở 1 truyện
        comic1 = driver.find_element(By.XPATH, "/html/body/div[1]/div/div[2]/div/div/div[3]/a")
        comic1.click()
        time.sleep(5)

        comment_comic1 = driver.find_element(By.XPATH, "/html/body/div[1]/div/div[2]/div[7]/form/div/div/textarea")
        comment_comic1.send_keys("Hello VN")
        time.sleep(5)

        button_send = driver.find_element(By.XPATH, "/html/body/div[1]/div/div[2]/div[7]/form/button")
        button_send.click()
        time.sleep(5)

        response_element1 = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located(
                (By.XPATH, "/html/body/div[1]/div/div[2]/div[8]/div/div[1]/div[2]/div[2]/div")))
        response_text1 = response_element1.text
        expected_response1 = "Hello VN"
        response1 = ""
        if(response_text1 == expected_response1):
            response1 = "true"
        else:
            response1 = "false"

        print(response1)
    def tearDown(self):
        # Close the browser
        self.driver.quit()


if __name__ == '__main__':
    unittest.main()
