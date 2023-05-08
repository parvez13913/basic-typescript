// Generic Type

type GenericTupleType<X, Y> = [X, Y];
const relation: GenericTupleType<string, string> = [
  "Parvez Rahman",
  "Alia Vat",
];

// type RelationWithSalaryType = { name: string; salary: number };
interface RelationWithSalaryInterface {
  name: string;
  salary: number;
}

const relationWithSalary: GenericTupleType<
  RelationWithSalaryInterface,
  string
> = [{ name: "Parvez Rahman", salary: 67890 }, "Alia Vat"];

type GenericArry<T> = Array<T>;

const roolNumbers1: GenericArry<number> = [13, 22, 24];
const roolNumbers2: GenericArry<string> = ["14", "33", "54"];

type nameRollType = { name: string; roll: number };
const userRollNumberAndName: GenericArry<nameRollType> = [
  {
    name: "Parvez Rahman",
    roll: 760,
  },
  {
    name: "Abir Hassan",
    roll: 75,
  },
];
