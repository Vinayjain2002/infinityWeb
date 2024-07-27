import React from "react";
import banner from "../../../assets/images/hackathon.png";
import BlogPageSideBar from "./BlogPageSideBar";

interface BlogsProps {
  blogTopic: string;
  blogContent: string;
  blogImage: string[];
  level: string;
  tags: string[];
  createdBy: string;
  createdAt: Date;
}
const FeaturedBlogCard: React.FC<BlogsProps> = ({
  blogTopic,
  blogContent,
  blogImage,
  level,
  tags,
  createdBy,
  createdAt,
}) => {
  return (
    <div className="w-full">
      <div className="bg-white rounded-md shadow-md border-dark-blue border-t-1 border-r-2 border-b-1 border-l-2 border flex flex-row content-between pl-5 pr-3 py-2">
        <div className="w-full">
          <p className="text-md lg:text-xl xl:text-2xl font-semibold">
            {blogTopic}
          </p>
          <div className="mt-1">
            <p className="md:text-sm text-xs font-gray-50 ">{blogContent}</p>
          </div>
          <div className="flex mt-3">
            <p className="font-medium">Tags: </p>
            <div className="flex flex-row space-x-2 pl-4">
              {tags != undefined &&
                tags.map((tag, index) => (
                  <a
                    href="/"
                    className="text-xs lg:text-md py-1 px-2 rounded-lg bg-blue-200"
                  >
                    {tag}
                  </a>
                ))}
            </div>
          </div>
        </div>
        <div className="md:w-2/7 xl:w-1/4 w-1/3">
          <p className="text-xs text-gray-700 text-center  xl:pr-2">
            Created At:{" "}
            <span className="pl-2">
              {String(createdAt.toLocaleDateString())}
            </span>
          </p>
          <div className="md:w-[150px] w-[130px]  ml-5 mt-2 rounded-md  overflow-hidden">
            <img src={banner} className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogCard;
