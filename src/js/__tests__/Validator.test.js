import Validator from "../Validator";

test.each([
    ["destroyer", true],
    ["destroy999r", true],
    ["destroy-er", true],
    ["destroy_er", true],
    ["destroy9999r", false],
    ["destroyerМира", false],
    ["destroyer1", false],
    ["1destroyer", false],
    ["destroyer-", false],
    ["destroyer_", false],
    ["-destroyer", false],
    ["_destroyer", false],
])(
    ("test %s"),
    (params, result) => {
        expect(Validator.validateUsername(params)).toEqual(result);
    },
);
