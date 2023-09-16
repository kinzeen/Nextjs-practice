import React from 'react';
import Link from 'next/link';

// Display list of stages got from getServerSideProps
const StageList = ({data}) => {
  // extract stage data from "data" parameter each type of stage
  const regular = data.result.regular ?? [];
  const bankara_challenge = data.result.bankara_challenge ?? [];
  const bankara_open = data.result.bankara_open ?? [];
  const x = data.result.x ?? [];

  // Display list of data for each stages with table of Super cool UI design
  return (
    <div>
      <h1>Stage List</h1>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Stage 1</th>
            <th>Stage 2</th>
          </tr>
        </thead>
        <tbody>
          {regular.map((item, index) => (
            <tr key={index}>
              <td>Regular</td>
              <td>{item.start_time}</td>
              <td>{item.end_time}</td>
              <td>{item.stages[0].name}<img src={item.stages[0].image}/></td>
              <td>{item.stages[1].name}<img src={item.stages[1].image}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>rule</th>
            <th>Stage 1</th>
            <th>Stage 2</th>
          </tr>
        </thead>
        <tbody>
          {bankara_challenge.map((item, index) => (
            <tr key={index}>
              <td>Challenge</td>
              <td>{item.start_time}</td>
              <td>{item.end_time}</td>
              <td>{item.rule.name}</td>
              <td>{item.stages[0].name}<img src={item.stages[0].image}/></td>
              <td>{item.stages[1].name}<img src={item.stages[1].image}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * get data from spla3 API https://spla3.yuu26.com/api/schedule
 */
export async function getServerSideProps () {
  const apiUrl = 'https://spla3.yuu26.com/api/schedule';

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data);
    // structure of data is bellow
    // data.result : Array<Object>
    // check results
    console.log("data.result="+data.result);
    console.log("data.result.regular[i]="+data.result.regular[0]);
    console.log("data.result.bankara_challenge[i]="+data.result.bankara_challenge[0]);
    console.log("data.result.bankara_open[i]="+data.result.bankara_open[0]);
    console.log("data.result.x[i]="+data.result.x[0]);

    return {
      props: {
        data,
      }
    }
  } catch (error) {
    console.log("error is " + error);
    return {
      props: {
        data: null,
      }
    }
  }
};

export default StageList;
