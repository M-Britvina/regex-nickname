import Validator from "../Validator";

test.each([
    [ "T", true ],
    [ "t", true ],
    [ "1", false ],
    [ "-", false ],
    [ "_", false ],
    [ "test", true ],
    [ "Test", true ],
    [ "Test1", false ],
    [ "1Test", false ],
    [ "T123t", true ],
    [ "T1234a", false ],
    [ "T1-_t", true ],
    [ "-T", false ],
    [ "T-", false ],
    [ "_T", false ],
    [ "T_", false ],
])(
    ('testing validateUsername()'),
    (name, expected) => {
        const result = new Validator().validateUsername(name);

        expect(result).toEqual(expected);
    }
);
