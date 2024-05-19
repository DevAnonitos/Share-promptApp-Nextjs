from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
import unittest
from selenium.webdriver.edge.service import Service
from selenium.webdriver.support import expected_conditions as EC


class TestAdvanceSearch(unittest.TestCase):
    def setUp(self):
        # Set the path to your Edge WebDriver executable
        # self.driver = webdriver.Edge(executable_path='"F:\WebDriver\msedgedriver.exe"')
        edge_service = Service(executable_path='D:\Downloads\Webdriver\msedgedriver.exe')
        self.driver = webdriver.Edge(service=edge_service)

    def test_web_AdvanceSearch(self):
        driver = self.driver
        driver.get("http://localhost:3000/")
        time.sleep(5)





        #First AdvanceSearch case: Chon 1 thể loại truyện duy nhất.
        input_AdvanceSearchHome = driver.find_element(By.XPATH, "/html/body/div[1]/div/nav/ul[1]/li[1]/div/a")
        input_AdvanceSearchHome.click()
        time.sleep(5)
        input_click_categories_action = driver.find_element(By.XPATH, "/html/body/div[1]/div/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/input")
        input_click_categories_action.click()
        time.sleep(5)

        input_Search = driver.find_element(By.XPATH, "/html/body/div[1]/div/div[2]/div[1]/div[2]/div[2]/div[2]/button")
        input_Search.click()
        time.sleep(5)

        comic1 = driver.find_element(By.XPATH, "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/a")
        comic1.click()
        time.sleep(5)

        response_element1 = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[1]/div/div[2]/div[1]/div[2]/ul/li[5]/div/a[1]/div")))
        response_text1 = response_element1.text
        expected_response1 = "Action"
        response1 = ""
        if(response_text1 == expected_response1):
            response1 = "true"
        else:
            response1 = "false"


        #Second AdvanceSearch case: 1 thể loại có, 1 the loại không có
        input_AdvanceSearchHome.click()
        time.sleep(5)

        input_click_categories_action = driver.find_element(By.XPATH,"/html/body/div[1]/div/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/input")
        input_click_categories_action.click()
        time.sleep(2)
        input_click_categories_anime = driver.find_element(By.XPATH, "/html/body/div[1]/div/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/input")
        input_click_categories_anime.click()
        time.sleep(5)

        input_Search = driver.find_element(By.XPATH, "/html/body/div[1]/div/div[2]/div[1]/div[2]/div[2]/div[2]/button")
        input_Search.click()
        time.sleep(5)
        response_element2 = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located(
                (By.XPATH, "/html/body/div[1]/div/div[2]/h1")))
        response_text2 = response_element2.text
        expected_response2 = "KHÔNG TÌM THẤY TRUYỆN YÊU CẦU"
        response2 = ""
        if(response_text2 == expected_response2):
            response2 = "true"
        else:
            response2 = "false"

        #Third AdvanceSearch case: 2 thể loại đều có
        # input_AdvanceSearchHome = driver.find_element(By.XPATH, "/html/body/div[1]/div/nav/ul[1]/li[1]/div/a")
        # input_AdvanceSearchHome.click()
        # time.sleep(5)
        #
        # input_searchAppearance = driver.find_element(By.XPATH, "/html/body/div[1]/div/div[2]/div[1]/div[1]/button")
        # input_searchAppearance.click()
        # time.sleep(5)
        #
        # input_click_categories_action = driver.find_element(By.XPATH,"/html/body/div[1]/div/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/input")
        # input_click_categories_action.click()
        # time.sleep(3)
        # input_click_categories_ChuyenSinh = driver.find_element(By.XPATH,"/html/body/div[1]/div/div[2]/div[1]/div[2]/div[2]/div[1]/div[4]/input")
        # input_click_categories_ChuyenSinh.click()
        # time.sleep(5)
        #
        # input_Search = driver.find_element(By.XPATH, "/html/body/div[1]/div/div[2]/div[1]/div[2]/div[2]/div[2]/button")
        # input_Search.click()
        # time.sleep(5)
        # comic2 = driver.find_element(By.XPATH, "/html/body/div[1]/div/div[2]/div[2]/div/div[1]/a")
        # comic2.click()
        # time.sleep(5)
        #
        # response_element3 = WebDriverWait(driver, 10).until(
        #     EC.presence_of_element_located(
        #         (By.XPATH, "/html/body/div[1]/div/div[2]/div[1]/div[2]/ul/li[5]/div/a[1]/div")))
        # response_text3 = response_element3.text
        # time.sleep(5)
        # response_element4 = WebDriverWait(driver, 10).until(
        #     EC.presence_of_element_located(
        #         (By.XPATH, "/html/body/div[1]/div/div[2]/div[1]/div[2]/ul/li[5]/div/a[2]/div")))
        # response_text4 = response_element4.text
        # expected_response3 = "Action"
        # expected_response4 = "Chuyển Sinh"
        # response3 = ""
        # if (response_text3 == expected_response3 and response_text4 == expected_response4):
        #     response3 = "true"
        # else:
        #     response3 = "false"


        print(response1, response2)
    def tearDown(self):
        # Close the browser
        self.driver.quit()



if __name__ == '__main__':
    unittest.main()
