export type Mods = Record<string, boolean | string>

const classNames = (className: string, mods?: Mods, additional?:string[]):string => {
    return [
        className,
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([cls]) => cls),
        ...additional].join(' ')
}
export default classNames
