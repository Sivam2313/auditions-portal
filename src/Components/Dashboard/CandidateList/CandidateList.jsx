import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CandidateCard from "./CandidateCard";
import {
  onValue,
  ref,
  set,
  query,
  orderByChild,
  equalTo,
  startAt,
  endAt,
  once,
} from "firebase/database";
import { db, realTimeDB } from "../../../db/firebase";
import SearchBar from "../SearchBar";
import { useRound } from "../../../Hooks/useRound";
import { doc, getDoc } from "firebase/firestore";

const CandidateList = () => {
  const [totalcandidates, setTotalcandidates] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCandidate, setActiveCandidate] = useState("Active");
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
    // console.log('round',round);
    const domains=[ "Web Development","Graphics Design","Teaching and Problem Setting"];
    var list = new Set();
    const filterCandidates = candidates.filter(candidate=>{
      if(candidate.rounds[domains[0]].currRound>=round[2] || candidate.rounds[domains[1]].currRound>=round[1] || candidate.rounds[domains[2]].currRound>=round[0]){
        return true;
      }
      else{
        return false;
      }
    })
    // console.log(filterCandidates);
    return filterCandidates;

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
          // console.log(list);
          setTotalcandidates(list);
        }
      });
    }
  }, [searchQuery]);

  const handleFilter=()=>{
    if(activeCandidate==="Active"){
      // console.log("Active section");
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
    // console.log(candidateArray);
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

  async function handleCutoff () {
    
  };

 
  return (
    <div className="w-full h-full md:pl-32">
      <div className="font-head font-semibold text-4xl md:text-5xl text-onSurface flex justify-center md:justify-start">
        Candidate List
      </div>
        <SearchBar
          query={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />

        <div className="flex w-full md:w-3/4 justify-around md:justify-end mt-4 md:mt-0 ">
          <div className="mr-6">
            {/* <button className="bg-primary rounded-lg w-full pl-3 pr-3 h-9 text-onPrimary font-semibold outline-none" onClick={(e)=>handleCutoff()}>
              Finalize
            </button> */}
          </div>
          <select
            onChange={(e) => setActiveCandidate(e.target.value)}
            className="h-9 w-2/6 rounded-lg ps-3 pe-2 bg-primary text-onPrimary font-semibold outline-none"
          >
            <option>Active</option>
            <option>All</option>
          </select>
      </div>

    
      <div className="w-full mt-16 pl-2 pr-2">
        {candidates?.map((candidate, index) => {
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
