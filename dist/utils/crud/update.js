"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRecord = void 0;
const updateRecord = async (configObj) => {
    const { model, data } = configObj;
    const updateData = await model.update({
        where: {
            id: data.id
        },
        data: {
            ...data
        }
    });
    return updateData ? updateData : null;
};
exports.updateRecord = updateRecord;
