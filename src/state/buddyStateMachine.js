const transitions = {
    stopped: { past_time: "walking" },
    walking: { past_time: "sleeping" },
    happy: { past_time: "walking" },
};

function getNextState(currentState, event) {
    if (event === "interaction") {
        return "happy";
    }

    return transitions[currentState]?.[event];
}

const buddyStateMachine = {
    getNextState,
};

export default buddyStateMachine;
