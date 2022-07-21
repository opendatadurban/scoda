import React from 'react'
import { ChevronDown } from '../../../../svg_components/SelectIcons'
import '../../../../scss/components/Select.scss'
import { useState } from 'react'

export const MiniSelect = ({names,selected,setSelected}) => {

    const [show,visibility] = useState(false)

    const select = (index) =>{
        setSelected(names[index])
    }
    return (
        <div className='mini_select' onClick={()=>{visibility(!show)}}>

            <p  className="title">
                {selected}
            </p>


            <div className={"dropdownbox " + `${show ? "show" : ""}`} >
                {
                    names.map((city, index) => {

                        return <p  className="drop_content" onClick={() => {
                            select(index)
                        }}>{city}</p>
                    })
                }
            </div>

            <ChevronDown drop={() => {
                visibility(!show)
            }} />
        </div>
    )
}
