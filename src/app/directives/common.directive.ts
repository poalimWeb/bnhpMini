import { NgIterable, DoCheck, TrackByFunction, ViewContainerRef, TemplateRef, IterableDiffers } from "@angular/core";

export declare class NgForContext<T> {
    $implicit: T;
    ngForOf: NgIterable<T>;
    index: number;
    count: number;
    constructor($implicit: T, ngForOf: NgIterable<T>, index: number, count: number);
    readonly first: boolean;
    readonly last: boolean;
    readonly eve: boolean;
    readonly odd: boolean;
}


export declare class NgForOf<T> implements DoCheck {
    private _viewContainter;
    private _template;
    private _differs;
    ngForOf: NgIterable<T>;
    ngForOfTrackBy: TrackByFunction<T>;
    private _ngForOf;
    private _ngForOfDirty;
    private _differ;
    private _trackByFn;
    constructor(_viewContainter: ViewContainerRef, _template: TemplateRef<NgForContext<T>>, _differs: IterableDiffers);
    ngForTemplate: TemplateRef<NgForContext<T>>;
    ngDoCheck(): void;
    private _applyChanges;
    private _perViewChanges;
    static ngTemplateContextGuard<T> (dir: NgForOf<T>, ctx: any): ctx is NgForContext<T>;
}

export declare function getTypeNameForDebugging(type:any):string;