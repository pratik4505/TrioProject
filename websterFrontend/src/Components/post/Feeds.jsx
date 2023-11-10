import Post from "./Post";
import { useState, useEffect } from "react";
import getJwtTokenFromCookie from "../../utils/cookieData";
const jwtToken = getJwtTokenFromCookie();
const postPerPage = 3;
export default function Feeds() {
  const [loadMore, setLoadMore] = useState(false);
  const [feedsData, setFeedsData] = useState([]);
  const [tempData, setTempData] = useState([]);

  const loadData = async () => {
    try {
      setFeedsData([...feedsData, ...tempData]);
      setLoadMore(false);
      const response = await fetch(
        `http://localhost:3000/getFeeds?limit=${postPerPage}&afterDate=${
          tempData[tempData.length - 1].createdAt
        }`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      const newData = await response.json();

      setTempData(newData);
      if (newData.length > 0) {
        setLoadMore(true);
      }
    } catch (error) {
      console.error("Error loading more data:", error);
    }
  };

  const initialLoad = async () => {
    try {
      const response1 = await fetch(
        `http://localhost:3000/getFeeds?limit=${postPerPage}&afterDate=${new Date().toISOString()}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      const postResponse1 = await response1.json();

      if (postResponse1.length > 0) {
        setFeedsData(postResponse1);
        const response2 = await fetch(
          `/getFeeds?limit=${postPerPage}&afterDate=${
            postResponse1[postResponse1.length - 1].createdAt
          }`
        );
        const postResponse2 = await response2.json();
        if (postResponse2.length > 0) {
          setTempData(postResponse2);
          setLoadMore(true);
        }
      }
    } catch (error) {
      console.error("Error fetching initial data:", error);
    }
  };

  useEffect(() => {
    initialLoad();
  }, []);

  return (
    <>
      {feedsData.map((feedData) => {
        <Post key={feedData._id} postData={feedData} />;
      })}
      {loadMore && <button onClick={loadData}>Load More</button>}
    </>
  );
}
