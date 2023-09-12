import "../styles/components/Graphic.css"
import Compound from "./Compound";

export default function Graphic({ activeComponent, onFormulaCompleted, onInValidAtom, currentAtomSelection }: any) {
  if (!activeComponent || Object.keys(activeComponent).length === 0)
    return null

  return (
    <div className='compound-container' >
      <Compound
          compound={activeComponent}
          onFormulaCompleted={onFormulaCompleted}
          onInValidAtom={onInValidAtom}
          currentAtomSelection={currentAtomSelection} />
    </div>
  )
}