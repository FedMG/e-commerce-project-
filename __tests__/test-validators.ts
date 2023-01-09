import { isNumber, isFunction, isObject } from 'src/utils/validators'
import { CreateVerifyValues, LinkColumns } from 'additional'

const ZERO = 0
const ONE = 1

export const createVerifyScope = (objLength: number): CreateVerifyValues => {
  if (!isNumber(objLength)) {
    throw new Error('Invalid parameter: requires a number')
  }

  const ownKeys = [
    ['id', 'title', 'column'],
    ['path', 'route']
  ]

  const ownKeysLen = [ownKeys[ZERO].length, ownKeys[ONE].length]
  if (!ownKeysLen.includes(objLength)) return true

  const condition = objLength === ownKeysLen[ZERO] ? ZERO : ONE

  return (value: string): boolean => {
    return !ownKeys[condition].includes(value)
  }
}

export function verifyProps (callback: Function, obj: LinkColumns): object {
  if (!isFunction(callback)) {
    throw new Error('Invalid parameter: requires a function')
  }

  if (!isObject(obj)) {
    throw new Error('Invalid parameter: requires an object')
  }

  for (const property in obj) {
    const isNotKeyIncluded = createVerifyScope(Object.keys(obj).length)

    if (typeof isNotKeyIncluded === 'boolean') {
      if (isNotKeyIncluded) {
        throw new Error('Invalid property object')
      }
    } else if (isNotKeyIncluded(property)) {
      throw new Error('Invalid property object')
    }
  }
  return callback(obj)
}
