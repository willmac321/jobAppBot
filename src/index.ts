import { Browser, Builder, By } from 'selenium-webdriver';
import * as dotenv from 'dotenv';


const main = async () => {
  dotenv.config();
  let driver;
  try {
    driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    await driver.get('https://loblollysoftware.com');
    let email = await driver.findElement(By.xpath("//*[contains(text(),'Email address:')]//following::input"));
    email.sendKeys(process.env.EMAIL);
  } catch {
    if (driver) await driver.quit();
  }
};

main();
