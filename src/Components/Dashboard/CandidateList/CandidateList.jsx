import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import { useRound } from "../../../Hooks/useRound";

const CandidateList = () => {
  const [totalcandidates, setTotalcandidates] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCandidate, setActiveCandidate] = useState("All");
  const {round} = useRound();
  

  const showSearchMessage = (found) => {
    if (found) {
      toast.success("candidate found !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
        theme: "colored",
        // className: 'search-success'
      });
    } else {
      toast.error("No candidate found !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
        theme: "colored",
        // className: 'search-failure'
      });
    }
  };

  const filterCandidates=(candidates)=>{
    const domains=[ "","Web Development","Graphics Design","Teaching and Problem Setting"];
    var list = new Set();
    for(let idx=1;idx<=3;idx++){
      const filteredCandidates=candidates.filter(candidate=>candidate.rounds[domains[idx]].currRound>=round[3-idx]);
      console.log(filteredCandidates);
      filteredCandidates.forEach(candidate => list.add(candidate));
    }
    const res = Array.from(list);
    console.log(res);
    return res;

  }

  useEffect(() => {
    if (searchQuery === "") {
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
          setTotalcandidates(list);
        }
      });
    }
  }, [searchQuery]);

  const handleFilter=()=>{
    if(activeCandidate==="Active"){
      console.log("Active section");
      setCandidates(filterCandidates(totalcandidates));
    }
    else if(activeCandidate==="All"){
      // console.log("All section");
      // console.log(totalcandidates);
      setCandidates(totalcandidates);
    }
  }

  useEffect(()=>{
    handleFilter();
  },[totalcandidates,activeCandidate])

  const isInteger = (str) => {
    return /^\d+$/.test(str);
  };

  const handleSearch = () => {
    if (searchQuery === "") return;
    let candidateArray = candidates;
    const query = searchQuery.toLowerCase();
    let queryFound = false;
    setCandidates(candidateArray);
    candidateArray = candidateArray.filter((candidate) => {
      // console.log('candidate: ',candidate.name);
      if(candidate.name.toLowerCase().includes(query)){
        // console.log("found");
        queryFound = true;
        return true;
      }
      else if(candidate.roll.toLowerCase()==query){
        queryFound = true;
        return true;
      }
      else{
        return false;
      }
    });
    console.log(candidateArray);
    if (!queryFound) {
      setCandidates([]);
      showSearchMessage(queryFound);
      // setSearchQuery("");
    }
    else{
      // console.log(query);
      setCandidates(candidateArray);
      showSearchMessage(queryFound);
    }
  };

 
  return (
    <div className="w-full h-full pl-32">
      <div className="font-head font-semibold text-5xl text-onSurface flex justify-start">
        Candidate List
      </div>
      <SearchBar
        query={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />

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
            <CandidateCard
              candidate={candidate}
              index={index + 1}
              key={index}
            />
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
};

export default CandidateList;
