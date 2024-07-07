const validateRequest = (schema) => {
    return async (req, res, next) => {
        await schema.parseAsync({
            body: req.body,
            cookies: req.cookies,
        });
        next();
    };
};
export default validateRequest;
