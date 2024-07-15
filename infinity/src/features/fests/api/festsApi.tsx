import axios from 'axios';

const ip: string = 'https://localhost:3000';

interface FestPostData {
    eventname: string;
    mode: string;
    lastDateToApply: string;
    description: string;
    queryContacts: string;
    registerationUrl: string;
    city: string;
    venue: string;
    [key: string]: any; // allow additional properties of any type
  }
  
  interface FestResponse {
    data: any;
  }
  
  interface PostFestCallOptions {
    headers?: {
      [key: string]: string;
    };
    params?: {
      [key: string]: string;
    };
  }
  
  export const PostFestApiCall = async (
    userToken: string,
    data: FestPostData,
    options: PostFestCallOptions = {}
  ): Promise<FestResponse | null> => {
    try {
      const apiUrl: string = `${ip}/api/infinity/fest/post?userToken=${userToken}`;
      const response: FestResponse = await axios.post(apiUrl, data, {
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

  

  interface FestResponse {
    // Add response properties here
    data: any;
    status: number;
    message: string;
  }
    
  export const getAllFestCall = async (pageNo: number): Promise<FestResponse | null> => {
    try {
      const apiUrl: string = `${ip}/api/infinity/fest/all?pageNo=${pageNo}`;
      const response: FestResponse = await axios.get(apiUrl);
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
  export const festByLocationCall = async (location: string, pageNo: number): Promise<FestResponse | null> => {
    try {
      const apiUrl = `${ip}/api/infinity/fest/byLocation?pageNo=${pageNo}`;
      const params = { params: { location } };
      const response = await axios.get(apiUrl, params);
      return response.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  };
  
  export const particularFestDataCall = async (festId: string): Promise<FestResponse | null> => {
    try {
      const apiUrl: string = `${ip}/api/infinity/fest/specific?festId=${festId}`;
      const response: FestResponse = await axios.get(apiUrl);
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

export const festByDateCall = async (option: any,pageNo: number): Promise<FestResponse | null> => {
  try {
    const apiUrl: string = `${ip}/api/infinity/fest/byDate?pageNo=${pageNo}`;
    const response: FestResponse = await axios.get(apiUrl, { params: option });
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

export const userPrefFestCall = async (
  pageNo: number,
  postedBy: string,
  eventname: string,
  mode: string,
  city: string,
  entryFee: string,
  lastDateToApply: string,
  hashtags: string,
  organisedUnder: string,
  organiser: string
): Promise<FestResponse | null> => {
  try {
    const apiUrl: string = `${ip}/api/infinity/fest/userPref?pageNo=${pageNo}`;
    const response: FestResponse = await axios.get(apiUrl, {
      params: {
        postedBy,
        eventname,
        mode,
        city,
        entryFee,
        lastDateToApply,
        hashtags,
        organisedUnder,
        organiser,
      },
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

export const deleteFestCall = async (userToken: string, festId: string): Promise<FestResponse | null> => {
  try {
    const apiUrl: string = `${ip}/api/infinity/fest/delete?userToken=${userToken}&festId=${festId}`;
    const response: FestResponse = await axios.get(apiUrl);
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

export const updateFestCall = async (userToken: string, festId: string, data: Object): Promise<FestResponse | null> => {
  try {
    const apiUrl: string = `${ip}/api/infinity/fest/update?userToken=${userToken}&festId=${festId}`;
    const response: FestResponse = await axios.get(apiUrl, { params: data });
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

export const savedFestCall = async (userToken: string): Promise<FestResponse | null> => {
  try {
    const apiUrl: string = `${ip}/api/infinity/fest/saved?userToken=${userToken}`;
    const response: FestResponse = await axios.get(apiUrl);
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

export const SaveFestCall = async (festId: string, userToken: string): Promise<FestResponse | null> => {
  try {
    const apiUrl: string = `${ip}/api/infinity/fest/save?userToken=${userToken}&festId=${festId}`;
    const response: FestResponse = await axios.get(apiUrl);
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

export const randomFestCall = async (pageNo: number): Promise<FestResponse | null> => {
  try {
    const apiUrl: string = `${ip}/api/infinity/fest/random?pageNo=${pageNo}`;
    const response: FestResponse = await axios.get(apiUrl);
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