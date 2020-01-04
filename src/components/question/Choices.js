import React from "react";
import Choice from "./Choice";

function Choices({ choices, nextRoute, questionnaire, updateUserQuestionnaireAnswer }) {
    const choicesArray = choices.map((choice, index) => {
        return (
            <Choice
                key={index}
                title={choice.name}
                filename={choice.filename}
                nextRoute={nextRoute}
                clickHandler={() => updateUserQuestionnaireAnswer(choice, index, questionnaire)}
            />
        );
    });

    return (
        <div className="choices-container">
            {choicesArray}
        </div>
    );
}

export default Choices;
