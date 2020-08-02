import { IUser} from '../interfaces/user.interface';

export class User implements IUser{
 constructor(
     public id: number,
     public login: string,
     public password: string,
     public email: string
     ){}
}