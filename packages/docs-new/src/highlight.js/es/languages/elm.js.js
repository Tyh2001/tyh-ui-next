function emitWarning() {
  if (!emitWarning.warned) {
    emitWarning.warned = true
    console.log(
      'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/elm" instead of "highlight.js/lib/languages/elm.js"'
    )
  }
}
emitWarning()
import lang from './elm.js'
export default lang
