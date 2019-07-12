export type CharType = 'ALPHANUMERIC' | 'NUMERIC' | 'LETTERS' | 'CUSTOM'

const charset = {
  ALPHANUMERIC: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  LETTERS: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  NUMERIC: "0123456789",
}

export default (n: number, type?: CharType, chartset?: string) => {
  let s = charset[type]
  if (!s && type === 'CUSTOM') {
    if (!charset) { throw new Error('Please provide a custom chartset for "CUSTOM"') }
    s = chartset
  }
  if (!s) { s = charset.ALPHANUMERIC }

  return new Array(n).fill('').map(() => s.charAt(Math.floor(Math.random() * s.length))).join('')
};

