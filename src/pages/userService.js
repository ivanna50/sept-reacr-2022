import {apiService} from "../services";
import {urls} from "../configs";

const userService={
    create:(user)=>apiService.post(urls.users,user)
}
export {userService};