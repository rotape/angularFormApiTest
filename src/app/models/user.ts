export interface User {
    id: number;
    name: string;
    surname: string;
    bornDate: { day: number, month: number, year: number };
    identification: string;
    document_type: string;
    gender: string;
    email: string;
    confirmEmail: string;
    password: string;
    matchingPassword: string;
    address: string;
}
