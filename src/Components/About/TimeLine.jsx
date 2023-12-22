import React from "react";

const rounds=[
    {
        no : 1,
        title : "Pen and Paper Round",
        description : "A 2 hour pen and paper qualifier round which tests the aptitude skills of the candidate."
    },
    {
        no : 2,
        title : "Teaching + Tech Round I",
        description : "Candidates will have to explain a given topic on the board for the teaching round.For Tech round I easy DSA questions will be asked."
    },
    {
        no : 3,
        title : "Domain Round (I & II) + Tech Round II",
        description : "Those who opted for WebD/GD shall appear for their respective domain rounds + Problem setting round will test their ability to set questions."
    },
    {
        no : 4,
        title : "Personal Interview Round",
        description : "Behavioural questions will be asked to the candidates after which the final list of inductees will be determined."
    },
]

const TimeLine = () => {
  return (
    <main className="relative min-h-screen flex flex-col justify-center bg-#0F0913 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">

          <div className="text-primary font-title text-3xl lg:text-5xl pt-32 lg:mb-12 mb-6" style={{ paddingBottom: '0' }}>
            JOURNEY THROUGH AUDITION CHAPTERS
          </div>

          <div className="w-full max-w-3xl mx-auto">

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">


                {rounds.map((round) => {
                    return (
                        <div key={round.no} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                       
                           <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-onPrimary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold text-lg">
                           {round.no}
                           </div>
                      
                           <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-onSurface p-4 rounded border border-slate-200 shadow">
                           <div className="flex items-center justify-between space-x-2 mb-1 font-title">
                               <div className="font-bold text-slate-900">{round.title}</div>
                           </div>
                           <div className="text-black font-head">
                              {round.description}
                           </div>
                           </div>
                       </div>
                    )
                })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TimeLine;
