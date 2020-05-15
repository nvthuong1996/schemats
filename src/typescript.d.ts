/**
 * Generate typescript interface from table schema
 * Created by xiamx on 2016-08-10.
 */
import { TableDefinition } from './schemaInterfaces';
import Options from './options';
export declare function generateTableInterface(tableNameRaw: string, tableDefinition: TableDefinition, options: Options): string;
export declare function generateEnumType(enumObject: any, options: Options): string;
export declare function generateTableTypes(tableNameRaw: string, tableDefinition: TableDefinition, options: Options): string;
