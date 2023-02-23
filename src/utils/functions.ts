export const getYear = (): number => new Date().getFullYear()
export const isFunction = (callback: any): boolean => typeof callback === 'function'
export const isObject = (obj: any): boolean => typeof obj === 'object'
export const isNumber = (num: any): boolean => typeof num === 'number' && !isNaN(num)
export const isBoolean = (bool: any): boolean => typeof bool === 'boolean'
