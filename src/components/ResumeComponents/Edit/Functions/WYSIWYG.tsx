import DOMPurify from 'dompurify'

export function createMarkup(html:any) {
    return {
      __html: DOMPurify.sanitize(html)
    }
}