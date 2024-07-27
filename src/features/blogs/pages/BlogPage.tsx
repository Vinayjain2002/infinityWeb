import React, { useEffect, useState } from "react";
import NavBar from "../../../components/navBars/NavBar.tsx";
import Footer from "../../../components/navBars/Footer.tsx";
import BlogPageSideBar from "../components/BlogPageSideBar";
import ChatAssistant from "../../../components/chatAssistant/ChatAssistant.tsx";
import { blogData } from "../data/data.tsx";
import SearchBarComponent from "../../../components/SearchBar/SearchBarComponent.tsx";
import FilterCardsComponent from "../../../components/filters/FilterCards.tsx";
import SimilarTopics from "../components/BlogPageSideBar";
import FeaturedBlogCard from "../components/FeaturedCard.tsx";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e: any) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    // const filteredHackathons = hackathons.filter((hackathon) =>
    // hackathon.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    // setHackathons(filteredHackathons);
  };

  return (
    <div>
      <div className="bg-gray-20">
        <NavBar />
        <ChatAssistant />
        <div>
          <div className="w-full bg-dark-blue flex justify-center">
            <p className="xl:text-3xl lg:text-2xl text-lg text-white xl:py-10 lg:py-8 md:py-5 py-4">
              Join the Best Knowledgeable and Latest Blogs
            </p>
          </div>
          <div className="my-3">
            <SearchBarComponent
              btnText="Search"
              text="Search all Hackathons"
              onChange={handleSearch}
              value={searchTerm}
            />
          </div>
          <div className="my-3">
            <hr />
          </div>
          <div className="flex w-full flex-nowrap my-4">
            <div className="md:flex hidden md:w-2/5 lg:w-1/3 ml-10">
              <FilterCardsComponent />
            </div>
            <div className="h-[80vh] overflow-y-scroll lg:mr-10 md:mr-3 sm:mx-3 xl:mr-0 scrollbar"> 
              <div className="flex flex-col space-y-3">
                {blogData != undefined &&
                  blogData.map((blog, index) => (
                    <div>
                      <FeaturedBlogCard
                        blogTopic={blog.blogTopic}
                        blogContent={blog.blogContent}
                        blogImage={blog.blogImages}
                        level={blog.level}
                        tags={blog.tags}
                        createdAt={blog.createdAt}
                        createdBy={blog.createdBy}
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div className="xl:flex hidden md:w-2/5 lg:w-1/3 mx-3">
              <SimilarTopics />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
