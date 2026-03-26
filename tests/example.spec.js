// @ts-check
//Case1 - Calling through browser
const test = Require('@playwright/test')
test('Browser context page', await ({Browser})=>
  {
    const context = await Browser.NewContext();
    const page = context.newPage();
  }
    );

// Case 2
import { test, expect } from '@playwright/test';

test('page context browser', await ({page})==>
     {
 Page.goto('https://www.google.com');
}
