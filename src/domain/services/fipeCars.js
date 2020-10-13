import { api, failureCallback, successCallback } from '../api';

export const loadCars = async () => {
    return api()
        .get('carros/marcas')
        .then(successCallback)
        .catch(failureCallback);
};
