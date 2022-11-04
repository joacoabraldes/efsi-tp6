




import Glosario from "./Glosario";

const data = [
    {
      categoria: 'Subcontractors',
      cantidad: null,
      color: 'purple',
      
    },
    {
      categoria: 'Training',
      cantidad: 0,
      color: 'lightblue', 
    },
    {
      categoria: 'Pending Status',
      cantidad: 6,
      color: 'red',
    },
    {
      categoria: 'Overassigned',
      cantidad: null,
      color: 'orange',
    },
    {
      categoria: 'Low Allocation',
      cantidad: null,
      color: 'pink',
    },
  ]

function GlosarioItem() {
  return (
    <div className="GlosarioItem">
      <Glosario data={data}/>
    </div>
  );
}

export default GlosarioItem;