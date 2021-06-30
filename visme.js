const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  //Go to dashboard of Visme
  await page.goto("https://dashboard.visme.co/v2/login");

  //Enter your login credentials
  await page.waitForSelector('[placeholder="Email"]');
  await page.type('[placeholder="Email"]',"muskan123sodhi@gmail.com");
  await page.waitForSelector('[placeholder="Password"]');
  await page.type('[placeholder="Password"]',"letlive#22");

  await page.waitForSelector(".el-button.login-btn.el-button--default");
  await page.click(".el-button.login-btn.el-button--default");
  await page.waitForNavigation();
  
  //Start creating your project
  let createNewButton = await page.$$(".el-button.create-button.el-button--default");
  await createNewButton[1].click();

  await page.waitForSelector(".menu-icon.menu-icon-new-project");
  await page.click(".menu-icon.menu-icon-new-project");

  await page.waitForSelector('[href="/v2/create/socialmedia"]');
  await page.click('[href="/v2/create/socialmedia"]');
  await page.waitForNavigation();

  await page.waitForSelector('[placeholder="Design anything! (Try: Facebook Post, Animated, Timeline, etc..)"]');
  await page.type('[placeholder="Design anything! (Try: Facebook Post, Animated, Timeline, etc..)"]',"Poster"); //Type the design you want to create

  await page.waitForSelector(".main-search__suggestion.main-search__suggestion--type");
  await page.click(".main-search__suggestion.main-search__suggestion--type");

  await page.waitForSelector(".banners-list__item.banners-list__item--Posters.banners-list__item--printables");
  await page.hover(".banners-list__item.banners-list__item--Posters.banners-list__item--printables");

  let selectTemplate = await page.$$(".banners-list__edit"); //Select the template of your design
  await selectTemplate[0].click();
  await page.waitForNavigation();
  
  await page.waitForSelector(".drag-inner");
  await page.click(".drag-inner");
  await page.keyboard.press("Backspace");
  
  await page.waitForSelector(".slide__background-wrapper");
  await page.click(".slide__background-wrapper");

  let selectBackground = await page.$$(".object-properties__button"); //Select background for your design
  await selectBackground[0].click();

  let selectPhotoLibrary = await page.$$(".menuItem--17dUrSp"); //Choose a background image from photo library
  await selectPhotoLibrary[2].click();
  
  await page.waitForSelector('[placeholder="Search millions of photos"]');
  await page.type('[placeholder="Search millions of photos"]',"covid"); //Type the category of image you want
  await page.keyboard.press("Enter");

  await page.waitForSelector('[alt="person holding clear glass bottle"]');
  await page.click('[alt="person holding clear glass bottle"]');

  await page.waitForSelector(".content-panel-nav-item.content-panel-nav-item--basics");
  await page.click(".content-panel-nav-item.content-panel-nav-item--basics");

  await page.waitForSelector(".content-section__header.content-section__header--Text");
  await page.click(".content-section__header.content-section__header--Text");

  await page.waitForSelector(".content-block.clearfix.contentBlock--wY05lnr");
  let chooseText = await page.$$(".content-block.clearfix.contentBlock--wY05lnr");
  await chooseText[13].click(); //Choose the text box you want
  
  //Change the dimensions of text box accordingly
  let prevDim = await page.$$(".editable-field.coords-panel__value.editable-field--center .editable-field__view");
  await prevDim[0].click();

  let newDim = await page.$$(".editable-field.coords-panel__value.coords-panel__value--space-before.editable-field--center");
  await newDim[0].click({ clickCount: 2 });
  await newDim[0].type("1599");

  await prevDim[1].click();
  await prevDim[2].click();

  let newX = await page.$$(".coords-panel__col .editable-field.coords-panel__value.editable-field--center");
  await newX[2].click({ clickCount: 2 });
  await newX[2].type("55");

  await prevDim[3].click();

  let newY = await page.$$(".editable-field__input.editable-field__coords-input.editable-field__input--center.editable-field__input--dynamic-underline-mode");
  await newY[0].click({ clickCount: 2 });
  await newY[0].type("1300");
  await page.keyboard.press("Enter");
  
  await page.waitForSelector(".canvas__zoom-overlay");
  await page.click(".canvas__zoom-overlay");

  let select = await page.$$(".drag-inner");
  await select[0].click();

  //Edit the text inside text box
  let text = await page.$$(".el.hovering .vm-text__container");
  await text[2].click({ clickCount: 2});
  await page.keyboard.press("Backspace");

  await select[0].click();

  await text[1].click({ clickCount: 2});
  await page.keyboard.press("Backspace");

  await select[0].click();

  let clicks = await page.$$(".drag-inner");
  await text[0].click({ clickCount: 2});

  await clicks[1].click();

  await page.focus(".ql-editor");
  await page.keyboard.down("Control");
  await page.keyboard.press("A");
  await page.keyboard.up("Control");
  await page.keyboard.press("Backspace");
  await page.keyboard.type("With rising cases in India, vaccination is our most effective tool in our battle against COVID-19. Contributing to the vaccination drive in India is our biggest priority right now to help Indians be healthy and safe.");
 
  let font = await page.$$(".object-properties__arrow-icon");
  await font[0].click();

  await page.waitForSelector('[data-font="Alegreya"]');
  await page.click('[data-font="Alegreya"]');
  await font[1].click(); //Choose your font

  let fontSize = await page.$$(".font-size-submenu__item");
  await fontSize[14].click(); //Changethe font size

  await page.waitForSelector(".text-editor__bold");
  await page.click(".text-editor__bold"); //Bold the text

  await page.waitForSelector(".content-panel-nav-item.content-panel-nav-item--graphics");
  await page.click(".content-panel-nav-item.content-panel-nav-item--graphics");
  
  let iconContainer = await page.$$(".graphics-item-wrapper");
  await iconContainer[2].click();

  await page.waitForSelector(".icon-category");
  let graphic = await page.$$(".icon-category");
  await graphic[18].click(); //Select category of graphics

  await page.waitForSelector(".icons-container");
  let frame = await page.$$(".icons-container");
  await frame[0].click(); //Select category of icons

  await page.waitForSelector(".graphics-icon__draggable--children-wrapper");
  let icon = await page.$$(".graphics-icon__draggable--children-wrapper");
  await icon[2].click(); //Select an icon from the category

  await page.waitForSelector(".color-picker-input__container");
  await page.click(".color-picker-input__container");

  let chooseColor = await page.$$(".color-list__item");
  await chooseColor[3].click(); //Change the color of icon
  
  //Change dimensions of icon accordingly
  let prevDimen = await page.$$(".editable-field.coords-panel__value.coords-panel__value--space-before.editable-field--center");
  await prevDimen[0].click();
  
  let newDimen = await page.$$(".editable-field.coords-panel__value.coords-panel__value--space-before.editable-field--center");
  await newDimen[0].click({ clickCount: 2 });
  await newDimen[0].type("401");
  
  await prevDimen[1].click();
  
  let prevXY = await page.$$(".editable-field.coords-panel__value.editable-field--center");
  await prevXY[2].click();
  
  let newx = await page.$$(".coords-panel__col .editable-field.coords-panel__value.editable-field--center");
  await newx[2].click({ clickCount: 2 });
  await newx[2].type("1300");
 
  await prevXY[3].click();
  
  let newy = await page.$$(".editable-field__input.editable-field__coords-input.editable-field__input--center.editable-field__input--dynamic-underline-mode");
  await newy[0].click({ clickCount: 2 });
  await newy[0].type("70");
  await page.keyboard.press("Enter");
 
  await page.waitForSelector(".canvas__zoom-overlay");
  await page.click(".canvas__zoom-overlay");
  await select[0].click();

  //Download your design
  await page.waitForSelector(".icon-btn.top-right-menu-controls__download-btn");
  await page.click(".icon-btn.top-right-menu-controls__download-btn");
  
  await page.waitForSelector(".light-popup__card.light-popup__card--medium");
  let downloadType = await page.$$(".light-popup__card.light-popup__card--medium");
  await downloadType[0].click(); //Choose the format of image

  let destination = await page.$$(".download-popup-btn__drop-down-indicator");
  await destination[0].click();

  let destinationPlace = await page.$$(".download-popup-btn__option");
  await destinationPlace[0].click(); //Select the destination where design is to be saved

  
})
();
