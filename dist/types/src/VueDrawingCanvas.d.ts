interface DataInit {
    loadedImage: any;
    drawing: boolean;
    context: any;
    images: any;
    strokes: any;
    guides: any;
    trash: any;
}
declare const _default: import("vue-demi").DefineComponent<{
    strokeType: {
        type: StringConstructor;
        validator: (value: string) => boolean;
        default: () => string;
    };
    fillShape: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: () => number;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: () => number;
    };
    image: {
        type: StringConstructor;
        default: () => string;
    };
    eraser: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    color: {
        type: StringConstructor;
        default: () => string;
    };
    lineWidth: {
        type: NumberConstructor;
        default: () => number;
    };
    lock: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    styles: {
        type: (StringConstructor | ArrayConstructor | ObjectConstructor)[];
    };
    classes: {
        type: (StringConstructor | ArrayConstructor | ObjectConstructor)[];
    };
    backgroundColor: {
        type: StringConstructor;
        default: () => string;
    };
    backgroundImage: {
        type: StringConstructor;
        default: () => any;
    };
    watermark: {
        type: ObjectConstructor;
    };
    saveAs: {
        type: StringConstructor;
        validator: (value: string) => boolean;
        default: () => string;
    };
}, unknown, DataInit, {}, {
    setContext(): Promise<void>;
    clear(): void;
    setBackground(): Promise<void>;
    drawBackgroundImage(): Promise<void>;
    getCoordinates(event: any): {
        x: any;
        y: any;
    };
    startDraw(event: any): void;
    draw(event: any): void;
    drawGuide(closingPath: any): void;
    drawShape(strokes: any, closingPath: any): void;
    stopDraw(): void;
    reset(): void;
    undo(): void;
    redo(): void;
    redraw(output: boolean): Promise<void>;
    wrapText(context: any, text: any, x: any, y: any, maxWidth: any, lineHeight: any): void;
    save(): string;
    isEmpty(): boolean;
}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, Record<string, any>, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<{
    strokeType?: unknown;
    fillShape?: unknown;
    width?: unknown;
    height?: unknown;
    image?: unknown;
    eraser?: unknown;
    color?: unknown;
    lineWidth?: unknown;
    lock?: unknown;
    styles?: unknown;
    classes?: unknown;
    backgroundColor?: unknown;
    backgroundImage?: unknown;
    watermark?: unknown;
    saveAs?: unknown;
} & {
    strokeType: string;
    fillShape: boolean;
    width: string | number;
    height: string | number;
    image: string;
    eraser: boolean;
    color: string;
    lineWidth: number;
    lock: boolean;
    backgroundColor: string;
    saveAs: string;
} & {
    styles?: unknown;
    classes?: unknown;
    backgroundImage?: string;
    watermark?: Record<string, any>;
}>, {
    strokeType: string;
    fillShape: boolean;
    width: string | number;
    height: string | number;
    image: string;
    eraser: boolean;
    color: string;
    lineWidth: number;
    lock: boolean;
    backgroundColor: string;
    backgroundImage: string;
    saveAs: string;
}>;
export default _default;
