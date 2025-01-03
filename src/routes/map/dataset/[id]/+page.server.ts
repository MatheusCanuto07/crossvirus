import type { PageServerLoad } from './$types';
import {datasetC} from '$db/controller'; 
import { error } from '@sveltejs/kit';



export const load = (async ({locals, params}) => {
    const dataSetId = Number(params.id);
    const dataSet = await datasetC.getDatasetWithRows(dataSetId);
    if(!dataSet){
        return error(404, 'Data set not found');  
    }
    return {dataSet};
}) satisfies PageServerLoad;