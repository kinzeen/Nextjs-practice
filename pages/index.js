// pages/index.js
import React from 'react';
import Link from 'next/link';

const Home = ({data}) => {
  const results = data.results ?? [];

  // data.resultsのデバッグをする
  console.log(results);

  // const renderedResults = results.map((item, index) => (
  //   <div key={index}>
  //     <div>
  //       start_time: {item.start_time}
  //     </div>
  //     <div>
  //       end_time: {item.end_time}
  //     </div>

  //     <div>
  //       stage1: {item.stages[0].name}
  //     </div>
  //     <div>
  //       stage2: {item.stages[1].name}
  //     </div>
  //   </div>
  // ));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3x1 font-bold text-center">Home Page</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click Me
      </button>
      <Link href="/about">About Page</Link>
      <div>
        <p>Data from the server: </p>
        {/* {renderedResults} */}
      </div>
    </div>
  );
};

export async function getServerSideProps () {
  try {
    // Can get the data bellow from api
    // {"results":[{"start_time":"2023-09-09T21:00:00+09:00","end_time":"2023-09-09T23:00:00+09:00","rule":null,"stages":null,"is_fest":true}]}
    const apiUrl = 'https://spla3.yuu26.com/api/fest/now';
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  
    return {
      props: {
        data,
      }
    };  
  } catch (error) {
    console.error('Error :', error);
    return {
      props: {
        data: error
      }
    }
  }
}

export default Home;
