import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
import unittest
from selenium.webdriver.edge.service import Service
from selenium.webdriver.support import expected_conditions as EC

class EgdeUITestFollow(unittest.TestCase):
    def setUp(self):
        edge_service = Service(executable_path= 'F:/WebDriver/msedgedriver.exe')
        self.driver = webdriver.Edge(service= edge_service)

    def test_web_follow(self):
        driver = self.driver
        driver.get("http://localhost:3000/")
        time.sleep(5)

        input_follow = driver.find_element(By.XPATH, '/html/body/div[1]/div/nav/ul[1]/li[3]/div/a/span')

        #test case 1: Theo doi khi chua dang nhap
        respond1 = ""
        expected_respond1 = "Theo dõi thành công"
        test_comic = driver.find_element(By.CSS_SELECTOR, "a[href*='/comic/65f90375ba609768fc30cfdb']")
        test_comic.click()
        time.sleep(3)

        button_follow = driver.find_element(By.XPATH, '/html/body/div[1]/div/div[2]/div[1]/div[2]/div/div')
        button_follow.click()
        time.sleep(2)

        response_element1 = WebDriverWait(driver, 3).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[3]/ol/li/div/div[2]")))
        response_text1 = response_element1.text

        if(response_text1 == expected_respond1):
            respond1 = "true"
        else:
            respond1 = "false"
        time.sleep(2)

        input_home = driver.find_element(By.XPATH, '/html/body/div[1]/div/div[1]/div[1]/a')
        input_home.click()
        time.sleep(2)

        #test case 2: Theo doi khi da dang nhap
        respond2 = "true"
        expected_respond2 = "Theo dõi thành công"

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

        test_comic = driver.find_element(By.CSS_SELECTOR, "a[href*='/comic/65f90375ba609768fc30cfdb']")
        test_comic.click()
        time.sleep(2)

        button_follow = driver.find_element(By.XPATH, '/html/body/div[1]/div/div[2]/div[1]/div[2]/div/div/button')
        button_follow.click()
        time.sleep(2)

        response_element2 = WebDriverWait(driver, 3).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[3]/ol/li/div/div[2]")))
        response_text2 = response_element2.text

        if(response_text2 == expected_respond2):
            respond2 = "true"
        else:
            respond2 = "false"
        time.sleep(2)

        input_home = driver.find_element(By.XPATH, '/html/body/div[1]/div/div[1]/div[1]/a')
        input_home.click()
        time.sleep(10)


        #test case 3: " unfollow khi da dang nhap"
        respond3 = ""
        expected_respond3 = "Hủy theo dõi thành công"
        test_comic = driver.find_element(By.CSS_SELECTOR, "a[href*='/comic/65f90375ba609768fc30cfdb']")
        test_comic.click()
        time.sleep(2)

        button_follow = driver.find_element(By.XPATH, '/html/body/div[1]/div/div[2]/div[1]/div[2]/div/div/button')
        button_follow.click()
        time.sleep(2)

        response_element3 = WebDriverWait(driver, 3).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[3]/ol/li/div/div[2]")))
        response_text3 = response_element3.text
        if(response_text3 == expected_respond3):
            respond3 = "true"
        else:
            respond3 = "false"

        input_home.click()
        time.sleep(10)

        #test case 4: Theo doi xong bo theo doi lien

        respond4 = ""
        expected_respond4 = "Hủy theo dõi thành công"

        # button_sign_in = driver.find_element(By.XPATH, '/html/body/div[1]/div/div[1]/div[3]/button[2]')
        # button_sign_in.click()
        # time.sleep(2)

        # input_acc = driver.find_element(By.XPATH, '/html/body/div[3]/div/div/div/div/div[2]/form/div[1]/div/input')
        # input_acc.send_keys('2151013083son@ou.edu.vn')
        # time.sleep(2)
        # input_continue1 = driver.find_element(By.XPATH, '/html/body/div[3]/div/div/div/div/div[2]/form/button[2]')
        # input_continue1.click()
        # time.sleep(2)
        #
        # intput_pass = driver.find_element(By.XPATH, '/html/body/div[3]/div/div/div/div/div[3]/form/div/div/div[2]/input')
        # intput_pass.send_keys('Nvson@2003')
        # time.sleep(2)
        # input_continue2 = driver.find_element(By.XPATH, '/html/body/div[3]/div/div/div/div/div[3]/form/button[2]')
        # input_continue2.click()
        # time.sleep(4)

        test_comic = driver.find_element(By.CSS_SELECTOR, "a[href*='/comic/65f90375ba609768fc30cfdb']")
        test_comic.click()
        time.sleep(2)

        button_follow = driver.find_element(By.XPATH, '/html/body/div[1]/div/div[2]/div[1]/div[2]/div/div/button')
        button_follow.click()
        time.sleep(1)
        button_follow.click()
        time.sleep(2)

        response_element4 = WebDriverWait(driver, 3).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[3]/ol/li/div/div[2]")))
        response_text4 = response_element4.text
        if(response_text4 == expected_respond4):
            respond4 = "true"
        else:
            respond4 = "false"

        input_home = driver.find_element(By.XPATH, '/html/body/div[1]/div/div[1]/div[1]/a')
        input_home.click()
        time.sleep(10)

        # test case 5: Spam lien tuc nit theo doi

        respond5 = ""
        expected_respond5 = "KHÔNG TÌM THẤY TRUYỆN YÊU CẦU"

        # button_sign_in = driver.find_element(By.XPATH, '/html/body/div[1]/div/div[1]/div[3]/button[2]')
        # button_sign_in.click()
        # time.sleep(2)
        #
        # input_acc = driver.find_element(By.XPATH, '/html/body/div[3]/div/div/div/div/div[2]/form/div[1]/div/input')
        # input_acc.send_keys('2151013083son@ou.edu.vn')
        # time.sleep(2)
        # input_continue1 = driver.find_element(By.XPATH, '/html/body/div[3]/div/div/div/div/div[2]/form/button[2]')
        # input_continue1.click()
        # time.sleep(2)
        #
        # intput_pass = driver.find_element(By.XPATH,
        #                                   '/html/body/div[3]/div/div/div/div/div[3]/form/div/div/div[2]/input')
        # intput_pass.send_keys('Nvson@2003')
        # time.sleep(2)
        # input_continue2 = driver.find_element(By.XPATH, '/html/body/div[3]/div/div/div/div/div[3]/form/button[2]')
        # input_continue2.click()
        # time.sleep(4)

        test_comic = driver.find_element(By.CSS_SELECTOR, "a[href*='/comic/65f90375ba609768fc30cfdb']")
        test_comic.click()
        time.sleep(2)

        button_follow = driver.find_element(By.XPATH, '/html/body/div[1]/div/div[2]/div[1]/div[2]/div/div/button')

        for i in range(3):
            button_follow = driver.find_element(By.XPATH, '/html/body/div[1]/div/div[2]/div[1]/div[2]/div/div/button')
            button_follow.click()
            time.sleep(2)
            input_follow = driver.find_element(By.XPATH, '/html/body/div[1]/div/nav/ul[1]/li[3]/div/a/span')
            input_follow.click()
            time.sleep(2)
            input_home = driver.find_element(By.XPATH, '/html/body/div[1]/div/div[1]/div[1]/a')
            input_home.click()
            time.sleep(2)
            test_comic = driver.find_element(By.CSS_SELECTOR, "a[href*='/comic/65f90375ba609768fc30cfdb']")
            test_comic.click()
            time.sleep(2)
        button_follow = driver.find_element(By.XPATH, '/html/body/div[1]/div/div[2]/div[1]/div[2]/div/div/button')
        button_follow.click()
        time.sleep(1)

        # time.sleep(4)
        # response_element5 = WebDriverWait(driver, 3).until(
        #     EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[3]/ol/li/div/div[2]")))
        # response_text5 = response_element5.text
        # if (response_text5 == expected_respond5):
        #     respond5 = "true"
        # else:
        #     respond5 = "false"
        input_follow = driver.find_element(By.XPATH, '/html/body/div[1]/div/nav/ul[1]/li[3]/div/a/span')
        input_follow.click()
        response_element5 = WebDriverWait(driver, 3).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]/h1[2]")))
        response_text5 = response_element5.text
        if(response_text5 == expected_respond5):
            respond5 = "true"
        else:
            respond5 = "false"
        time.sleep(4)

        input_home = driver.find_element(By.XPATH, '/html/body/div[1]/div/div[1]/div[1]/a')
        input_home.click()
        time.sleep(10)

        print(respond1, respond2, respond3,respond4,respond5)

    def tearDown(self):
        self.driver.quit()

if __name__ == '__main__':
    unittest.main()
