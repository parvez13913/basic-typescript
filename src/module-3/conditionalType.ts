// Conditional Type

type a1 = number;
type a2 = a1 extends string ? string : null;
type a3 = undefined;
type a4 = number;
type d = a1 extends string
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

type sheikh = {
  wife1: string;
  wife2: string;
};

type CheckProperty<T, K> = K extends keyof sheikh ? true : false;

type checkWife1 = CheckProperty<sheikh, "wife1">;

type Bondhu = "Sabbir" | "Shourov" | "Rifat";

type RemoveBondhu<T, K> = T extends K ? never : T;

type CurrentBondhu = RemoveBondhu<Bondhu, "Rifat">;
