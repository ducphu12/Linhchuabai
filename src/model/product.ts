import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name:'products'})
export class Product{
    @PrimaryGeneratedColumn({type:'int'})
    public readonly id :number;
    @Column({type:'varchar'})
    public name:string;
    @Column({type:'double'})
    public price:string;
    @Column({type:'double'})
    public description:string;
    @Column({type:'varchar'})
    public quantity:string;
}