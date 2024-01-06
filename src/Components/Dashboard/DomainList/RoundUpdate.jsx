import React, { useState } from "react";
import { useAuth } from "../../../Hooks/useAuth";
import { ref, update } from "firebase/database";
import { realTimeDB } from "../../../db/firebase";

const RoundUpdate = ({ candidate, index, domainSelected}) => {
  const [showModal, setShowModal] = useState(false);
  const { email } = useAuth();
  const domains = ["", "Web Development", "Graphics Design", "Teaching and Problem Setting"];
  const [round, setRound] = useState(
    candidate.rounds[domains[domainSelected]].currRound
  );

  const handleUpdateRound = () => {
    console.log("Updating round of candidate ",candidate.candidateId);
    const candidateRef = ref(
      realTimeDB,
      "candidates/1" + candidate.phone + "/rounds/" + domains[domainSelected]
    );
    update(candidateRef, { currRound: Number(round), promotedBy: email })
      .then(() => {
        console.log("Round updated successfully");

      })
      .catch((error) => {
        console.error("Error updating round:", error);
      });
    setShowModal(false);
  };

 
  return (
    <>
      <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Current Round: {candidate.rounds[domains[domainSelected]].currRound}
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-onSurface outline-none focus:outline-none">
                <div className="flex flex-col items-start justify-between p-5 border-b border-solid border-gray-400 rounded-t ">


                  <div className="flex items-start justify-between w-full">
                    <div className="flex justify-center items-center">
                      <label className="block italic text-black text-sm font-bold mb-1 w-3/5">
                        Name :
                      </label>
                      <h3 className="text-lg text-gray-900 font=semibold pl-4">
                        {candidate.name}
                      </h3>
                    </div>
                    <div className="flex justify-center items-center">
                      <label className="block italic text-black text-sm font-bold mb-1 w-3/5">
                        Roll No :
                      </label>
                      <h3 className="text-lg text-gray-900 font=semibold pl-4">
                        {candidate.roll}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-center w-full">
                    <div className="flex justify-start items-center w-full">
                      <label className="block italic text-black text-sm font-bold mb-1 w-['30%']">
                        Current Round :
                      </label>
                      <h3 className="text-lg text-gray-900 font=semibold pl-4">
                        {candidate.rounds[domains[domainSelected]].currRound}
                      </h3>
                    </div>

                    {candidate.rounds[domains[domainSelected]].currRound >
                      0 && (
                      <div className="flex justify-center items-center">
                        <label className="block italic text-black text-sm font-bold mb-1 w-3/5">
                          Promoted by :
                        </label>
                        <h3 className="text-sm italic text-red-500 font-bold pl-4">
                          {candidate.rounds[domains[domainSelected]].promotedBy}
                        </h3>
                      </div>
                    )}
                  </div>


                </div>

                <div className="relative p-6 flex-auto">
                  <div className="bg-gray-900 shadow-2xl ring ring-gray-300 rounded px-8 pt-2 pb-2 w-full flex flex-col shadow-md">
                    <div className="flex justify-center items-center my-2">
                      <label className="block text-onSurface text-lg font-bold mb-1 w-3/5">
                        Promote to :
                      </label>
                      <input
                      type="number"
                        className="shadow appearance-none border rounded py-2 px-1 text-black w-2/5"
                        onChange={(e) => {
                          setRound(e.target.value);
                        }}
                        
                      />
                    </div>

                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={handleUpdateRound}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default RoundUpdate;
