export type Mods = Record<string, boolean | string>

const classNames = (className: string, mods: Mods = {}, additional:string[] = []):string => [
  className,
  ...Object.entries(mods)
    .filter(([, value]) => Boolean(value))
    .map(([cls]) => cls),
  ...additional.filter(Boolean),
].join(' ');
export default classNames;
