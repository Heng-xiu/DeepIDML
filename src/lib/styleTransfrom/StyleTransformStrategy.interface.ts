type StyleTransformStrategy = {
  readonly IDMLAttr: string;
  transform(jsonObj: object, propName: string): object;
  transformV2(jsonObj: object, propName: string): object;
};
