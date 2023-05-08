// Mapped Type

const arryOfNumbers = [1, 2, 3];
const arryOfStrings = arryOfNumbers.map((number) => number.toString());

type AreaNumber = {
  hight: number;
  width: number;
};

// LookUp Type
type A = AreaNumber["hight"];
// width|Hight
type B = keyof AreaNumber;

type AreaString = {
  hight: string;
  width: string;
};
type AreaReadOnly = {
  readonly hight: number;
  readonly width: number;
};

const rectangellArea: AreaReadOnly = {
  hight: 20,
  width: 10,
};

type Area<T> = {
  //   [key in keyof AreaNumber]: AreaNumber[key];
  [key in keyof T]: T[key];
};
const area: Area<{ hight: number; width: number }> = { hight: 10, width: 20 };
