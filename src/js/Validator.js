export default class Validator {
    validateUsername(name) {
        return /^[a-z]$|^[a-z](?!.*\d{4})[a-z0-9_-]*[a-z]$/i.test(name);
    }
}
