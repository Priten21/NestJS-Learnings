import { IsNumber, IsString } from "class-validator";

export class CustomerDTO {
    @IsNumber()
    id: number;

    @IsString()
    name: String;

    @IsNumber()
    age:number;
}