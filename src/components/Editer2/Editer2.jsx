import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { withHistory } from "slate-history";
import {Slate ,Editable, withReact } from 'slate-react';
import Toolbar from './Toolbar';
import './editer.css'
const Element = (props) =>{
    const {attributes, children, element} = props;
    switch(element?.type){
        case 'list-item':
            return  <li {...attributes} {...element.attr}>{children}</li>
        case 'orderedList':
            return <ol type='1' {...attributes}>{children}</ol>
        case 'unorderedList':
            return <ul className='list-disc pl-3' {...attributes}>{children}</ul>
              default :
            return <div {...element.attr} {...attributes}>{children}</div>
    }
}
const Leaf = ({ attributes, children, leaf }) => {
    
    if (leaf.bold) {
      children = <strong>{children}</strong>
    }
  
    if (leaf.code) {
      children = <code>{children}</code>
    }
  
    if (leaf.italic) {
      children = <em>{children}</em>
    }
    if(leaf.strikethrough){
        children = <span style={{textDecoration:'line-through'}}>{children}</span>
    }
    if (leaf.underline) {
      children = <u>{children}</u>
    }
    if(leaf.superscript){
        children = <sup>{children}</sup>
    }
    if(leaf.subscript){
        children = <sub>{children}</sub>
    }
   
    return <span {...attributes}>{children}</span>
}
export default function Editer2({initiolState,SetInitiolState}) {
    const editor = useMemo(() => withHistory(withReact(createEditor())), []);
    console.log(initiolState,'----------------------------------------------------------------------');
    const [value,setValue] = useState(initiolState?initiolState:[{children:[{text:'write'}]}]);
    // useEffect(() => {
    // SetInitiolState(value)
    // }, [])
    const renderElement = useCallback(props => <Element {...props}/>,[])
    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
    }, [])

  return (
    <>
    <Slate editor={editor} value={value} onChange = {(newValue) => {setValue(newValue),SetInitiolState(newValue)}} >
    <div className="modal-input text-xs z-50 w-full py-3 editer" style={{border:'1px solid #f3f3f3',padding:'0 10px'}}>
        <Editable
            className='z-[1000]'
            placeholder='Write something'
            renderElement={renderElement} 
            renderLeaf={renderLeaf}
        />
    </div>
    <div className='py-2'>
    <Toolbar />
    </div>
  
</Slate>
{/* <input hidden/> */}
</>
  )
}
