function emitWarning() {
  if (!emitWarning.warned) {
    emitWarning.warned = true
    console.log(
      'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/hy" instead of "highlight.js/lib/languages/hy.js"'
    )
  }
}
emitWarning()
import lang from './hy.js'
export default lang
