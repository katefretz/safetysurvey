// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
                type: "radiogroup",
                name: "question1",
                title: "What is the safest place to be during an earthquake?",
                choices: [
                    "Inside a car", "Under a doorway", "Under a steardy table or desk", "Outside in an open area"
                ],
                correctAnswer: "Under a steardy table or desk"
            },
            {
                type: "radiogroup",
                name: "question2",
                title: "What should you do if you are outside during a thunderstorm?",
                choices: [
                    "Stand under a tree", "Lay flat on the ground", "Seek shelter immediately", "Run around outside"
                ],
                correctAnswer: "Seek shelter immediately"
            },
            {
                type: "radiogroup",
                name: "question3",
                title: "How do you know a tornado may be imminent?",
                choices: [
                    "Greenish sky", "Heavy rain", "Hail", "All of the above"
                ],
                correctAnswer: "All of the above"
            },
            {
                type: "radiogroup",
                name: "question4",
                title: "What is the recommended way to protect yourself during a wildfire if evacuation is not possible?",
                choices: [
                    "Hide in a basement", "Find safety in a large body of water", "Stay in a room with windows and doors closed", "Run away from the flames"
                ],
                correctAnswer: "Stay in a room with windows and doors closed"
            },
            {
                type: "radiogroup",
                name: "question5",
                title: "What is the NOT a recommended saftey measure during a hurricane?",
                choices: [
                    "Boarding up windows", "Using candles as a light source during power outages", "Evacuating to higher ground if in a flood-prone area", "Securing outdoor objects that could become projectables in high winds"
                ],
                correctAnswer: "Using candles as a light source during power outages"
            },
            {
                type: "radiogroup",
                name: "question6",
                title: "What is the primary cause of tsunamis?",
                choices: [
                    "Earthquakes", "Volcanic eruptions", "Hurricanes", "Tornados"
                ],
                correctAnswer: "Earthquakes"
            },
            {
                type: "radiogroup",
                name: "question7",
                title: "What should you do if you are driving and encounter a flooded road?",
                choices: [
                    "Speed up and drive through the water", "Turn around and find an alternative route", "Wait for emergency responders to rescue you", "Proceed with caution and honk your horn to warn others"
                ],
                correctAnswer: "Turn around and find an alternative route"
            },
            {
                type: "radiogroup",
                name: "question8",
                title: "What should you do during an earthquake if you are indoors and cannot reach a peice of furniture to take cover?",
                choices: [
                    "Stand in the doorway", "Stand in the center of the room", "Lay flat on the ground and cover your head with your arms", "Run outside"
                ],
                correctAnswer: "Lay flat on the ground and cover your head with your arms"
            },
            {
                type: "radiogroup",
                name: "question9",
                title: "What is a precautionary measure to take before a hurricane strikes?",
                choices: [
                    "Trim trees and shrubs", "Open all of the windows", "Stock up on candels", "Park your car under a tree for extra protection"
                ],
                correctAnswer: "Trim trees and shrubs"
            },
            {
                type: "radiogroup",
                name: "question10",
                title: "What is the safest course of action if you are outside and an earthquake occurs?",
                choices: [
                    "Lay flat on the ground and cover your head with your arms", "Run toward the nearest building for shelter", "Find an open area away from buildings, trees, and powerlines", "Climb up a hill for elevated safety"
                ],
                correctAnswer: "Find an open area away from buildings, trees, and powerlines"
            }];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Natural Disaster Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Natural Disaster Safety. <br>You will have 30 seconds for every question and 5 minutes to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}