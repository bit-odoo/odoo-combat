import React from 'react';

function RecycleProcess() {
  const recycleProcesses = [
    {
      id: 1,
      thumbnail: "https://earthhow.com/wp-content/uploads/2023/11/3-Rs-Reuse-Reduce-Recycle-Feature-1.jpg",
      title: "The 3 R’s – Reduce, Reuse, and Recycle",
      description: "“Reducing” means using less, like using fewer plastic bottles or buying products with less packaging.  It’s about cutting down on waste from the start.....",
    },
    {
      id: 2,
      thumbnail: "https://media.licdn.com/dms/image/C4E12AQE_J_c7OECgUg/article-cover_image-shrink_720_1280/0/1632467969007?e=1724889600&v=beta&t=I7jDl3nZiBl7QF2BDmeo1_OQLFWRqePJB5R2eppcELM",
      title: "Reduce, Reuse, Recycle, Renew and Redesign: Rethink Plastics awareness",
      description: "Lightweight products offer a significant environmental advantage over heavier alternatives. Rethink Plastics is therefore committed to efficient ....",
    },
    {
      id: 3,
      thumbnail: "https://media.eastman.com/is/image/eastman/people-recycling?$corporatepreset$&wid=1000",
      title: "Principle No. 1 for building a circular economy ",
      description: "Most people are familiar with the three Rs: reduce, reuse, recycle. And while this phrase may be most familiar as a consumer mantra, it’s more important now than ever that companies also adopt the sentiment. We believe in the..",
    },
  ];

  return (
    <>

      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className='font-semibold text-3xl mb-8'>Recycle Process</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {recycleProcesses.map(process => (
              <div key={process.id} className="bg-white shadow-md rounded-lg p-6">
                <img src={process.thumbnail} alt={process.title} className="rounded-md h-48 object-cover "/>
                <div className="mt-4">
                  <h1 className="text-xl font-semibold">{process.title}</h1>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <form action="">
        <div className='bg-white mx-10'>
          <h3 className='font-semibold text-xl mb-8'>Add Recycle Processs</h3>
          <div className='mb-4'>
            <label htmlFor="business-name" className='text-sm font-medium text-gray-700 sr-only'>Title</label>
            <input type="text"
              id="business-name"
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm h-12' placeholder="Title" />
          </div>
          <div className='grid grid-cols-1'>
            <div className='mb-4'>
              <label htmlFor="description" className='text-sm font-medium text-gray-700 sr-only'>Description</label>
              <input type="text"
                id="business-name"
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-700 sm:text-sm h-12' placeholder="Description Here ..." />
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
            <button type="submit" className='w-56 bg-black text-white py-2 px-4 my-5 rounded-md shadow-sm hover:bg-[#58327d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>save</button>
          </div>
      </form>
    </>
  );
}

export default RecycleProcess;
