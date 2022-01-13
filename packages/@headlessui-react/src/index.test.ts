import * as HeadlessUI from './index'

/**
 * Looks a bit of a silly test, however this ensures that we don't accidentally expose something to
 * the outside world that we didn't want!
 */
it('should expose the correct components', () => {
  expect(Object.keys(HeadlessUI)).toEqual([
    'Dialog',
    'Disclosure',
    'FocusTrap',
    'ListboxStates',
    'ListboxActionTypes',
    'useListboxContext',
    'Listbox',
    'MenuStates',
    'MenuActionTypes',
    'useMenuContext',
    'Menu',
    'Popover',
    'Portal',
    'RadioGroup',
    'Switch',
    'Tab',
    'Transition',
    'useDisposables',
    'FocusTrapFeatures',
    'useFocusTrap',
    'useId',
    'useIsoMorphicEffect',
    'Focus',
    'calculateActiveIndex',
  ])
})
