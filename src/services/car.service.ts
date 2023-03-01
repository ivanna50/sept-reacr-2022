import {urls} from "../configs";
import {ICar} from "../interfaces";
import {apiService, IRes} from "./api.service";


const carService = {
    getAll: (): IRes<ICar[]> => apiService.get(urls.cars.base),
    getById: (id: string): IRes<ICar> => apiService.get(urls.cars.byId(id)),
    create: (car: ICar): IRes<ICar> => apiService.post(urls.cars.base, car)

}

export {carService};