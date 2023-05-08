// Generic Function
const createArray = <T>(param: T): T[] => {
  return [param];
};

const result = createArray<string>("Bangaldesh");
const result1 = createArray<boolean>(true);
const result2 = createArray<number>(65);
type Name = { name: string };
const result3 = createArray<Name>({ name: "Parvez" });

const createArray1 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};
function createArray2<X, Y>(param1: X, param2: Y): [X, Y] {
  return [param1, param2];
}

const result4 = createArray1<string, string>("Parvez", "Alia");
const result5 = createArray1<boolean, Array<string>>(true, ["true"]);

const myInfo = {
  name: "Parvez Rahman",
  age: 23,
  salary: 345678,
};

const addMeMyCrashMind = <T>(myInfo: T) => {
  const crush = "Alia Vat";
  const newData = { ...myInfo, crush };
  return newData;
};

const result6 = addMeMyCrashMind(myInfo);
