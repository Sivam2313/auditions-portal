import React, { useEffect, useState } from "react";
import DomainCard from "./DomainCard";
import {
  onValue,
  ref,
  query,
  orderByChild,
  equalTo,
  limitToLast,
} from "firebase/database";
import { realTimeDB } from "../../../db/firebase";
import SearchBar from "../SearchBar";
import { useRound } from "../../../Hooks/useRound";

const DomainList = ({ domains, selected }) => {
  const [totalcandidates, setTotalcandidates] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [searchQuery, setSearchQuery] = useState(null);
  const [activeCandidate, setActiveCandidate] = useState("All");
  const {round} = useRound();

  const filterCandidates=(candidates)=>{
    const domains=[ "","Web Development","Graphics Design","Teaching and Problem Setting"];
    const filteredCandidates=candidates.filter(candidate=>candidate.rounds[domains[selected]].currRound>=round[3-selected]);
    return filteredCandidates;

  }

  const fetchCandidates=()=>{

    const query = ref(realTimeDB, "candidates");
      return onValue(query, (snapshot) => {

        const data = snapshot.val();
        if (snapshot.exists()) {
          var list = [];
          Object.values(data).map((project, idx) => {
            if (
              selected === 3 &&
              (project.appliedFor.includes("Teaching") ||
                project.appliedFor.includes("Problem Setting"))
            ) {
              project.id = Object.keys(data)[idx];
              list.push(project);
            } else if (project.appliedFor.includes(domains[selected])) {
              project.id = Object.keys(data)[idx];
              list.push(project);
            }
          });
          setTotalcandidates(list);
        }
      });
  }

  useEffect(() => {
    console.log("All is well");
    fetchCandidates();
  }, [selected]);

  const isInteger = (str) => {
    const num = parseInt(str);
    return !isNaN(num) && Number.isInteger(num);
  };

  function handleSearch(){
    
    const candidatesRef = ref(realTimeDB, "candidates");
    const queryName = query(
      candidatesRef,
      orderByChild("name"),
      equalTo(searchQuery)
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

  const handleFilter=()=>{
    if(activeCandidate==="Active"){
      setCandidates(filterCandidates(totalcandidates));
    }
    else if(activeCandidate==="All"){
      setCandidates(totalcandidates);
    }
  }

  useEffect(()=>{
    handleFilter();
  },[totalcandidates,activeCandidate])
  return (
    <div className="w-full h-full pl-32">
      <div className="font-head font-semibold text-5xl text-onSurface flex justify-start">
        {domains[selected]}
      </div>
      <SearchBar setSearchQuery={setSearchQuery} handleSearch={handleSearch} />

      <div className="flex w-full md:w-3/4 justify-between md:justify-end mt-4 md:mt-0 ">
        <select
          onChange={(e) => setActiveCandidate(e.target.value)}
          className="h-9 w-2/6 rounded-lg ps-3 pe-2 bg-primary text-onPrimary font-semibold outline-none"
        >
          <option>All</option>
          <option>Active</option>
        </select>
      </div>

      <div className="w-full mt-16">
        {candidates.map((candidate, index) => {
          return (
            <DomainCard candidate={candidate} index={index + 1} key={index} selected={selected}/>
          );
        })}
      </div>
    </div>
  );
};

export default DomainList;
