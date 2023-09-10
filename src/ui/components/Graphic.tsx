import "../styles/components/Graphic.css"
import { component } from "../../core/utils/compounds"

export default function Graphic({ activeComponent }: any) {
  if (!activeComponent || Object.keys(activeComponent).length === 0)
    return null

  return (
    <div className='compound-container' >
      {
        component[activeComponent.formula](activeComponent)
      }
    </div>
  )
}