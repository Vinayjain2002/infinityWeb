import React from "react";
import BlogPageSideBarLine from "./BlogPageSideBarLine";

const SimilarTopics = () => {
  const relatedTopics = ["ncdjnc", "nekwlf", "nfjn"];

  return (
    <div className="w-full">
      <div className="col bg-blue-300 rounded-lg">
        <div className="pl-3 py-2">
          <div className="text-md font-medium lg:text-xl md:text-lg">
            Similar Topics
          </div>
          <ul className="my-1 flex flex-col">
            {relatedTopics &&
              relatedTopics.map((relatedTopic, index) => (
                <li key={index}>
                  <BlogPageSideBarLine heading={relatedTopic} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SimilarTopics;
