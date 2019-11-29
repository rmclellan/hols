const render = require('preact-render-to-string')
const cheerio = require('cheerio')
const { html } = require('../../utils')

const Logo = require('../Logo.js')

test('Logo renders link and spans properly', () => {
  const $ = cheerio.load(
    render(
      html`
        <${Logo} //>
      `,
    ),
  )
  expect($('a').length).toBe(1)
  expect($('a').attr('href')).toEqual('/')
  expect(
    $('span')
      .eq(0)
      .attr('aria-hidden'),
  ).toEqual('true')
  expect(
    $('span')
      .eq(1)
      .text(),
  ).toEqual('Canada Holidays')
})
