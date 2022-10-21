import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const deleteTour = (id) => {
    const newTour = data.filter((tour) => tour.id !== id);
    setData(newTour);
  };

  const axiosTours = async () => {
    setLoading(true);

    try {
      const response = await axios(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      axiosTours();
    }, 4000);
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

 if (data.length === 0) {
   return (
     <main className="textCenter">
       <div className="title">
         <h2>No Tours left</h2>
         <button className="btn" onClick={() => axiosTours()}>
           Refresh
         </button>
       </div>
       <img
         className="ankaKusu"
         height={"150px"}
         src="https://ca.slack-edge.com/T03LBL87DA8-U03MX0ZCV2L-bde228c1e694-512"
         alt=""
       />
     </main>
   );
 }

  // console.log(data)
  return (
    <div>
      <h1>OUR TOURS</h1>
      <Tours data={data} deleteTour={deleteTour} />
    </div>
  );
}

export default App;
