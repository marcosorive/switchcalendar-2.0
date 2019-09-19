import {IUser} from "../interfaces/IUser";
import {UserRepository} from "../repositories/UserRepository";

export class UserService {

    constructor(private userRepository: UserRepository) {}


    // Public methods

    public async usernameExists(username: string): Promise<boolean> {
        return await this.userRepository.getUserWithUserName(username) ?  true : false;
    }

    public async emailExists(email: string): Promise<boolean> {
        return await this.userRepository.getUserWithEmail(email) ?  true : false;
    }

    public async addUser(username: string, email: string, pass: string): Promise<IUser> {
        return await this.userRepository.addUser(username, email, pass);
    }

    public sendConfirmationEmail(user: IUser) {
        console.log(user);
    }

}