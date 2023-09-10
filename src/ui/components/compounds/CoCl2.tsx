import React from 'react'
import "../../styles/components/Graphic.css"
import Atom from "../Atom";

export default function COCl2({compound}: any) {
    return (
        <div className='graphic-container COCl2'>
            {
                Object.keys(compound.composition).map((key: any, index: number) => {
                    let components: any = [...Array(compound.composition[key].atoms)].map((_: any, indexIntern: number) => {
                        return (
                            <div key={index + indexIntern} className={`element hide ${key}${indexIntern + 1}`}>
                                <Atom atom={compound.composition[key]} name={key}/>
                            </div>
                        )
                    })
                    return components
                })
            }
        </div>

    )
}
