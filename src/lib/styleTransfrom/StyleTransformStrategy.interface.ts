type StyleTransformStrategy = {
  readonly IDMLAttr: string;
  transform(jsonObj: object, propName: string): object;
};
