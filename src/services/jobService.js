import jobs from "../data/jobs";

export const getJobs = () => {
  return jobs;
};

export const addJob = (job) => {
  jobs.push(job);
};