
export default function breadcrumbs(Page: string) {
  let finalString = 'Home'

  if (Page !== '/') {
    finalString = ''
    const string = Page.slice(1)
    const parts = string.split('/')
    const upperCaseEachParts = parts.map(item => (item.charAt(0).toUpperCase() + item.slice(1)))
    for (let i = 0; i < upperCaseEachParts.length; i++) {
      finalString += upperCaseEachParts[i] + ' / '
    }
    finalString = finalString.slice(0, -3)
  }

  return finalString
}
