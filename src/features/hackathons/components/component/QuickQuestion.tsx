import React from 'react';
import { useState } from 'react';

const QuickQuestion = () => {
  const [activeQuestionId, setActiveQuestionId] = useState<null | string>(null);

  const handleAnswerToggle = (questionId: string) => {
    if (questionId === activeQuestionId) {
      setActiveQuestionId(null);
    } else {
      setActiveQuestionId(questionId);
    }
  };

  return (
    <div className="bg-white lg:mx-2.5 md:mx-6 sm:mx-2.5 mx-2 rounded-md">
      <div className="w-full">
        <div className="py-5 px-3">
          <div>
            <p className="text-lg md:text-xl xl:text-2xl text-dark-blue font-semibold">
              Frequently Asked Questions
            </p>
          </div>
          <ul className="lg:pl-5 pl-3 cursor-pointer">
            <li key="q1" onClick={() => handleAnswerToggle("q1")} className="text-dark-blue lg:my-2 my-1 text-md">
              What is a hackathon?
              <div className={activeQuestionId === "q1" ? "" : "hidden"}>
                <p className="text-sm xl:text-md text-gray-500 font-normal ml-5">
                  A hackathon is a coding marathon where teams create software or hardware solutions
                </p>
              </div>
            </li>
            <li key="q2" onClick={() => handleAnswerToggle("q2")} className="text-dark-blue lg:my-2 my-1 text-md">
              Do I need coding skills for the hackathon?
              <div className={activeQuestionId === "q2" ? "" : "hidden"}>
                <p className="text-sm xl:text-md text-gray-500 font-normal ml-5">
                  No, you don't necessarily need coding skills for a hackathon! While coding is a valuable asset in many hackathons, many roles contribute to a successful team
                </p>
              </div>
            </li>
            <li key="q3" onClick={() => handleAnswerToggle("q3")} className="text-dark-blue lg:my-2 my-1 text-md">
              Can I go to a hackathon with no experience?
              <div className={activeQuestionId === "q3" ? "" : "hidden"}>
                <p className="text-sm xl:text-md text-gray-500 font-normal ml-5">
                  Absolutely! Hackathons are a fantastic opportunity for people of all experience levels, even those with no prior experience.
                </p>
              </div>
            </li>
            <li key="q4" onClick={() => handleAnswerToggle("q4")} className="text-dark-blue lg:my-2 my-1 text-md">
              Do companies hire from hackathons?
              <div className={activeQuestionId === "q4" ? "" : "hidden"}>
                <p className="text-sm xl:text-md text-gray-500 font-normal ml-5">
                  Yes, companies absolutely hire from hackathons! Hackathons have become a popular recruitment tool
                </p>
              </div>
            </li>
            <li>
              <a href="#" className="text-md font-bold text-dark-blue">
                Other Questions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuickQuestion;