export const NAV_TAB = 'NAV_TAB'
export const NAV_OTHER = 'NAV_OTHER'
export const RESET_NAV = 'RESET_NAV'

export function navTab(value) {
  return {
    type: NAV_TAB,
    value
  }
}

export function navOther() {
  return {
    type: NAV_OTHER
  }
}

export function resetNav() {
  return {
    type: RESET_NAV
  }
}
