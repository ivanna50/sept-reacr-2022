import {apiService} from "./apiService";
import {IUser} from "../interface/userInterface";
import {IRes} from "../interface/responseInterface";

const userService={
    getAll:():IRes<IUser[]> => apiService.get('/users')
}

export {userService};