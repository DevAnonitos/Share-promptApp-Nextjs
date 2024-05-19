import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
import unittest
from selenium.webdriver.edge.service import Service
from selenium.webdriver.support import expected_conditions as EC

class EdgeUITestSearch(unittest.TestCase):
    def setUp(self):
        edge_service = Service(executable_path='F:/WebDriver/msedgedriver.exe')
        self.driver = webdriver.Edge(service=edge_service)

    def test_web_search(self):
        driver = self.driver
        driver.get("http://localhost:3000/")
        time.sleep(5)

        input_element = driver.find_element(By.CSS_SELECTOR, "input[placeholder='Bạn muốn mua TV?']")
        submit_button = driver.find_element(By.CSS_SELECTOR, "button[type='submit']")

        # Frist test : "Chu thuong"
        input_element.send_keys("alo")
        time.sleep(2)
        submit_button.click()
        time.sleep(5)

        respond1 = ""
        expected_respond1 = "Tenrou No Avalon"

        try:
            response_element1 = WebDriverWait(driver, 4).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "p.text-center.font-bold.truncate")))
            response_text1 = response_element1.text
            if (response_text1 == expected_respond1):
                respond1 = "true"
        except:
            try:
                response_element1 = WebDriverWait(driver, 3).until(
                    EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]")))
                respond1 = "False"
            except:
                respond1 = "Element not found"

        # Second Test: " Chu Hoa"
        input_element.clear()
        time.sleep(1)
        input_element.send_keys("DEAR")
        time.sleep(2)
        submit_button.click()
        time.sleep(5)

        respond2 = ""
        expected_respond2 = "Dear Anemone"

        try:
            response_element2 = WebDriverWait(driver, 4).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "p.text-center.font-bold.truncate")))
            response_text2 = response_element2.text
            if (response_text2 == expected_respond2):
                respond2 = "true"
        except:
            try:
                response_element2 = WebDriverWait(driver, 3).until(
                    EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]")))
                respond2 = "False"
            except:
                respond2 = "Element not found"

        # Third Test "Ki tu dac biet"
        input_element.clear()
        time.sleep(1)
        input_element.send_keys("Ngay_@@")
        time.sleep(2)
        submit_button.click()
        time.sleep(5)

        respond3 = ""
        expected_respond3 = "Cái Chết Ngay Lập Tức Và Sự Hủy Diệt Của Pháp Sư Yếu Nhất"
        try:
            response_element3 = WebDriverWait(driver, 4).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "p.text-center.font-bold.truncate")))
            response_text3 = response_element3.text
            if (response_text3 == expected_respond3):
                respond3 = "true"
        except:
            try:
                response_element2 = WebDriverWait(driver, 3).until(
                    EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]")))
                respond3 = "False"
            except:
                respond3 = "Element not found"

        # Fourth test: "Viet ko dau"
        input_element.clear()
        time.sleep(1)
        input_element.send_keys("Ngay Mai")
        time.sleep(2)
        submit_button.click()
        time.sleep(5)

        respond4 = ""
        expected_respond4 = "Ngày Mai Hai Ta Vẫn Hạnh Phúc Bên Nhau!"
        try:
            response_element4 = WebDriverWait(driver, 4).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "p.text-center.font-bold.truncate")))
            response_text4 = response_element4.text
            if (response_text4 == expected_respond4):
                respond4 = "true"
        except:
            try:
                response_element4 = WebDriverWait(driver, 3).until(
                    EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]")))
                respond4 = "False"
            except:
                respond4 = "Element not found"

        # Fifth test : "Dung tat ca cac ki tu trong ten truyen"
        input_element.clear()
        time.sleep(1)
        input_element.send_keys("Ngày Mai Hai Ta Vẫn Hạnh Phúc Bên Nhau!")
        time.sleep(2)
        submit_button.click()
        time.sleep(5)

        respond5 = ""
        expected_respond5 = "Ngày Mai Hai Ta Vẫn Hạnh Phúc Bên Nhau!"
        try:
            response_element5 = WebDriverWait(driver, 4).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "p.text-center.font-bold.truncate")))
            response_text5 = response_element5.text
            if (response_text5 == expected_respond5):
                respond5 = "true"
        except:
            try:
                response_element5 = WebDriverWait(driver, 3).until(
                    EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]")))
                respond5 = "False"
            except:
                respond5 = "Element not found"

        # Sixth test: "Khoang trong o dau"
        input_element.clear()
        time.sleep(1)
        input_element.send_keys(" Cosmos")
        time.sleep(2)
        submit_button.click()
        time.sleep(5)

        respond6 = ""
        expected_respond6 = "Cosmos"
        try:
            response_element6 = WebDriverWait(driver, 4).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "p.text-center.font-bold.truncate")))
            response_text6 = response_element6.text
            if (response_text6 == expected_respond6):
                respond6 = "true"
        except:
            try:
                response_element6 = WebDriverWait(driver, 3).until(
                    EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]")))
                respond6 = "False"
            except:
                respond6 = "Element not found"

        # Seven test: "Khoang trong o cuoi"
        input_element.clear()
        time.sleep(1)
        input_element.send_keys("Cosmos ")
        time.sleep(2)
        submit_button.click()
        time.sleep(5)

        respond7 = ""
        expected_respond7 = "Cosmos"
        try:
            response_element7 = WebDriverWait(driver, 4).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "p.text-center.font-bold.truncate")))
            response_text7 = response_element7.text
            if (response_text7 == expected_respond7):
                respond7 = "true"
        except:
            try:
                response_element6 = WebDriverWait(driver, 3).until(
                    EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]")))
                respond7 = "False"
            except:
                respond7 = "Element not found"

         # eighth test: "Khoang trong o giữa"
        input_element.clear()
        time.sleep(1)
        input_element.send_keys("Cos mos")
        time.sleep(2)
        submit_button.click()
        time.sleep(5)

        respond8 = ""
        expected_respond8 = "Cosmos"
        try:
            response_element8 = WebDriverWait(driver, 4).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "p.text-center.font-bold.truncate")))
            response_text8 = response_element8.text
            if (response_text8 == expected_respond8):
                respond8 = "true"
        except:
            try:
                response_element8 = WebDriverWait(driver, 3).until(
                    EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]")))
                respond8 = "False"
            except:
                respond8 = "Element not found"

        # ninth test case: "Chi co khoang cach"
        input_element.clear()
        time.sleep(1)
        input_element.send_keys("  ")
        time.sleep(2)
        submit_button.click()
        time.sleep(5)

        respond9 = ""
        expected_respond9 = "Tìm thấy: 0 kết quả!"
        try:
            response_element9 = WebDriverWait(driver, 3).until(
                EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]")))
            response_text9 = response_element9.text
            if(response_text9 == expected_respond9):
                respond9 = "true"
        except:
            respond9 = "false"

        print(respond1,respond2,respond3,respond4,respond5,respond6,respond7, respond8,respond9)

    def tearDown(self):
        # Close the browser
        self.driver.quit()


if __name__ == "__main__":
    unittest.main()

