import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.edge.service import Service
from selenium.webdriver.support import expected_conditions as EC

class TestCategories(unittest.TestCase):
    def setUp(self):
        # Set the path to your Edge WebDriver executable
        # self.driver = webdriver.Edge(executable_path='"F:\WebDriver\msedgedriver.exe"')
        edge_service = Service(executable_path='D:\Downloads\Webdriver\msedgedriver.exe')
        self.driver = webdriver.Edge(service=edge_service)

    def test_web_categories(self):
        driver = self.driver
        driver.get("http://localhost:3000/")
        time.sleep(5)

        input_home = driver.find_element(By.XPATH, "/html/body/div[1]/div/div[1]/div[1]/a/p")
        input_category = driver.find_element(By.XPATH, "/html/body/div[1]/div/nav/ul[1]/li[2]/div/a/span")

        #First Categories case: Thể loại truyện not null và có 1 thể loại
        input_category.click()
        time.sleep(3)

        test_click_categories = driver.find_element(By.CSS_SELECTOR, "a[href*='/tags/65f9036c61fdfa8e07f48ba7']")
        test_click_categories.click()
        time.sleep(10)

        test_comic1 = driver.find_element(By.CSS_SELECTOR, "a[href*='/comic/65f90723ba609768fc30d078']")
        test_comic1.click()
        time.sleep(5)

        response_element1 = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]/div[1]/div[2]/ul/li[5]/div/a[3]/div")))
        response_text1 = response_element1.text
        response1 = ""
        expected_response = "Chuyển Sinh"

        if(response_text1 == expected_response):
            response1 = "true"
        else:
            response1 = "false"

        # # Second Categories case: Thể loại truyện not null và có nhiều thể loại
        input_category.click()
        time.sleep(3)

        test_click_categories = driver.find_element(By.CSS_SELECTOR, "a[href*='/tags/65f9036d61fdfa8e07f48bb']")
        test_click_categories.click()
        time.sleep(10)

        test_comic1 = driver.find_element(By.CSS_SELECTOR, "a[href*='/comic/65f90723ba609768fc30d078']")
        test_comic1.click()
        time.sleep(5)

        response_element2 = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]/div[1]/div[2]/ul/li[5]/div/a[5]/div")))
        response_text2 = response_element2.text
        response2 = ""
        expected_response2 = "Harem"

        if (response_text2 == expected_response2):
            response2 = "true"
        else:
            response2 = "false"

        #Third Categories case: Trường hợp thể loại không có truyện.
        input_category.click()
        time.sleep(3)

        test_click_categories = driver.find_element(By.CSS_SELECTOR, "a[href*='/tags/65f9036d61fdfa8e07f48bb7']")
        test_click_categories.click()
        time.sleep(10)

        response_element3 = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located(
                (By.XPATH, "/html/body/div[1]/div/div[2]/h1")))
        response_text3 = response_element3.text
        response3 = ""
        expected_response3 = "KHÔNG TÌM THẤY TRUYỆN YÊU CẦU"

        if (response_text3 == expected_response3):
            response3 = "true"
        else:
            response3 = "false"
        print(response1, response2, response3)


    def tearDown(self):
        # Close the browser
        self.driver.quit()


if __name__ == '__main__':
    unittest.main()
