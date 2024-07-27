import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const PrefferenceCheckboxes = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [otherSelected, setOtherSelected]= useState(false);
  const options = [
    {id: "Full-stack developer", label: "Full-stack developer"},
    { id: "Front-end developer", label: "Front-end developer" },
    {id: "Back-end develoer", label: "Back-end develoer"},
    {id: "App developer", label: "App development"},
    {id: "UI/UX developer", label: "UI/UX developer"},
    {id: "Hacker", label: "Hacker"},
    {id: "Data Scientist", label: "Data Scientist"},
    {id: "Other", label: "Other"}
  ];

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
   
    if (checked) {
        if(name=="Other"){
            setOtherSelected(true);
        }
      setSelectedCheckboxes((prevSelectedCheckboxes) => [...prevSelectedCheckboxes, name]);
    } else {
        if(name=="Other"){
            setOtherSelected(false);
        }
      setSelectedCheckboxes((prevSelectedCheckboxes) => prevSelectedCheckboxes.filter((checkbox) => checkbox!== name));
    }
  };

  return (
    <div>
        <div className=''>
            <p className='text-dark-blue text-md font-semibold'>What's your Specialities</p>
        </div>
      <div className="flex flex-wrap">
        {options.map((option) => (
          <div className="px-2 border border-gray-300 text-center hover:border-dark-blue mx-2 my-2 rounded-md" key={option.id}>
            <input
              type="checkbox"
              id={option.id}
              name={option.id}
              checked={selectedCheckboxes.includes(option.id)}
              onChange={handleCheckboxChange}
              className='mr-2'
            />
            <label htmlFor={option.id} className="font-sm text-gray-500 ">
              {option.label}
            </label>
          </div>
        ))}
      </div>

      {/* here we are going to define the input field where the user could enter teh other Speciality */}
     {
        otherSelected &&  <div className="w-full" >
        <input type="text" className='px-5 py-1 text-md text-gray-500 border border-dark-blue focus:outline-none focus:border-dark-blue w-full rounded-md' placeholder='Enter Your Speciality'/>
      </div>
     }
    </div>
  );
};


