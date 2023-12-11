import axios from "axios";

const searchPost=async(query)=>{
    const res=await axios.get("http://hn.algolia.com/api/v1/search?query=test");
    // console.log(res.data)
    return res.data;
                  
}

export default searchPost;