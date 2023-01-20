import {FileModel} from '../models/FileModel';

export const IFileService = 'IFileService';

export interface IFileService {
    upload<T>(rawOptions, schemaClass?: T): Promise<T | FileModel>
}
