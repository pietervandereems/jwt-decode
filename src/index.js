import jwtDecode from 'jwt-decode'
import * as stringify from 'string.ify'

const convertToken = (ev) => {
  const pretty = stringify.configure({ fancy: false, indentation: '  ' })

  const value = (ev instanceof ClipboardEvent)
    ? (ev.clipboardData || window.clipboardData).getData('text')
    : ev.target.value

  const token = jwtDecode(value)
  const times = {
    Issued_AT: new Date((token.iat || 0) * 1000),
    EXPiration_time: new Date((token.exp || 0) * 1000)
  }

  document.querySelector('pre').innerText = pretty({
    token,
    times
  })
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('textarea').addEventListener('change', convertToken)
  document.querySelector('textarea').addEventListener('paste', convertToken)
})
