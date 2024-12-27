import chalk from 'chalk'
import puppeteer from 'puppeteer'

export async function generatePdf(reportUrl: string, reportName: string) {
  console.log(chalk.blueBright('Initializing Puppeteer...'))
  const browser = await puppeteer.launch({
    headless: false,
  })

  console.log(chalk.blueBright('Getting browser page instance...'))
  const pages = await browser.pages()
  const page = pages[0]

  console.log(chalk.blueBright(`Navigating to the report URL: '${reportUrl}'`))
  await page.goto(reportUrl)

  try {
    await page.waitForNetworkIdle()
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
