import {Page,Locator} from '@playwright/test';

export class HomePage{
     protected readonly page:Page;

    constructor(page:Page){
     this.page=page;

    };
    async open(){
        await this.page.goto('https://material.playwrightvn.com/');
    };
    async waitForVisible(locator:Locator){
        await locator.waitFor({state: 'visible'});


    }
}
