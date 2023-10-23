import React, { useEffect, useState } from "react";
import CandidateCard from "./CandidateCard";
import {
  onValue,
  ref,
  query,
  orderByChild,
  equalTo,
  startAt,
  endAt,
  once,
} from "firebase/database";
import { realTimeDB } from "../../../db/firebase";
import SearchBar from "../SearchBar";

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);
  const [searchQuery, setSearchQuery] = useState(null);

  useEffect(() => {
    const query = ref(realTimeDB, "candidates");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        var list = [];
        Object.values(data).map((project, idx) => {
          project.id = Object.keys(data)[idx];
          list.push(project);
        });
        console.log(list);
        setCandidates(list);
      }
    });
  }, []);

  const isInteger = (str) => {
    const num = parseInt(str);
    return !isNaN(num) && Number.isInteger(num);
  };

  const handleSearch = () => {
    const candidatesRef = ref(realTimeDB, "candidates");
    console.log();
    const queryName = query(
      candidatesRef,
      orderByChild("name"),
      startAt(searchQuery),
      endAt(searchQuery+"\uf8ff"),
    );
    let queryFound = false;
    onValue(queryName, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        queryFound = true;
        var list = [];
        Object.values(data).map((project, idx) => {
          project.id = Object.keys(data)[idx];
          list.push(project);
        });
        console.log(list);
        setCandidates(list);
      }
    });

    if (!queryFound) {
      const queryRoll = query(
        candidatesRef,
        orderByChild("rollNumber"),
        equalTo(searchQuery)
      );
      onValue(queryRoll, (snapshot) => {
        const data = snapshot.val();
        if (snapshot.exists()) {
          queryFound = true;
          var list = [];
          Object.values(data).map((project, idx) => {
            project.id = Object.keys(data)[idx];
            list.push(project);
          });
          console.log(list);
          setCandidates(list);
        }
      });
    }

    if (!queryFound && isInteger(searchQuery)) {
      const queryPhone = query(
        candidatesRef,
        orderByChild("phoneNumber"),
        equalTo(Number(searchQuery))
      );
      console.log(typeof searchQuery);
      onValue(queryPhone, (snapshot) => {
        const data = snapshot.val();
        if (snapshot.exists()) {
          console.log(snapshot.val());
          queryFound = true;
          var list = [];
          Object.values(data).map((project, idx) => {
            project.id = Object.keys(data)[idx];
            list.push(project);
          });
          console.log(list);
          setCandidates(list);
        }
      });
    }

    if (!queryFound) setCandidates([]);
  };

  return (
    <div className="w-full h-full pl-32">
      <div className="font-head font-semibold text-5xl text-onSurface flex justify-start">
        Candidate List
      </div>
      <SearchBar setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
      <div className="w-full mt-16">
        {candidates.map((candidate, index) => {
          return (
            <CandidateCard
              candidate={candidate}
              index={index + 1}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CandidateList;
