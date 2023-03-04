
import React, { useState } from "react";
import { useEffect } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { ArrowLeft, ArrowRight} from "react-bootstrap-icons"


function App() {
  
  const [ques, setQues] = useState();
  const [index, setIndex] = useState(0);
  const question = ["AreaUnderTheCurve_901", "BinomialTheorem_901", "DifferentialCalculus2_901"];
  const getData = async () => {
    let data = await fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${question[index]}`);
    data = await data.json();
    setQues(data[0].Question);
  }
  useEffect(() => {
    getData();
  }, [index])
  return (
    <MathJaxContext>
    <div className="container" style={{margin:"50px"}}>
      

      <div className="shadow-lg" style={{height:"200px", border:"1px solid black", borderRadius:"5px", padding:"10px"}}><strong>Ques{index+1}.</strong><MathJax>{ques}</MathJax></div>
      <div style={{display:"flex", justifyContent:"center"}}>
        <button style={{margin:"20px", height: "45px", width: "60px"}} className="btn btn-primary" disabled={index === 0} onClick={() => {setIndex(index - 1)}}><ArrowLeft/></button>
        <button style={{margin:"20px",  height: "45px", width: "60px"}} className="btn btn-primary" disabled={index === 2} onClick={() => {setIndex(index + 1)}}><ArrowRight/></button>
      </div>
    </div>
    </MathJaxContext>
  );
}

export default App;
