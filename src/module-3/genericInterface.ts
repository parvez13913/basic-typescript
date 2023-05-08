// Generic Interface

interface ICrushInterface<T, U = null> {
  name: string;
  husband: T;
  wife?: U;
}

const myCrush: ICrushInterface<boolean> = {
  name: "Alia Vat",
  husband: false,
};
const myCrush1: ICrushInterface<string> = {
  name: "Alia Vat",
  husband: "Parvez Rahman",
};

interface IHusbandInterface {
  name: string;
  salary: number;
}

const myCrush2: ICrushInterface<IHusbandInterface> = {
  name: "Alia Vat",
  husband: {
    name: "Parvez Rahman",
    salary: 456755,
  },
};

interface IPersonInterface {
  name: string;
  age: number;
}

const myCrush3: ICrushInterface<IPersonInterface, IPersonInterface> = {
  name: "Alia Vat",
  husband: {
    name: "Parvez Rahman",
    age: 22,
  },
  wife: {
    name: "Salma Khatun",
    age: 24,
  },
};
