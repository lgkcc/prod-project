export type BuildMode = 'development' | 'production'

export interface Paths {
    entry: string;
    output: string;
    html: string;
}

export interface Options {
    mode: BuildMode,
    paths: Paths,
    isDev: boolean,
    port: number
}

export interface Env {
    mode: BuildMode;
    port: number;
}
