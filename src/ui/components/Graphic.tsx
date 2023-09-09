import "../styles/components/Graphic.css"
import { component } from "../../core/utils/compounds"

export default function Graphic({ activeComponent }: any) {

  return (
    <div className='compound-container'>
      {
        component[activeComponent.formula]
      }
    </div>
  )
}