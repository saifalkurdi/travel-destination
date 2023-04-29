import data from '../../data/db.json'

export default function Tours(){
  return (
    <>
    {
      data.map(item =>{
        return(
          <div key={item.id} >
            <p>{item.name}</p>
            <img src={item.image} alt={item.name}></img>
            <hr />
          </div>
        )
      })
    }
    </>
  )
}