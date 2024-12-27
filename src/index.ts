import chalk from 'chalk'
import { chromium } from 'playwright'

export async function generatePdf(reportUrl: string, reportName: string) {
  console.log(chalk.blueBright('Initializing playwright...'))
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  console.log(chalk.blueBright('Getting browser page instance...'))
  const page = await browser.newPage()

  console.log(chalk.blueBright(`Navigating to the report URL: '${reportUrl}'`))
  await page.goto(reportUrl)

  try {
    await page.waitForLoadState()
  } catch {}

  console.log(chalk.blueBright('Generating PDF...'))
  await page.pdf({
    path: `${reportName}.pdf`,
    printBackground: true,
  })

  console.log(chalk.greenBright('PDF generated successfully!'))
  console.log(chalk.blueBright('Closing Puppeteer...'))
  await browser.close()

  console.log(chalk.greenBright('Puppeteer closed successfully!'))
  console.log(chalk.greenBright('PDF generation completed!'))
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generatePdf }
}
