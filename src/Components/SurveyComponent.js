import React, { useState, useEffect } from 'react';
import * as Survey from 'survey-react';
import useLocalStorage from '../hooks/useLocalStorage';
import OutcomeComponent from './OutcomeComponent';

const myCss = {
    navigationButton: 'btn-nav',
    header: 'header',
    container: 'container',
};

function SurveyComponent({ surveyModel, version }) {
    const [cache, setCache] = useLocalStorage('surveyCache', null);
    const [outcome, setOutcome] = useState('');

    useEffect(() => {
        if (cache?.version === version) {
            surveyModel.data = cache.data;
            surveyModel.currentPageNo = cache.currentPageNo;
        } else {
            setCache({ version });
        }
    }, []);

    function handleComplete(survey) {
        setOutcome(survey.data.outcome);
        setCache(null);
    }

    function persistDataToLocalStorage({ currentPageNo, data }) {
        setCache({ ...cache, currentPageNo, data });
    }

    /* TODO/fix: if this is called *after* completing the survey,
       it resets everything except for question visibility on page 0
       (but corrects itself as soon as you try to select something) */
    function reset() {
        surveyModel.clear();
        setCache(null);
        setOutcome(null);
    }

    return (
        <div>
            {!outcome ? (
                <Survey.Survey
                    css={myCss}
                    model={surveyModel}
                    onValueChanged={persistDataToLocalStorage}
                    onComplete={handleComplete}
                />
            ) : (
                <OutcomeComponent type={outcome} />
            )}
            <button onClick={reset} className="btn-nav">
                Reset
            </button>
        </div>
    );
}

export default SurveyComponent;
