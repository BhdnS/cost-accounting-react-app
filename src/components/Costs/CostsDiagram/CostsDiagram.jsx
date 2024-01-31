import Diagram from '../../Diagram/Diagram/Diagram'
import diagramDataSets from './diagramDataSets'

const CostsDiagram = (props) => {
  for (const cost of props.costs) {
    const costMonth = cost.date.getMonth()
    diagramDataSets[costMonth].value += cost.amount
  }

  return <Diagram dataSets={diagramDataSets} />
}

export default CostsDiagram