const SkillsInput = () => {
    const skillsList = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
    const [skillentered, setSkillEntered] = useState([]);
  
    const handleAddSkill = (event) => {
        event.preventDefault(); // Prevent default form submission
        if (event.key === "Enter" && event.target.value !== "") {
            console.log(event.target.value)
        // if (skillsList.includes(event.target.value.toLowerCase())) {
            console.log("yes") // Case-insensitive check
            console.log(event.target.value)
            setSkillEntered((prevSkills) => [...prevSkills, event.target.value]);
            event.target.value = "";
        // }
        console.log(skillentered)
      }
    };
  
    const handleRemoveSkill = (removeSkillIndex) => {
      setSkillEntered((prevSkills) => prevSkills.filter((skill, index) => index !== removeSkillIndex));
    };
  
    return (
      <div>
        <div className='mt-4 mb-1'>
        <p className='text-dark-blue text-md font-semibold'>Enter Skills</p>
        </div>
        <div className='flex flex-row flex-wrap border border-dark-blue focus:outline-none focus:border-dark-blue w-full py-1  rounded-md'>
          <ul className='flex flex-row flex-wrap'>
            {skillentered.map((skills, index) => (
              <li key={index} className='border rounded-sm px-2 mx-1 border-black-200 bg-gray-50'>
                <span>{skills}</span>
                <IconButton aria-label="close" size="small"sx={{ p: 0 }} onClick={() => handleRemoveSkill(index)}>
                    <CloseIcon sx={{ p: 0 }} fontSize='small' />
                </IconButton>
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Press enter to add Skills"
            onKeyUp={event => handleAddSkill(event)}
            className='border-none focus:border-none focus:outline-none px-5'
          />
        </div>
      </div>
    );
  };
  
  const PrefferedHackathons= () => {
    const HachkathonsInterested=["Web development"]
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const [otherSelected, setOtherSelected]= useState(false);
  const options = [
    {id: "Online Hackathons", label: "Online Hackathons"},
    { id: "Offline Hackathons", label: "Offline Hackathons" },
    {id: "Beginner Friendly Hackathons", label: "Beginner Friendly Hackathons"},
    {id: "Advanced Hackathons", label: "Advanced Hackathons"},
    {id: "App Development", label: "App development"},
    {id: "Web Development", label: "Web development"},
    {id: "Artificial Intelligence", label: "Artificial Intelligence"},
    {id: "Data Sciense", label: "Data Sciense"},
    {id: "Iot", label: "Iot"},
    {id: "Gaming", label: "Gaming"},
    {id: "Hacking", label: "Hacking"},
    {id: "Blind Coding", label: "Blind Coding"},
    {id: "DevOps", label: "DevOps"},
    {id: "Other", label: "Other"}

  ];

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
   
    if (checked) {
        if(name=="Other"){
            setOtherSelected(true);
        }
      setSelectedCheckboxes((prevSelectedCheckboxes) => [...prevSelectedCheckboxes, name]);
    } else {
        if(name=="Other"){
            setOtherSelected(false);
        }
      setSelectedCheckboxes((prevSelectedCheckboxes) => prevSelectedCheckboxes.filter((checkbox) => checkbox!== name));
    }
  };
    return (
      <div className='mt-5'>
        <div className=' mb-1'>
            <p className='text-dark-blue text-md font-semibold'>What types of Hackathons are you interested in?</p>
        </div>
        <div>
        <div className="flex flex-wrap">
        {options.map((option) => (
          <div className=" px-5 w-1/4 border border-gray-300 hover:border-dark-blue mx-2 my-2 rounded-md" key={option.id}>
            <input
              type="checkbox"
              id={option.id}
              name={option.id}
              checked={selectedCheckboxes.includes(option.id)}
              onChange={handleCheckboxChange}
              className='mr-2'
            />
            <label htmlFor={option.id} className="font-sm text-gray-500 ">
              {option.label}
            </label>
          </div>
        ))}
      </div>

      {/* here we are going to define the input field where the user could enter teh other Speciality */}
     {
        otherSelected &&  <div className="w-full" >
        <input type="text" className='px-5 py-1 text-md text-gray-500 border border-dark-blue focus:outline-none focus:border-dark-blue w-full rounded-md' placeholder='Enter Your Speciality'/>
      </div>
     }
        </div>
      </div>
    )
  }
  
  
  const LevelOptions = () => {
    const options= [
      {id: "College", label: "College"},
      {id: "High School", label: "High School"},
      {id: "Middle School", label: "Middle School"}
    ]
    return (
     <div className='flex mt-3 flex-row w-full'>
      <div className='w-1/5 font-bold text-dark-blue text-md font-semibold'>Current Level:</div>
       <div className="flex flex-wrap space-x-5  w-full">
        {options.map((option) => (
          <div className="border border-gray-300 px-4 hover:border-dark-blue rounded-md" key={option.id}>
            <input
              type="checkbox"
              id={option.id}
              name={option.id}
              // checked={selectedCheckboxes.includes(option.id)}
              // onChange={handleCheckboxChange}
              className=''
            />
            <label htmlFor={option.id} className="font-sm ml-3 text-gray-500 ">
              {option.label}
            </label>
          </div>
        ))}
      </div>
     </div>
    );
  }
  

  
  const SocialMedia = () => {
    // here we are going to take the user Socail media Handlers rom the users
    const options=[
      {id: "Linked in", label: "Linked in"},
      {id: "Github", label: "Github"},
      {id: "Stack Overflow", label: "Stack Overflow"}
      ];

    return (
      <div className=''>
        <div className=''>
          <p  className='font-bold mx-2 text-dark-blue text-md font-semibold'>Socail Media</p>
        </div>
        <div className='mt-5'>
          {options.map((option)=>{
           <div className=" px-5 w-1/5 border border-gray-300 hover:border-dark-blue mx-2 my-2 rounded-md" key={option.id}>
           <input
             type="text"
             placeholder='Enter Text'
             id={option.id}
             name={option.id}
             // checked={selectedCheckboxes.includes(option.id)}
             // onChange={handleCheckboxChange}
             className='mr-2'
           />
           <label htmlFor={option.id} className="font-sm text-gray-500 ">
             {option.label}
           </label>
         </div>
          })}
        </div>
      </div>
    )
  }  
  
  const InputComponent = () => {
    return (
         <div className= 'flex mt-3 w-full'>
              <label htmlFor="" className='w-1/6 text-dark-blue text-md font-semibold'>Location:</label>
              <div className='px-3 border  focus:border-none focus:outline-none text-center rounded-md'><input type="text" className='border-none focused:border-none hover:border-none focused:outline-none' placeholder='Location here'/></div>
          </div>
    )
  }
  
  const TwoOptionComponent= ()=>{
    return(
      <div className='block mt-3'>
        <div className='text-dark-blue text-md font-semibold'><label>Are you interested in Fests:</label></div>
        <div className='flex flex-row ml-5 space-x-8'>
          <div className='flex space-x-2'>
          <input type="radio" id="yes" name="answer" value="yes" />
              <label htmlFor="yes" className='text-dark-blue text-md font-normal'>Yes</label>
          </div>
          <div className='flex space-x-2'>
          <input type="radio" id="no" name="answer" value="no" />
              <label htmlFor="no" className='text-dark-blue text-md font-normal'>No</label>
          </div>
        </div>
      </div>
    );
  }
  
  const DateSelector= ()=>{
      // here we are are going to define the component through which the user will get the data of te Dates
    return(
     <div className="w-full mt-3 flex">
          <p className='w-1/6 font-bold text-dark-blue text-md font-semibold'>Birth Date</p>
          <div class="flex flex-row w-4/5" className='space-x-3'>
          <label for="month" className='font-bold text-dark-blue text-md font-semibold'>Month:</label>
          <select id="month" name="month" className='px-2 py-1 border-dark-blue'>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="12">December</option>
          </select>
        
          <label htmlFor="year" className=' font-bold text-dark-blue text-md font-semibold'>Year:</label>
          <input type="number" id="year" name="year" min="2000" max="2024" className='border rounded-md border-dark-blue px-2'/>
        </div>
     </div>
    );

  }
  
export {PrefferenceCheckboxes, LevelOptions,SkillsInput, PrefferedHackathons,SocialMedia, InputComponent, TwoOptionComponent,DateSelector};
