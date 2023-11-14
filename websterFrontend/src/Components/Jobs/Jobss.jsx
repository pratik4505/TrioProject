import React, { useState,useEffect } from "react";
import "./jobss.scss";
import Job from "./Job";
import Cjob from "./Cjob";
import getJwtTokenFromCookie from "../../utils/cookieData";
const jobToFetch = 5;
const jwtToken = getJwtTokenFromCookie();
export default function Jobss() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [company, setCompany] = useState("");
  const [jobsData, setJobsData] = useState([]);
  const [currJobData, setCurrJobData] = useState(null);
  const [loadMore, setLoadMore] = useState(false);
  const [isAll,setIsAll] = useState(true);

  const jobHandler = (data) => {
    setCurrJobData(data);
  };

  const loadJobHandler = async () => {
    const skip = jobsData.length;
    const limit = jobToFetch;
    try {
      const response = await fetch(`http://localhost:3000/jobs/getJobs?skip=${skip}&limit=${limit}`,{credentials: 'include',
      });
      if (response.statusCode === 200) {
        throw new Error("Server Error");
      }
      const { jobOpenings, moreDocuments } = await response.json();
      setJobsData((prevData) => [...prevData, ...jobOpenings]);
      setLoadMore(moreDocuments);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const searchJobs = async () => {
    try {
      const queryParams = new URLSearchParams({
        jobTitle,location,industry,company,
        
        limit: jobToFetch,
        lastId: jobsData.length > 0 ? jobsData[jobsData.length - 1]._id : 'NA'
      });

      const response = await fetch(
        `http://localhost:3000/jobs/getJobSearch?${queryParams}`,{
          credentials: 'include'
          
        }
      );
      if (response.ok) {
        const data = await response.json();
        
        setJobsData((prevJobs) => [...prevJobs, ...data.jobOpenings]);
        setLoadMore(data.moreDocuments);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const searchSwitchHandler=()=>{
    setIsAll((prev)=>{
       if(prev){
        setJobsData([]);
        searchJobs();
       }
       return false;
    });
  }

  const allSwitchHandler=()=>{
    setIsAll((prev)=>{
        if(!prev){
          setLocation('');
          setJobTitle('');
          setIndustry('');
          setCompany('');
          setJobsData([]);
          setLoadMore(false);
          loadJobHandler();
        }
        return true;
    });
  }

  useEffect(() => {
    loadJobHandler();
  }, []);

  return (
    <>
      <div className="jobs">
        <div className="jobs-search">
          <h1>Find a job</h1>
          <input
            type="text"
            placeholder="Job title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />
          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <button onClick={searchSwitchHandler}>Search</button>
          <button onClick={allSwitchHandler}>All</button>
        </div>
        <div className="all_jobs">
          {jobsData.map((jobData) => {
            <Job key={jobData._id} data={jobData} onClick={jobHandler} />;
          })}
          {loadMore && (
            <button className="load_more" onClick={isAll? loadJobHandler:searchJobs}>
              Load More
            </button>
          )}
        </div>
      </div>
      {currJobData && <Cjob data={currJobData} />}
    </>
  );
}
