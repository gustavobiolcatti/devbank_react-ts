type Account = {
  accountNumber: number;
};

export type User = {
  name: string;
  email: string;
  password: string;
  account: Account;
};
