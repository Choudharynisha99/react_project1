import React, {useState} from 'react'

function Card(props)
 {
  const handleonclick = () =>{
    //  console.log("ok");
     let newText  = text.toUpperCase();
     setText(newText);
     props.showAlert("converted to uppercase","success");
  }
  const handleLoclick = () =>{
    // console.log("ok");
    let newText  = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
 }
  const handleCAclick = () =>{
    // console.log("ok");
    let newText  = text.toLowerCase().split(" ");
    for(let i=1;i<newText.length;i++){
      let firstChar = newText[i].slice(0,1);
      firstChar = firstChar.toUpperCase();
      let camelWord = firstChar + newText[i].slice(1)
      newText[i] = camelWord;
    }
    let camelString = newText.join(" ");
    setText(camelString);
    props.showAlert("converted to camelcase","success");
 }

 const handleclick = () =>{
  let newc = '';
  setText(newc);

 }
const handlecopy = () =>{
  navigator.clipboard.writeText(text);
}
  const handleonchange = (event) =>{
    // console.log("change");
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  return (
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchange} rows="3" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
      </div>
       <button className={"btn btn-primary mx-3"} onClick={handleonclick}>Conver to Uppercase</button>
       <button className="btn btn-primary mx-3" onClick={handleLoclick}>Conver to Lowercase</button>
       <button className="btn btn-primary mx-3 my-3" onClick={handleCAclick}>Conver to Camelcase</button>
       <button className="btn btn-primary mx-3 my-3" onClick={handleclick}>Clear Text</button>
       <button className="btn btn-primary mx-3 my-3" onClick={handlecopy}>Copy Text</button>

       <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words, {text.length}characters</p>

        <h3 className='my-2'>Preview</h3>
        <p>{text.length>0?text:"Enter text in textbox to preview it here"}</p>

        <h3 className='my-2'>Time Taken in reading</h3>
        <p>{0.008 * text.split("").length}</p>
       </div>
    </div>
   
  )
}

export default Card
