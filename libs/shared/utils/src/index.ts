export * from './lib/sort-by-key'

export function classNames(...classes: unknown[]) {
  return classes.filter(Boolean).join(' ');
}
