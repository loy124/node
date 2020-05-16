// const puppeteer = require('puppeteer');

// const main = async() => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage(); //새탭을 오픈할떄까지 자동화
//     await page.goto('https://google.com'); // 크로미움을 실행하고 새페이지를 만들어서 구글로 이동한다
//     await page.screenshot({ path: 'screenshot.png' }); //스크린샷찍기
//     await browser.close(); //puppeteer 종료
// };
// main();

// const puppeteer = require('puppeteer');
// const fs = require('fs');

// const main = async() => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://www.megabox.co.kr/', {
//         waitUntil: 'networkidle2',
//     }); //waitUntil을 통해 언제까지 기다릴지 설정
//     await page.waitFor(6000); //로드타임을 위해 waitFor
//     const html = await page.content();
//     fs.writeFileSync('example.html', html); //example.html
//     await browser.close();
// };

// main();

const puppeteer = require('puppeteer');

const main = async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://google.com', { waitUntil: 'networkidle2' });
    await page.pdf({ path: 'test.pdf', format: 'A4' });
    await browser.close();
};

main();