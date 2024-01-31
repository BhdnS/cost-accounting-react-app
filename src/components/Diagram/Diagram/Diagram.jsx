import DiagramBar from '../DiagramBar/DiagramBar'
import './Diagram.scss'

const Diagram = (props) => {
  const dataSetsValues = props.dataSets.map((e) => e.value)

  const maxMonthCosts = Math.max(...dataSetsValues)

  return (
    <div className='diagram'>
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
          key={dataSet.label}
        />
      ))}
    </div>
  )
}

export default Diagram
