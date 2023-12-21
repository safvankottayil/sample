import React from 'react'
import BoldSvg from '../Svgs/BoldSvg'
import ItalicSvg from '../Svgs/ItalicSvg'
import UnderLineSvg from '../Svgs/UnderLineSvg'
import ListSvg from '../Svgs/ListSvg'

const Button =(props)=>{
    const {children,format,active, ...rest} = props
    return(
        <button  className={active?'rounded-lg shadow flex justify-center items-center':''} title={format}  {...rest} style={{width:'30px',height:'20px',margin:'0 2px'}}>
            {children=='bold'?<BoldSvg/>:""           }
            {children=='italic'?<ItalicSvg/>:""}
            {children=='underline'?<UnderLineSvg/>:""}
            {children=='strikethrough'?'':''}
            {children=='unorderedList'?<ListSvg/>:''}
        </button>
    )
}

export default Button
