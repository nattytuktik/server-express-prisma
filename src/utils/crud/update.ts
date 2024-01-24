

import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { Schema } from 'inspector';

const updateRecord = async (configObj: DataObj) => {

    const { model, data } = configObj;

    const updateData = await model.update({
        where: {
            id: data.id
        },
        data: {
            ...data
        }
    })

    return updateData ? updateData : null
}


interface DataObj {
    id: number
    data: any,
    model: any
}

export {
    updateRecord
}