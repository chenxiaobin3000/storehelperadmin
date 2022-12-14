import defaultSettings from '@/settings'

const title = defaultSettings.title || 'éć°ĺŠć'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
