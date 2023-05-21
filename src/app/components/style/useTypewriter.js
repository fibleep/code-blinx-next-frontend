'use client';
import { useEffect, useState } from "react";

const TYPING_DELAY = 150;
const PAUSE_DELAY = 1000;
const DELETING_DELAY = 50;

const useTypewriter = (languages) => {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	const [animationPhase, setAnimationPhase] = useState(0);
	const [typedText, setTypedText] = useState("");
	const steps = languages.map((lang) => lang.language);

	useEffect(() => {
		switch (animationPhase) {
			case 0: {
				const nextStep = steps[currentStepIndex].slice(0, typedText.length + 1);
				if (nextStep === typedText) {
					setAnimationPhase(1);
				} else {
					const timeout = setTimeout(() => {
						setTypedText(steps[currentStepIndex].slice(0, typedText.length + 1));
					}, TYPING_DELAY);
					return () => clearTimeout(timeout);
				}
				break;
			}
			case 1: {
				const timeout = setTimeout(() => {
					setAnimationPhase(2);
				}, PAUSE_DELAY);
				return () => clearTimeout(timeout);
			}
			case 2: {
				if (!typedText) {
					const nextIndex = currentStepIndex + 1;
					setCurrentStepIndex(steps[nextIndex] ? nextIndex : 0);
					setAnimationPhase(0);
				} else {
					const nextRemaining = steps[currentStepIndex].slice(0, typedText.length - 1);
					const timeout = setTimeout(() => {
						setTypedText(nextRemaining);
					}, DELETING_DELAY);
					return () => clearTimeout(timeout);
				}
				break;
			}
			default:
				break;
		}
	}, [animationPhase, typedText, steps, currentStepIndex]);
	return [typedText, languages[currentStepIndex].color];
};

export default useTypewriter;
