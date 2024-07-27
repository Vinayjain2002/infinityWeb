import axios from 'axios';

const ip: string = 'https://localhost:3000';

interface HackathonPostData {
  name: string;
  mode: string;
  lastDateToApply: string;
  level: string;
  description: string;
  ideaSubmissionDate: Date;
  maxTeamMembers: number;
  registerationUrl: string;
  problemStatement: string;
  prizes: string;
  organisedBy: string;
}

interface HackathonResponse {
  data: any;
}

interface PostHackathonCallOptions {
  headers?: {
    [key: string]: string;
  };
  params?: {
    [key: string]: string;
  };
}

export const postHackathonCall = async (
  userToken: string,
  data: HackathonPostData,
  options: PostHackathonCallOptions = {}
): Promise<HackathonResponse | null> => {
  try {
    const apiUrl: string = `${ip}/api/infinity/hackathon/post?userToken=${userToken}`;
    const response: HackathonResponse = await axios.post(apiUrl, data, {
      headers: options.headers,
      params: options.params,
    });
    if (response) {
      return response;
    } else {
      return null;
    }
  } catch (err: any) {
    console.error(err);
    return null;
  }
};


interface GetAllHackathonsParams {
  pageNo: number;
}

export const getAllHackathonsCall = async ({
  pageNo,
}: GetAllHackathonsParams): Promise<HackathonResponse | null> => {
  try {
    const apiUrl: string = `${ip}/api/infinity/hackathon/detail?pageNo=${pageNo}`;
    const response: HackathonResponse = await axios.get(apiUrl);
    if (response) {
      return response;
    } else {
      return null;
    }
  } catch (err: any) {
    console.error(err);
    return null;
  }
};


export const getParticularHackathonCall = async (hackathonId: string): Promise<HackathonResponse | null> => {
    try {
      const apiUrl: string = `${ip}/api/infinity/hackathon/specific?hackathonId=${hackathonId}`;
      const response: HackathonResponse = await axios.get(apiUrl);
      if (response) {
        return response;
      } else {
        return null;
      }
    } catch (err: any) {
      console.error(err);
      return null;
    }
  }

  export const getHackathonByDateCall = async (pageNo: number, criteria: any): Promise<HackathonResponse | null> => {
    try {
      const apiUrl: string = `${ip}/api/infinity/hackathon/byDate?pageNo=${pageNo}`;
      const response: HackathonResponse = await axios.get(apiUrl, criteria);
      if(response){
        return response;
      }
      else{
        return null;
      }
    } catch (err: any) {
      console.error(err);
      return null;
    }
  }

  export const getUserPrefHackathons = async (
    pageNo: number,
    name?: string,
    entryFee?: number,
    organisedBy?: string,
    level?: string,
    location?: string,
    prizes?: string,
    mode?: string,
    techStackRequired?: string,
    maxTeamMembers?: number,
    organisationType?: string
  ) => {
    try {
      const apiUrl: string = `${ip}/api/infinity/hackathon/userPref?pageNo=${pageNo}`;
      const queryParams: { [key: string]: string | number } = {};
  
      if (name) queryParams.name = name;
      if (entryFee) queryParams.entryFee = entryFee;
      if (organisedBy) queryParams.organisedBy = organisedBy;
      if (level) queryParams.level = level;
      if (location) queryParams.location = location;
      if (prizes) queryParams.prizes = prizes;
      if (mode) queryParams.mode = mode;
      if (techStackRequired) queryParams.techStackRequired = techStackRequired;
      if (maxTeamMembers) queryParams.maxTeamMembers = maxTeamMembers;
      if (organisationType) queryParams.organisationType = organisationType;
  
      const response: HackathonResponse = await axios.get(`${apiUrl}`, { params: queryParams });
      if (response) {
        return response;
      } else {
        return null;
      }
    } catch (err: any) {
      console.error(err);
      return null;
    }
  };

export const deleteHackathonCall = async (userToken: string, hackathonId: string): Promise<HackathonResponse | null> => {
    try {
      const apiUrl: string = `${ip}/api/infinity/hackathon/delete?userToken=${userToken}&hackathonId=${hackathonId}`;
      const response: HackathonResponse = await axios.delete(apiUrl);
      return response;
    } catch (err: any) {
      console.error(err);
      return null;
    }
  };
  
  export const updateHackathonCall = async (userToken: string, hackathonId: string, updatedData: object): Promise<HackathonResponse | null> => {
    try {
      const apiUrl: string = `${ip}/api/infinity/hackathon/update?userToken=${userToken}?hackathonId=${hackathonId}`;
      const response: HackathonResponse = await axios.put(apiUrl, updatedData );
      return response;
    } catch (err: any) {
      console.error(err);
      return null;
    }
  };
  
export const savedHackathonCall = async (userToken: string): Promise<HackathonResponse | null> => {
    try {
      const apiUrl: string = `${ip}/api/infinity/hackathon/saved?userToken=${userToken}`;
      const response: HackathonResponse = await axios.get(apiUrl); // changed to GET request
      return response;
    } catch (err: any) {
      console.error(err);
      return null;
    }
  };
  
  export const saveHackathonCall = async (userToken: string, hackathonId: string): Promise<HackathonResponse | null> => {
    try {
      const apiUrl: string = `${ip}/api/infinity/hackathon/save?userToken=${userToken}?hackathonId=${hackathonId}`;
      const response: HackathonResponse = await axios.put(apiUrl); // changed to pass data in the request body
      return response;
    } catch (err: any) {
      console.error(err);
      return null;
    }
  };
  
  export const getRandomHackathonCall = async (pageNo: number): Promise<HackathonResponse | null> => {
    try {
      const apiUrl: string = `${ip}/api/infinity/hackathon/random?pageNo=${pageNo}`;
      const response: HackathonResponse = await axios.get(apiUrl); // changed to GET request
      return response;
    } catch (err: any) {
      console.error(err);
      return null;
    }
  };
