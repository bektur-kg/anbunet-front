export const hasNonNullProperty = (obj) => Object.values(obj).some(value => value !== null)