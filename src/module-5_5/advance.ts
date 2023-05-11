interface IModel<TData, TMethods> {
  data: TData;
  methods: TMethods;
}

interface IUserrr {
  firstName: string;
  lastName: string;
}

interface IMethods {
  fulName(): string;
}

type Model = IModel<IUserrr, IMethods>;

class UserModel implements Model {
  data: IUserrr;
  methods: IMethods;
  constructor(firstName: string, lastName: string) {
    this.data = { firstName, lastName };
    this.methods = {
      fulName: () => `${firstName} ${lastName}`,
    };
  }
}
