import React , {useState} from "react";
import { evaluate } from 'mathjs';
import "./Calc.css";

const Calculator=()=>{
    const [val,setVal]=useState("");
    const handle=(e)=>{
        //console.log(typeof(e));
        if(e == "="){
            try{
            setVal(evaluate(val).toString());}
            catch(error){
                setVal("error expression");
            }
           /*try{
            setVal(eval(val).toString());
           }
           catch(error){
            setVal("error");
           }*/
        }
        else if (e == "clear"){
            setVal(" ");
        }
        else if (e=="back"){
            setVal(val.slice(0, -1));
        }
       /* else if (e === "sin") {
            try{
            setVal(Math.sin(eval(val)*(Math.PI/180)).toString());}
            catch(error){
                setVal("error");
               }
          } 
          else if (e === "cos") {
            setVal(Math.cos(eval(val)*(Math.PI/180)).toString());
          } else if (e === "tan") {
            setVal(Math.tan(eval(val)*(Math.PI/180)).toString());
          } else if (e === "sqrt") {
            setVal(Math.sqrt(eval(val)).toString());
          } 
          else if (e === "cbrt") {
            setVal(Math.cbrt(eval(val)).toString());
          }*/
        else {
        setVal(val+e);}
        
        }

    const list=["=","sinh","acos","?",

    "pi","/","0","sin",

    "log","ceil","not",'+'
    ,"1","cos",

    "cosh","sqrt","or","*",
    "2","tan","tanh",

    "asinh","and","-",

    "3","asin","cbrt","log10",

    "!=","^","4","abs",
    "sign","max",">",

    "%","5","factorial",
    "round","gcd","<",
    '(', "6","atanh","atan","floor",

    ">=",")","7",".",
    "acosh","log2","==",":","8",

    "min","lcm","exp","<=",'"',"9","'"," ",",","'",'"','e',
    
    "clear","back"];

 return(
    <div className="calcu"> 
    <h1> this is calculator body</h1>
    <div className="disp"> 
     <input  type="text" value={val} readOnly/>
    </div>
    <div className="main"> 
    
       {list.map((item,index)=>{
        return(<button className="button" key={index} onClick={()=>handle(item)}> {item}
        </button>);
       })} 
      
    </div>
    </div>
 );

}
export default Calculator;