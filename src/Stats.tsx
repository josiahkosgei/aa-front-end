import * as d3 from 'd3';


function Stats(props: { data: { a: number; b: number; }[]; width: any; height: any; }) {
  const { data, width, height } = props;
  const margin = 10
  const h = height - 2 * margin, w = width - 2 * margin


  //x scale
  const minmax = d3?.extent(data, (d: any) => d.a) as [number, number]
  const x = d3?.scaleLinear()
    .domain(minmax) 
    .range([margin, w])

  //y scale
  const y = d3?.scaleLinear()
    .domain([0, d3?.max(data, (d: any) => d.b)])
    .range([h, margin])

  //line generator
  const line = d3?.line()
    .x((d: any) => x(d.a))
    .y((d: any) => y(d.b))
    .curve(d3?.curveCatmullRom.alpha(0.5))

  return (
    <svg width={width} height={height}>
      <path d={line(data as []) as string} stroke="#6d28d9" strokeWidth="3px" />
    </svg>
  )
}

export default Stats;