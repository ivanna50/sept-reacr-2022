import {urls} from "../configs";
import {ICar} from "../interfaces";
import {apiService, IRes} from "./api.service";


const carService = {
    getAll: (): IRes<ICar[]> => apiService.get(urls.cars.base)


}

export {carService};