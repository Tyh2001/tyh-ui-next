function emitWarning() {
  if (!emitWarning.warned) {
    emitWarning.warned = true
    console.log(
      'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/ldif" instead of "highlight.js/lib/languages/ldif.js"'
    )
  }
}
emitWarning()
import lang from './ldif.js'
export default lang
