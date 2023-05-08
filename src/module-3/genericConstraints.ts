// Generic Consotraints

type MyinfoType = {
  name: string;
  age: number;
  salary: number;
};
const myInfoo: MyinfoType = {
  name: "Parvez Rahman",
  age: 23,
  salary: 4567854,
};

// type MandatoryType = { name: string; age: number; salary: number };
interface IMandatoryInterface {
  name: string;
  age: number;
  salary: number;
}
const addMeMyCrashMindd = <T extends IMandatoryInterface>(myInfoo: T) => {
  const crushh = "Alia Vat";
  const newDataa = { ...myInfoo, crushh };
  return newDataa;
};

const result7 = addMeMyCrashMindd<MyinfoType>(myInfoo);
