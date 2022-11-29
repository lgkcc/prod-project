declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
declare module '*.png' {
    const content: any;
    export default content;
}
declare module '*.jpeg' {
    const content: any;
    export default content;
}

declare const __IS_DEV__: Boolean;
