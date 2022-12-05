export type BuildMode = 'development' | 'production'

export interface Paths {
    entry: string;
    output: string;
    html: string;
    src: string;
}

export interface Options {
    mode: BuildMode,
    paths: Paths,
    isDev: boolean,
    port: number,
    analyze: boolean,
}

export interface Env {
    mode: BuildMode;
    port: number;
    analyze: boolean;
}
