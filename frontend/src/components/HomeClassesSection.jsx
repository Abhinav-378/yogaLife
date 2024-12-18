import React, { useState, useEffect } from "react";
import axios from "axios";
import ClassesCard from "./ClassesCard";

function HomeClassesSection() {
  const [batches, setBatches] = useState([]); // State to store all batch data

  // Fetch batch data from the backend
  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/classes");
        setBatches(response.data.classes); // Assuming API returns an array of batches
        console.log(response.data.classes);
        
      } catch (error) {
        console.error("Error fetching batch data:", error);
      }
    };

    fetchBatches();
    console.log(batches);
  }, []);

  // Filter batches based on type
  
  const groupBatches = batches.filter((batch) => batch.batchType === "Group");
  const individualBatches = batches.filter((batch) => batch.batchType === "Individual");

  return (
    <div>
      {/* Group Batches */}
      <h1 className="text-5xl font-semibold text-center">Group Batches</h1>
      <div className="flex flex-wrap justify-center gap-6 my-6">
        {groupBatches.length > 0 ? (
          groupBatches.map((batch) => (
            <ClassesCard
              key={batch._id} // Ensure unique keys
              title={batch.title}
              desc={batch.description}
              img={batch.image}
              price={batch.price}
              schedule={batch.schedule}
              batchType={batch.batchType}
            />
          ))
        ) : (
          <p>No Group Batches Available</p>
        )}
      </div>

      {/* Individual Batches */}
      <h1 className="text-5xl font-semibold text-center">Individual Batches</h1>
      <div className="flex flex-wrap justify-center gap-6 my-6">
        {individualBatches.length > 0 ? (
          individualBatches.map((batch) => (
            <ClassesCard
              key={batch._id} // Ensure unique keys
              title={batch.title}
              desc={batch.description}
              img={batch.image}
              price={batch.price}
              schedule={batch.schedule}
              batchType={batch.batchType}
            />
          ))
        ) : (
          <p>No Individual Batches Available</p>
        )}
      </div>
    </div>
  );
}

export default HomeClassesSection;
