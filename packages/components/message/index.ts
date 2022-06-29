import TyhMessage from './src/TyhMessage.vue'
import { createNot, mergeOptions } from '../../utils/tips'

const options: object = { time: 2000, offset: 20 }

export const Message: Function = (opts: object): void => {
  return createNot(TyhMessage, mergeOptions(options, opts))
}
