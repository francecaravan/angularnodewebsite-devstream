#You need to require the gem "selenium-driver"
require "selenium-webdriver" 

#... see webdriver ruby api docs here: http://selenium.googlecode.com/svn/trunk/docs/api/rb/_index.html
#... Most usefull classes are Driver and Element, check them out for a good start
driver = Selenium::WebDriver.for :firefox
#driver.navigate.to "http://www.google.com"
driver.navigate.to "file:///Users/karltaylor/Documents/francecaravan%20variants/francecaravan/website/index.html#/home"
#element = driver.find_element(:name, 'q')
element = driver.find_class(:class, 'btn-login-style')
element.send_keys "Hello WebDriver!"
element.submit
#puts driver.title
driver.quit
