import * as HeadlessUI from './index'

/**
 * Looks a bit of a silly test, however this ensures that we don't accidentally expose something to
 * the outside world that we didn't want!
 */
it('should expose the correct components', () => {
  expect(Object.keys(HeadlessUI)).toEqual([
    'Combobox',
    'Dialog',
    'Disclosure',
    'FocusTrapFeatures',
    'FocusTrap',
    'useListboxContext',
    'ListboxStates',
    'ListboxActionTypes',
    'Listbox',
    'useMenuContext',
    'MenuStates',
    'MenuActionTypes',
    'Menu',
    'usePopoverContext',
    'PopoverStates',
    'PopoverActionTypes',
    'Popover',
    'PORTAL_ROOT_ID',
    'Portal',
    'RadioGroup',
    'Switch',
    'Tab',
    'Transition',
    'useDisposables',
    'useId',
    'useIsoMorphicEffect',
    'calculateActiveIndex',
    'Focus',
  ])
})
