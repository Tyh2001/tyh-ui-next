function emitWarning() {
  if (!emitWarning.warned) {
    emitWarning.warned = true
    console.log(
      'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/d" instead of "highlight.js/lib/languages/d.js"'
    )
  }
}
emitWarning()
import lang from './d.js'
export default lang
