function emitWarning() {
  if (!emitWarning.warned) {
    emitWarning.warned = true
    console.log(
      'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/stata" instead of "highlight.js/lib/languages/stata.js"'
    )
  }
}
emitWarning()
import lang from './stata.js'
export default lang
