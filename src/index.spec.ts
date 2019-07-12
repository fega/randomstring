import test from 'ava'
import r from './'

test('ALPHANUMERIC', (t) => {
  t.is(r(5, 'ALPHANUMERIC').length, 5)
})

test('CUSTOM', (t) => {
  t.is(r(5, 'CUSTOM', 'a').length, 5)
  t.is(r(5, 'CUSTOM', 'a'), 'aaaaa')

})

test('LETTERS', (t) => {
  t.is(r(5, 'LETTERS').length, 5)
})

test('NUMERIC', (t) => {
  t.is(r(5, 'NUMERIC').length, 5)
})
