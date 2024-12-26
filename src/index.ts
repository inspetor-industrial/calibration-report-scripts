import puppeteer from 'puppeteer'

export async function generatePdf(reportUrl: string, reportName: string) {
  const browser = await puppeteer.launch({
    headless: false,
  })
  const pages = await browser.pages()
  const page = pages[0]

  await page.goto(reportUrl)

  try {
    await page.waitForNetworkIdle()
  } catch {}

  await page.pdf({
    path: `${reportName}.pdf`,
    printBackground: true,
  })

  await browser.close()
}
