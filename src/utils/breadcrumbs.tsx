
export default function breadcrumbs(Page: string) {
  let FinalString = ''

  if (Page !== '/') {
    const string = Page.slice(1)
    const parts = string.split('/')
    const UpperCaseEachParts = parts.map(item => (item.charAt(0).toUpperCase() + item.slice(1)))
    for (let i = 0; i < UpperCaseEachParts.length; i++) {
      FinalString += UpperCaseEachParts[i] + ' / '
    }
    FinalString = FinalString.slice(0, -3)
  } else {
    FinalString = 'Home'
  }

  return FinalString
}
