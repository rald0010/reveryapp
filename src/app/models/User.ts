export interface User {
  address ? : {
    street ? : string,
    city ? : string,
    province ? : string
  };
  email ? : string;
  firstName: string;
  hide ? : boolean;
  image ? : string;
  isActive ? : boolean;
  lastName: string;
  age ? : number;
  lodge ? : string;
  position ? : string;
  balance ? : number;
  registered ? : any;
  voter ? : boolean;

}
