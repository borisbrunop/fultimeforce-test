import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { BaseEntity } from "./base-entity";

type JSONValue =
    | string
    | number
    | boolean
    | JSONObject
    | JSONArray;

interface JSONArray extends Array<JSONValue> { }

interface JSONObject {
    [x: string]: JSONValue;
}

@Entity('products')
export class Products extends BaseEntity{
    //autoincrement
    @PrimaryGeneratedColumn()
    product_id: number;

    @Column({type: 'jsonb', nullable: true, default: null})
    attributes?: JSONObject;

    @Column({type: 'varchar', length: 20, nullable: false})
    sku?: string;

    @Column({type: 'int', nullable: false})
    price?: number;

    @Column({type: 'varchar', nullable: false})
    name?: string;

    @Column({type: 'text', nullable: true, default: null})
    description?: string;
}