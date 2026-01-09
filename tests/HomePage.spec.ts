// Import file
import {test,expect, Locator, Page} from '@playwright/test';
import { HomePage } from '../pages/BasePage';
export interface RegisterData{
    self?: string;
}

export class RegisterPage extends HomePage {
// Khai báo tất cả Locators dùng để test trang Đăng Ký
    readonly selfName :Locator;
// Khởi tạo trang đăng ký với đối tượng 'page' của Playwright và định nghĩa các locators.
    constructor (page:Page){
        super(page);
        this.selfName= page.locator('#self');
    };

}
// Gom TCs
test.describe('Home page', () =>{
    test ('Verify that the Title contains text "Tài liệu học automation test" ', async ({page}) =>
        {
        const homePage = new HomePage(page);
        const registerPage = new RegisterPage(page);
        await homePage.open();
        await expect(page).toHaveTitle(/Tài liệu học automation test/);
        await page.getByRole('link',  {name: 'Bài học 1: Register Page'}).click();
        await expect(registerPage.selfName).toContainText('User Registration');
        });
});