import { test, expect } from '@playwright/test';
import { BASE_URL } from '../page-objects/url';
import { HomePage } from '../page-objects/homepage';

test('Get Started', async ({page}) => { 
    await page.goto(BASE_URL);
  
    await page.locator('.getStarted_Sjon').click();
  
    await expect(page.locator('h1')).toHaveText(/Installation/);
  });
  
  test('Search Usage', async ({page}) => {
    await page.goto(BASE_URL);
  
    await page.locator('.DocSearch-Button-Placeholder').click();
  
    await page.locator('.DocSearch-Input').fill('click');
  
    await page.locator('#docsearch-hits1-item-5').click();
  
    await expect(page.locator('p:nth-child(11)')).toHaveText(/Usage/);
    
  });

  test('Check Table of Contents', async ({page}) => {
    const homePage = new HomePage(page);
    
    await page.goto(BASE_URL);
  
    await homePage.clickSearchPlaceholder();
  
    await homePage.inputDocSearch.fill('drag and drop');

    await page.locator('#docsearch-hits0-item-0').click();

    //await expect(page.locator('h1')).toHaveText(/Actions/); -- debugging

    const tocLocator = page.locator('div.tableOfContents_bqdL ul.table-of-contents li a.table-of-contents__link.toc-highlight');

    const expectedCount = 12;

    await expect(tocLocator).toHaveCount(expectedCount, {timeout: 5000});

    const tocArray = await tocLocator.allTextContents();

    //console.log('Table of Contents:', tocArray);

    const expectedArray = ['Introduction', 'Text input', 'Checkboxes and radio buttons', 'Select options',
      'Mouse click', 'Type characters', 'Keys and shortcuts', 'Upload files', 'Focus element', 'Drag and Drop',
      'Dragging manually','Scrolling'
    ];
  
    expect(tocArray).toEqual(expectedArray);
    
  });

  
  