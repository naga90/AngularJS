export interface User {
    fname: string;
    lname: string;
    address: {
        street: string,
        city: string,
        pincode: number
    };
    hobbies: string[];
    familymembers: {
        mem_name: number,
        age: string
    }[]

}
