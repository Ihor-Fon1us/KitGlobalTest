export class ValidationError extends Error{
    constructor(fails: string) {
        super();
        this.message = "Validation error"
        this.statusCode = 422;
        this.fails = fails;
    }
}