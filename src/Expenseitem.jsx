

function Expenseitem({item,onDelete}) {
  return (
    <div className="expense-item">
        <span>{item.title} </span>
        <span>{item.amount}</span>
        <button onClick={()=>onDelete(item.id)}>❌</button>
        </div>
  )
}

export default Expenseitem
