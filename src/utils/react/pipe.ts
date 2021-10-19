export function pipe<U>(...fns: Function[]) {
  return <E, >(initionalValue: any): U =>
    fns.reduce((previousValue, fn) => fn(previousValue), initionalValue);
}