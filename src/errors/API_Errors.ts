export class ValidationError extends Error{
    statusCode: number;
    fails: string;

    constructor(fails: string) {
        super();
        this.message = "Validation error"
        this.statusCode = 422;
        this.fails = fails;
    }
}