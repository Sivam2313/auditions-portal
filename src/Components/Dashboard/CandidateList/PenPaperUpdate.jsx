import React, { useState } from "react";
import {ref,update} from "firebase/database";
import { realTimeDB } from "../../../db/firebase";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const PenPaperUpdate = ({candidate,index}) => {

    const [webdMarks, setWebdMarks] = useState(candidate.PenPaperMarks["Web Development"]);
    const [designMarks, setDesignMarks] = useState(candidate.PenPaperMarks["Design"]);
    const [teachingMarks, setTeachingMarks] = useState(candidate.PenPaperMarks["Teaching and Problem Setting"]);


    const showUpdateMessage = (status) => {
      if(status){
          toast.success(`Marks updated for ${candidate.roll}`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
            theme: "colored",
        });
      }
      else{
        toast.error('Error updating marks !', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
          theme: "colored",
      });
      }
    }

    const handleUpdateMarks=()=>{
        let updated=false;
        const updatedMarks = {
            'Design':Number(designMarks),
            'Teaching and PS':Number(teachingMarks),
            'Web Development':Number(webdMarks)
        };

        const candidateRef = ref(realTimeDB, "candidates/1" + candidate.phone);
        update(candidateRef, { PenPaperMarks: updatedMarks })
        .then(() => {
            console.log('PenPaperMarks updated successfully');
            updated=true;
            showUpdateMessage(updated);
        })
        .catch((error) => {
            console.error('Error updating PenPaperMarks:', error);
            updated=false;
            showUpdateMessage(updated);
        });
        setShowModal(false);
    }

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Update Marks
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-onSurface outline-none focus:outline-none">


                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-400 rounded-t ">
                <div>    
                    <div className="flex justify-center items-center">
                        <label className="block text-black text-sm font-bold mb-1 w-3/5">
                        Name : 
                        </label> 
                        <h3 className="text-lg text-gray-900 font=semibold pl-4">{candidate.name}</h3>
                    </div>
                    <div className="flex justify-center items-center">
                        <label className="block text-black text-sm font-bold mb-1 w-3/5">
                        Roll No : 
                        </label> 
                        <h3 className="text-lg text-gray-900 font=semibold pl-4">{candidate.roll}</h3>
                    </div>
                </div>
                </div>


                <div className="relative p-6 flex-auto">
                  <div className="bg-gray-900 shadow-2xl ring ring-gray-300 rounded px-8 pt-6 pb-8 w-full flex flex-col shadow-md">


                    <div className='flex justify-center items-center my-2'>
                    <label className="block text-onSurface text-lg font-bold mb-1 w-3/5">
                      Teaching and PS
                    </label>
                    <input className="shadow appearance-none border rounded py-2 px-1 text-black w-2/5" onChange={(e)=>{setTeachingMarks(e.target.value)}} value={teachingMarks}/>
                    </div>

                    <div className='flex justify-center items-center my-2'>
                    <label className="block text-onSurface text-lg font-bold mb-1 w-3/5">
                      Web Development
                    </label>
                       <input className="shadow appearance-none border rounded py-2 px-1 text-black w-2/5" onChange={(e)=>{setWebdMarks(e.target.value)}} value={webdMarks}/>
                    </div>

                    <div className='flex justify-center items-center my-2'>
                    <label className="block text-onSurface text-lg font-bold mb-1 w-3/5">
                      Graphic Design
                    </label>
                    <input className="shadow appearance-none border rounded py-2 px-1 text-black w-2/5" onChange={(e)=>{setDesignMarks(e.target.value)}} value={designMarks}/>
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
                    onClick={handleUpdateMarks}
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

export default PenPaperUpdate;
