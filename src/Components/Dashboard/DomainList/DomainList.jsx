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
import { ToastContainer, toast } from "react-toastify";

const DomainList = ({ domains, selected }) => {
  const [totalcandidates, setTotalcandidates] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCandidate, setActiveCandidate] = useState("Active");
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
    // console.log("All is well");
    fetchCandidates();
  }, [selected,searchQuery]);

  const isInteger = (str) => {
    const num = parseInt(str);
    return !isNaN(num) && Number.isInteger(num);
  };

  
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

  const handleSearch = () => {
    if (searchQuery === "") return;
    console.log(searchQuery);
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
    }
    else{
      setCandidates(candidateArray);
      showSearchMessage(queryFound);
    }
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
          <option>Active</option>
          <option>All</option>
        </select>
      </div>

      <div className="w-full mt-16">
        {candidates.map((candidate, index) => {
          return (
            <DomainCard candidate={candidate} index={index + 1} key={index} selected={selected}/>
          );
        })}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default DomainList;
