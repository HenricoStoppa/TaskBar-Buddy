import buddyStateMachine from "../src/state/buddyStateMachine.js";

describe("Timed Events", () => {
    test("After `stopped state`, buddy goes to `walking state`", () => {
        const currentState = "stopped";
        const event = "past_time";

        const nextState = buddyStateMachine.getNextState(currentState, event);

        expect(nextState).toBe("walking");
    });

    test("After `walking state`, buddy goes to `sleeping state`", () => {
        const currentState = "walking";
        const event = "past_time";

        const nextState = buddyStateMachine.getNextState(currentState, event);

        expect(nextState).toBe("sleeping");
    });

    test("After `happy state`, buddy goes to `walking state`", () => {
        const currentState = "happy";
        const event = "past_time";

        const nextState = buddyStateMachine.getNextState(currentState, event);

        expect(nextState).toBe("walking");
    });
});

describe("Interaction Events", () => {
    test("While in `stopped state` after `interaction`, buddy goes to `happy state`", () => {
        const currentState = "stopped";
        const event = "interaction";

        const nextState = buddyStateMachine.getNextState(currentState, event);

        expect(nextState).toBe("happy");
    });

    test("While in `walking state` after `interaction`, buddy goes to `happy state`", () => {
        const currentState = "walking";
        const event = "interaction";

        const nextState = buddyStateMachine.getNextState(currentState, event);

        expect(nextState).toBe("happy");
    });

    test("While in `sleeping state` after `interaction`, buddy goes to `happy state`", () => {
        const currentState = "sleeping";
        const event = "interaction";

        const nextState = buddyStateMachine.getNextState(currentState, event);

        expect(nextState).toBe("happy");
    });
});
