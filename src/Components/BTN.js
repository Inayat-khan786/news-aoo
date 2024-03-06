
import { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
// npm i react-copy-to-clipboard
// first install in terminal copy-to-Clipboard

export default function BTN(props) {


     function changeUpper(){

        console.log(`hello ${text}`)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('converted to uppercase','success')

       }

       let changelower = ()=>{

        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('converted to lowercase','success')

       }

let clearText = ()=>{

        let newText = " ";
        setText(newText)
        props.showAlert('clear text','success')
      }



let AddingMail = ()=>{

          let newText = `${text}@gmail.com`;
          setText(newText)
          props.showAlert('Add mail','success')
    
                 }

  let copyText = ()=>{
      setText(text)
    }
                    
      


const changetext = (e)=>{
setText(e.target.value);
}



const [text,setText] = useState('')
  return (
    <>
<h2 className='heading ' style={{color:props.mode==='dark'?'white':'black'}} >{props.heading}</h2>
<textarea  onChange={changetext} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} className='imp' value={text}
 />

<br/>
<br/>
<button className='imp1 mx-1 my-1' onClick={changeUpper}>change upper case </button>
<button className='imp1 mx-1 my-1' onClick={changelower}>change lower case </button>
<button className='imp1 mx-1 my-1' onClick={clearText}>Clear Text </button>
<button className='imp1 mx-1 my-1' onClick={AddingMail}>mail</button>

<CopyToClipboard text={text}>
<button className='imp1' onClick={copyText} >Copy Text</button>
        </CopyToClipboard>

<div className='container' style={{color:props.mode==='dark'?'white':'black'}}  >

<h2 >Text summery </h2>
<p > {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} character   </p>
<p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read</p>
<div>
<p>Text Preview </p>
<p>{text.length>0?text:'enter preview'}</p>

</div>

</div>

</>




  )


}
