import axios from "axios";

export const searchPost=async(query)=>{
    try{
    const res=await axios.get("https://hn.algolia.com/api/v1/search?query=test");
    return res.data;
    }
    catch(err){
        throw Error("Error while searching for post")
    }
                  
}

export const getPostDetails=async(objID)=>{
    try{
      const res=await axios.get(`https://hn.algolia.com/api/v1/items/${objID}`);
      return res.data;
    }
    catch(err){
        throw Error("Error while fetching post details")
    }
}



