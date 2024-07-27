import React from 'react'
import banner from '../../../assets/images/banner.jpg'
import loginflex from '../../../assets/images/loginflex.png'
import NavBar from '../../../components/navBars/NavBar.tsx'
import Footer from '../../../components/navBars/Footer.tsx';

const DetailedBlogPage = () => {
   return (
      <div>

         <div className='relative'>

            <div>
               <NavBar />
            </div>

            {/* blog page start */}

            <div className='flex w-full flex-row'>

               {/* side bar start */}
               <aside id="default-sidebar"
                  className="sticky top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                  aria-label="Sidebar">
                  <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                     <ul className="space-y-2 font-medium">
                        <li>
                           <a href="#"
                              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg
                                 className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 22 21">
                                 <path
                                    d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                 <path
                                    d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                              </svg>
                              <span className="ms-3">Amazon clone</span>
                           </a>
                        </li>
                        <li>
                           <a href="#"
                              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg
                                 className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 22 21">
                                 <path
                                    d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                 <path
                                    d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                              </svg>
                              <span className="ms-3">Overview</span>
                           </a>
                        </li>
                        <li>
                           <a href="#"
                              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg
                                 className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 22 21">
                                 <path
                                    d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                 <path
                                    d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                              </svg>
                              <span className="ms-3">Environment setup</span>
                           </a>
                        </li>
                        <li>
                           <a href="#"
                              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg
                                 className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 18 18">
                                 <path
                                    d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                              </svg>
                              <span className="flex-1 ms-3 whitespace-nowrap">React Router</span>
                              <span
                                 className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                           </a>
                        </li>
                        <li>
                           <a href="#"
                              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg
                                 className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 20 20">
                                 <path
                                    d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                              </svg>
                              <span className="flex-1 ms-3 whitespace-nowrap">Page Header</span>
                              <span
                                 className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                           </a>
                        </li>
                        <li>
                           <a href="#"
                              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg
                                 className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 20 18">
                                 <path
                                    d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                              </svg>
                              <span className="flex-1 ms-3 whitespace-nowrap">Homepage</span>
                           </a>
                        </li>
                        <li>
                           <a href="#"
                              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg
                                 className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 18 20">
                                 <path
                                    d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                              </svg>
                              <span className="flex-1 ms-3 whitespace-nowrap">React Context API</span>
                           </a>
                        </li>
                        <li>
                           <a href="#"
                              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg
                                 className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                              </svg>
                              <span className="flex-1 ms-3 whitespace-nowrap">Basket Feature</span>
                           </a>
                        </li>
                        <li>
                           <a href="#"
                              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg
                                 className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 20 20">
                                 <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                 <path
                                    d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                 <path
                                    d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                              </svg>
                              <span className="flex-1 ms-3 whitespace-nowrap">Authentication</span>
                           </a>
                        </li>
                     </ul>
                  </div>
               </aside>
               {/* sidebar end */}

               {/* project blog start */}
               <div className='w-full sm:w-8/12'>
                  <div className="container flex flex-row mt-2 ml-2  ">

                     <div className="p-4">
                        {/* heading */}
                        <div className='container'>
                           <p className='text-4xl mb-4'>System Design Interview Questions and Answers</p>
                           <p className='mb-2'>Last Update : Date 13/04/2024</p>
                           <hr />
                        </div>

                        {/* main containent */}
                        <div className="container">
                           <p className='text-xl'>
                              In the software engineering interview process system design round has become a standard part of the interview. If you want to get your dream job in some big tech giant companies (especially as a senior engineer) then you need to tell your approach to build a complex large scalable system. There is no standard or accurate answer to the design interview questions.
                           </p>
                           <img src={banner} className='h-64 m-6' />
                           <p className='text-xl'>
                              You may have different conversations with different interviewers. Due to the lack of experience in building a large-scale system and the open-ended nature of the system design round a lot of candidates struggle with this round. Not just junior and mid-level developers but also experienced developers feel uncomfortable in the system design round. If you are preparing yourself for this round then we recommend you to read the blog How to Crack System Design Round in Interviews. Along with this, if you also want to crack Architect, SDM, SDE, and SSE jobs then you can check out Mastering System Design Course and optimize your approach towards getting an amazing job.

                              We will discuss some common design interview questions asked by the interviewers frequently in big tech companies. We will also discuss some key points, that you should consider while designing the system and explaining the answer to the interviewer.

                              1. Design a URL Shortening Service (TinyURL)
                              URL shortening service allows users to enter a long URL, and then it returns a shorter, unique URL. These services generate a short URL if the user gives a long URL and if the user gives a short URL then it returns the original long URL.

                              Things to discuss and analyze:

                              Given a long URL, the service should generate a shorter and unique alias for it.
                              When the user hits a short link, the service should redirect to the original link.
                              Consider scalability if 1000’s URL shortening requests come every second.
                              Service handle redirects.
                              Support for custom short URLs.
                              Track click stats.
                              Delete expired URLs.
                              The system should be highly available.
                              You need to consider three things while designing this service.

                              API(REST API) – Discuss how the client will follow an approach to communicate with the service along with the load balancer which is the front end of the service.
                              Application Layer – Discuss how the worker thread or hosts that will take the long URL, generate the tiny URL and how it will store both of the URLs in the database.
                              Persistence Layer – Database
                              2. Design YouTube/Netflix (A Global Live Video Streaming Service)
                              Design a video streaming service like Youtube/Netflix where users can upload/view/search videos. The service should be scalable where a large number of users can watch and share the videos simultaneously. It will be storing and transmitting petabytes and petabytes of data.

                              Things to discuss and analyze:

                              Approach to record stats about videos e.g. the total number of views, up-votes/down-votes, etc.
                              Adding comments on videos in real-time.
                              Components:

                              OC – Clouds like AWS, and OpenConnect act as a content delivery network.
                              Backend-Database
                              Client- Any device to use Youtube/Netflix
                              3. Design Facebook Messenger or WhatsApp (A Global Chat Service)
                              Things to discuss and analyze:

                              Approach for one-on-one text messaging between users.
                              Approach for extending the design to support group chats.
                              Delivered and read status
                              What action needs to be taken if the user is not connected to the internet?
                              Push notifications
                              Sending media like images or other documents
                              Approach for providing end-to-end message encryption.
                              4. Design Quora/Reddit/HackerNews (A Social Network + Message Board Service)
                              These services allow users to post questions, share links and answer the questions of other users. Users can also comment on questions or shared links.

                              Things to discuss and analyze:

                              Approach to record stats of each answer such as the number of views, up-votes/down-votes, etc.
                              Follow options should be there for users to follow other users or topics.
                              News feed generation which means users can see the list of top questions from all the users and topics they follow on their timeline.
                              5. Design Search Typeahead(Autocomplete)
                              Typeahead service allows users to type some query and based on that it suggests top searched items starting with whatever the user has typed.

                              Things to discuss and analyze:

                              Approach to storing previous search queries
                              Real-time requirement of the system
                              Approach to keep the data fresh.
                              Approach to find the best matches to the already typed string
                              Queries per second are to be handled by the system.
                              Criteria for choosing the suggestions.
                              A total number of data to be stored.
                              Approach to find the best matches to the already typed string
                              6. Design Dropbox/Google Drive/Google Photos (A Global File Storage and Sharing Service)
                              Design a file or image hosting service that allows users to upload, store, share, delete, and download files or images on their servers and provides synchronization across various devices.

                              Things to discuss and analyze:

                              Approach to upload/view/search/share/download files or photos from any device.
                              Service should support automatic synchronization between devices, i.e., after updating a file on one device, it should get synchronized on all devices.
                              ACID (Atomicity, Consistency, Isolation, and Durability) properties should be present in the system.
                              Approach to track permission for file sharing.
                              Allowing multiple users to edit the same document.
                              The system should support storing large files up to a GB.
                              7. Design a Web Crawler
                              Design a Web Crawler scalable service that collects information (crawls) from the entire web and fetches hundreds of millions of web documents.

                              Things to discuss and analyze:

                              Approach to finding new web pages.
                              Approach to prioritize web pages that change dynamically.
                              Ensure that the crawler is not unbounded on the same domain.
                              8.  Design Facebook, Twitter, or Instagram
                              You need to design a social media service for billions of users. Most of the interviewers spend time discussing news feed generation services in these apps.

                              Features to be considered:

                              Some of the specific Twitter/Facebook/Instagram features are to be supported.
                              Privacy controls around each tweet or post.
                              Users should be able to post tweets also the system should support replies to tweets/grouping tweets by conversations.
                              Users should be able to see trending tweets/posts.
                              Direct messaging
                              Mentions/Tagging.
                              The user should be able to follow another user.
                              Things to analyze:

                              The system should be able to handle the huge amount of traffic for billions of users.
                              Number of followers
                              The number of times the tweet has been favored.
                              Components:

                              News feed generation.
                              Social graph (Friend connection networking between users or who follows whom?—? especially when millions of users are following a celebrity
                              Efficient storage and search for posts or tweets.
                              9.  Design Uber or Lyft (A Ride-Sharing Service)
                              Design a service where a user requests a ride from the app, and a driver arrives to take them to their destination. A frequently asked interview question in the system design round of interviews.

                              Architecture: Monolithic/Microservices (real-time service, Front-end (Application), and database)

                              Things to analyze and discuss:

                              The backend is primarily serving mobile phone traffic. uber app talks to the backend over mobile data.
                              How dispatch system works (GPS/ location data is what drives the dispatch system)? How efficiently can the user match request with nearby drivers?
                              How do maps and routing work in Uber? How ETAs are calculated?
                              An efficient approach to store millions of geographical locations for drivers/riders who are always on the move.
                              Approach to handle millions of updates to driver location.
                              Dispatch is mostly built using Node.js
                              Services: Business logic services are mostly written in Python.
                              Databases: Postgres, Redis, MySQL.
                              10. Design an API Rate Limiter(Github)
                              Design a service or tool that monitors the number of requests per window of time a service agrees to allow. If the number of requests exceeds the rate limit blocks all the excess calls.

                              Things to analyze and discuss:

                              Limiting the number of requests an entity can send to an API within a time window, for example, twenty requests per second.
                              Rate limiting should work for a distributed setup, as the APIs are available through a group of servers.
                              How to handle throttling (soft and hard throttling etc.).
                              11. Design a Notification System (Push Notifications):
                              Design a Notification System that monitors the number of requests a service receives and blocking excess calls when the limit is exceeded.

                              Things to analyze and discuss:

                              Facilitate real-time user engagement through timely notifications.
                              Implement user registration with customizable preferences.
                              Define events triggering notifications from external systems.
                              Generate dynamic and personalized notification content.
                              Integrate with push notification services for cross-platform delivery.
                              Optimize delivery through batch processing and user feedback.
                              Prioritize secure communication and token management for data protection.
                              Implement throttling mechanisms to control notification volume.
                              Ensure scalability with horizontal scaling and redundancy.
                              Utilize logging and auditing for monitoring, troubleshooting, and performance optimization.

                              Get 90% Course fee refund in just 90 Days! Also get 1:1 Mock Interview, Job assistance and more additional benefits on selected courses. Take up the Three 90 challenge today!
                              Feeling lost in the vast world of System Design? It's time for a transformation! Enroll in our Mastering System Design From Low-Level to High-Level Solutions - Live Course and embark on an exhilarating journey to efficiently master system design concepts and techniques.
                              What We Offer:

                              Comprehensive Course Coverage
                              Expert Guidance for Efficient Learning
                              Hands-on Experience with Real-world System Design Project
                              Proven Track Record with 100,000+ Successful Enthusiasts
                           </p>
                        </div>

                     </div>




                  </div>
               </div>
               <div className='h-64 w-3/12'>
                  <img src={loginflex} />
               </div>

            </div>
         </div>
         <div>
            <Footer />
         </div>
      </div>
   )
};

export default DetailedBlogPage