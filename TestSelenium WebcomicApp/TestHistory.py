from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
import unittest
from selenium.webdriver.edge.service import Service
from selenium.webdriver.support import expected_conditions as EC

class TestHistory(unittest.TestCase):
    def setUp(self):
        # Set the path to your Edge WebDriver executable
        # self.driver = webdriver.Edge(executable_path='"F:\WebDriver\msedgedriver.exe"')
        edge_service = Service(executable_path='D:\Downloads\Webdriver\msedgedriver.exe')
        self.driver = webdriver.Edge(service=edge_service)

    def test_web_history(self):
        driver = self.driver
        driver.get("http://localhost:3000/")
        time.sleep(5)

        input_home = driver.find_element(By.XPATH, "/html/body/div[1]/div/div[1]/div[1]/a/p")
        input_history = driver.find_element(By.XPATH, "/html/body/div[1]/div/nav/ul[1]/li[4]/div/a/span")

        #First History case: Đoc truyện rồi out ra, vào history
        test_comic = driver.find_element(By.CSS_SELECTOR, "a[href*='/comic/65f90375ba609768fc30cfdb']")
        test_comic.click()
        time.sleep(5)

        test_comic_chapter4 = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]/div[5]/div[1]/ol/li/a")))
        test_comic_chapter4.click()
        time.sleep(5)

        #Back to home
        # input_home.click()
        # time.sleep(2)

        #Hisory
        input_history.click()
        time.sleep(5)
        response_element1 = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]/div/div/div/div[1]/p[2]")))
        response_text1 = response_element1.text

        response1 = ""
        expected_response = "Đọc tiếp chương 4"
        if (response_text1 == expected_response):
            response1 = "true"
        else:
            response1 = "false"

        input_home.click()
        time.sleep(2)

        #Second History case: Đọc truyện đầu tiên ở chap 4, rồi chuyển sang đọc chap 5, vào history check.
        test_comic = driver.find_element(By.CSS_SELECTOR, "a[href*='/comic/65f90375ba609768fc30cfdb']")
        test_comic.click()
        time.sleep(5)

        test_comic_chapter3_comic1 = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]/div[5]/div[2]/ol/li/a")))
        test_comic_chapter3_comic1.click()
        time.sleep(5)

        #Check history again
        input_history.click()
        time.sleep(5)
        response_element2 = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]/div/div/div/div[1]/p[2]")))
        response_text2 = response_element2.text

        response2 = ""
        expected_response2 = "Đọc tiếp chương 3"
        if (response_text2 == expected_response2):
            response2 = "true"
        else:
            response2 = "false"

        input_home.click()
        time.sleep(3)

        #Third History case: Đọc truyện rồi đọc chuyện khác rồi out ra, vào history check
        test_comic = driver.find_element(By.CSS_SELECTOR, "a[href*='/comic/65f90376ba609768fc30cfdc']")
        test_comic.click()
        time.sleep(5)

        test_comic_chapter5 = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]/div[5]/div[1]/ol/li/a")))
        test_comic_chapter5.click()
        time.sleep(5)

        # Hisory
        input_history.click()
        time.sleep(5)
        response_element3 = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]/div/div/div/div[2]/p[2]")))
        response_text3 = response_element3.text

        response3 = ""

        if (response_text2 == "Đọc tiếp chương 3" and response_text3 == "Đọc tiếp chương 5"):
            response3 = "true"
        else:
            response3 = "false"
        print(response1, response2, response3)
        # # Log in
        # button_sign_in = driver.find_element(By.XPATH, '/html/body/div[1]/div/div[1]/div[3]/button[2]')
        # button_sign_in.click()
        # time.sleep(2)
        #
        # input_acc = driver.find_element(By.XPATH, '/html/body/div[3]/div/div/div/div/div[2]/form/div[1]/div/input')
        # input_acc.send_keys('minhquan123')
        # time.sleep(3)
        # input_continue1 = driver.find_element(By.XPATH, '/html/body/div[3]/div/div/div/div/div[2]/form/button[2]')
        # input_continue1.click()
        # time.sleep(3)
        #
        # intput_pass = driver.find_element(By.XPATH,
        #                                   '/html/body/div[3]/div/div/div/div/div[3]/form/div/div/div[2]/input')
        # intput_pass.send_keys('minhquanz123')
        # time.sleep(3)
        # input_continue2 = driver.find_element(By.XPATH, '/html/body/div[3]/div/div/div/div/div[3]/form/button[2]')
        # input_continue2.click()
        # time.sleep(4)
        #
        # # Fourth History case: Đăng nhập. Đoc truyện rồi out ra, vào history
        # test_comic = driver.find_element(By.CSS_SELECTOR, "a[href*='/comic/65f90375ba609768fc30cfdb']")
        # test_comic.click()
        # time.sleep(10)
        #
        # test_comic_chapter4 = WebDriverWait(driver, 5).until(
        #     EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]/div[5]/div[1]/ol/li/a")))
        # test_comic_chapter4.click()
        # time.sleep(5)
        #
        # # Hisory
        # input_history.click()
        # time.sleep(5)
        # # driver.refresh()
        # # time.sleep(5)
        # # while(True):
        # #     try:
        # #         response_element4 = WebDriverWait(driver, 10).until(
        # #             EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]/div/div/div/div[1]/p[2]")))
        # #         response_text4 = response_element4.text
        # #         response4 = ""
        # #         expected_response4 = "Đọc tiếp chương 4"
        # #         if (response_text4 == expected_response4):
        # #             response4 = "true"
        # #             break
        # #         else:
        # #             response4 = "false"
        # #             break
        # #     except:
        # #         driver.refresh()
        # #         time.sleep(5)
        #
        # response_element4 = WebDriverWait(driver, 10).until(
        #     EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]/div/div/div/div[1]/p[2]")))
        # response_text4 = response_element4.text
        # response4 = ""
        # expected_response4 = "Đọc tiếp chương 4"
        # if (response_text4 == expected_response4):
        #     response4 = "true"
        #
        # else:
        #     response4 = "false"
        #
        # # response4 = ""
        # # expected_response4 = "Đọc tiếp chương 4"
        # # if (response_text4 == expected_response4):
        # #     response4 = "true"
        # # else:
        # #     response4 = "false"
        #
        # input_home.click()
        # time.sleep(2)
        #
        # # Fifth History case: Đăng nhập. Đọc truyện đầu tiên ở chap 4, rồi chuyển sang đọc chap 5, vào history check.
        # test_comic = driver.find_element(By.CSS_SELECTOR, "a[href*='/comic/65f90375ba609768fc30cfdb']")
        # test_comic.click()
        # time.sleep(5)
        #
        # test_comic_chapter3_comic1 = WebDriverWait(driver, 5).until(
        #     EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]/div[5]/div[2]/ol/li/a")))
        # test_comic_chapter3_comic1.click()
        # time.sleep(5)
        #
        # # Check history again
        # input_history.click()
        # time.sleep(5)
        # # driver.refresh()
        # # time.sleep(5)
        # response_element5 = WebDriverWait(driver, 10).until(
        #     EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]/div/div/div/div[1]/p[2]")))
        # response_text5 = response_element5.text
        #
        # response5 = ""
        # expected_response5 = "Đọc tiếp chương 3"
        # if (response_text5 == expected_response5):
        #     response5 = "true"
        # else:
        #     response5 = "false"
        #
        # input_home.click()
        # time.sleep(3)
        #
        # # Sixth History case: Đăng nhập. Đọc truyện rồi đọc chuyện khác rồi out ra, vào history check
        # test_comic = driver.find_element(By.CSS_SELECTOR, "a[href*='/comic/65f90376ba609768fc30cfdc']")
        # test_comic.click()
        # time.sleep(5)
        #
        # test_comic_chapter5 = WebDriverWait(driver, 5).until(
        #     EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]/div[5]/div[1]/ol/li/a")))
        # test_comic_chapter5.click()
        # time.sleep(5)
        #
        # # Hisory
        # input_history.click()
        # time.sleep(5)
        # # driver.refresh()
        # # time.sleep(5)
        # response_element6 = WebDriverWait(driver, 10).until(
        #     EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]/div/div/div/div[2]/p[2]")))
        # response_text6 = response_element6.text
        #
        # response6 = ""
        #
        # if (response_text6 == "Đọc tiếp chương 3" and response_text6 == "Đọc tiếp chương 5"):
        #     response6 = "true"
        # else:
        #     response6 = "false"
        #
        # print(response4, response5, response6)

    def tearDown(self):
        # Close the browser
        self.driver.quit()


if __name__ == '__main__':
    unittest.main()
