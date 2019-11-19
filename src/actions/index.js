import { isTypeLiteralNode } from "typescript";

export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const UPDATE_PRICE = "UPDATE_PRICE";

export const addFeature = feature => {
    return {
        type: ADD_FEATURE,
        payload: feature
    };
};

export const removeFeature = feature => {
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}

export const updatePrice = () => {
    return {
        type: UPDATE_PRICE
    }
}

