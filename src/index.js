"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePdf = generatePdf;
const puppeteer_1 = __importDefault(require("puppeteer"));
async function generatePdf(reportUrl, reportName) {
    const browser = await puppeteer_1.default.launch({
        headless: false,
    });
    const pages = await browser.pages();
    const page = pages[0];
    await page.goto(reportUrl);
    try {
        await page.waitForNetworkIdle();
    }
    catch { }
    await page.pdf({
        path: `${reportName}.pdf`,
        printBackground: true,
    });
    await browser.close();
}
