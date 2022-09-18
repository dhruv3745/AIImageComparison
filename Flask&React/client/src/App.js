import React, {useState, useEffect} from 'react'

function App() {
  
  const [data,setData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [done, setDone] = useState(false);

    // useEffect(() => {
    //   fetch("/eyeTracker").then(
    //     res => {
    //       console.log('res', res)
    //       return res.json()
    //     }
    //   ).then(
    //     data => {
    //       setData(data)
    //       console.log("data",data)
    //     }
    //   ).catch(e => console.log('error', e))
    // }, [])

    // setTimeout(() => {
    //   console.log("Delayed for 10 second.");
    // }, 10000);
    
    useEffect(() => {
      if (counter < 7) {
        console.log(counter);
        const interval = setInterval(() => {
          fetch("/eyeTracker").then(
                res => res.json()
              ).then(
                resData => {
                  setData([...data, resData]);
                  setCounter(prevValue => prevValue + 1);
                  console.log(resData)
                }
              )
        }, 10000);
        return () => clearInterval(interval);
      }
      else{
        setDone(true);
      }
    }, []);


    if(done){
    var left = 0;
    var right = 0;
    data.forEach(sub => {
      if (sub[0] >sub[1]) {
        left+=1;
      }
      else {
        right+=1;
      }
    }); 

    
  



    return(
      <div>
        {(left>right) ? (
          <p>more right</p>
        ): (
          <p> more left</p>
        )
      }
      </div>
    )
  }
  // return (
  //   <div>

  //     { (typeof data.members === 'undefined') ? (
  //       <p>Loading...</p>
  //     ): (
  //       data.members.map((member, i) => (
  //         <p key={i}>{member}</p>
  //       ))
  //     )}

  //   </div>
  // )
}

export default App