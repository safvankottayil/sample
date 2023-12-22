import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BaseEdge,getSimpleBezierPath,getBezierPath, EdgeLabelRenderer, useReactFlow,} from 'reactflow';
import { setDeleteEdge } from '../../../Redux/Client';
function CostumEdge({id, sourceX, sourceY, targetX, targetY,markerEnd}) {
    const dispatch=useDispatch()
    const {HoverEdge}=useSelector(state=>state.Client)
    const { setEdges } = useReactFlow();
    const [edgePath,labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
        markerEnd
      });
     
  return (
    <>
    {/* <div> */}

      <BaseEdge  id={id} path={edgePath}  />    
      <EdgeLabelRenderer  >
      <button
          onClick={() => setEdges((edges) => edges.filter((e) => e.id !== HoverEdge))}
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: 'all',
                     }}
          className={`" ${HoverEdge==id? 'opacity-100':"opacity-0"}  absolute z-[10000] inline-block px-3 py-2 text-sm font-medium transition-opacity duration-100 bg-sky-400 text-white rounded-lg shadow   "`}
        >
        Delete
        </button>
      </EdgeLabelRenderer>
     
 
    </>
  )
}

export default CostumEdge
