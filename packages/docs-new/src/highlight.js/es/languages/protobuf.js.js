function emitWarning() {
  if (!emitWarning.warned) {
    emitWarning.warned = true
    console.log(
      'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/protobuf" instead of "highlight.js/lib/languages/protobuf.js"'
    )
  }
}
emitWarning()
import lang from './protobuf.js'
export default lang
