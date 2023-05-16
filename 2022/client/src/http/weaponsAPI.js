import { $authHost, $host } from './index';

export const createType = async (type) => {
    try {
        const { data } = await $authHost.post('api/type', type);
        return data;
    } catch (error) {
        console.error('Error creating type:', error);
        throw error;
    }
};

export const fetchTypes = async () => {
    try {
        const { data } = await $host.get('api/type');
        return data;
    } catch (error) {
        console.error('Error fetching types:', error);
        throw error;
    }
};

export const deleteType = async (id) => {
    try {
        const { data } = await $host.delete(`api/type/${id}`);
        return data;
    } catch (error) {
        console.error('Error deleting type:', error);
        throw error;
    }
};

export const createBrand = async (brand) => {
    try {
        const { data } = await $authHost.post('api/brand', brand);
        return data;
    } catch (error) {
        console.error('Error creating brand:', error);
        throw error;
    }
};

export const fetchBrands = async () => {
    try {
        const { data } = await $host.get('api/brand');
        return data;
    } catch (error) {
        console.error('Error fetching brands:', error);
        throw error;
    }
};

export const deleteBrand = async (id) => {
    try {
        const { data } = await $host.delete(`api/brand/${id}`);
        return data;
    } catch (error) {
        console.error('Error deleting brand:', error);
        throw error;
    }
};

export const createWeapon = async (weapon) => {
    try {
        const { data } = await $authHost.post('api/weapon', weapon);
        return data;
    } catch (error) {
        console.error('Error creating weapon:', error);
        throw error;
    }
};

export const fetchWeapons = async (typeId, brandId, page, limit = 5) => {
    try {
        const { data } = await $host.get('api/weapon', {
            params: { typeId, brandId, page, limit },
        });
        return data;
    } catch (error) {
        console.error('Error fetching weapons:', error);
        throw error;
    }
};

export const fetchOneWeapon = async (id) => {
    try {
        const { data } = await $host.get(`api/weapon/${id}`);
        return data;
    } catch (error) {
        console.error('Error fetching weapon:', error);
        throw error;
    }
};

export const deleteWeapon = async (id) => {
    try {
        const { data } = await $authHost.delete(`api/weapon/${id}`);
        return data;
    } catch (error) {
        console.error('Error deleting weapon:', error);
        throw error;
    }
};

export const addToBasket = async (weaponId) => {
    try {
        const { response } = await $authHost.post('api/basket', weaponId);
        return response;
    } catch (error) {
        console.error('Error adding to basket:', error);
        throw error;
    }
};

export const getBasket = async () => {
    try {
        const { data } = await $authHost.get('api/basket');
        return data;
    } catch (error) {
        console.error('Error fetching basket:', error);
        throw error;
    }
};

export const deleteFromBasket = async (weaponId) => {
    try {
        const { response } = await $authHost.delete('api/basket', weaponId);
        return response;
    } catch (error) {
        console.error('Error deleting from basket:', error);
        throw error;
    }
};