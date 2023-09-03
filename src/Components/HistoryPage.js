import React from 'react'
import { useSelector } from 'react-redux';

const HistoryPage = () => {
  const history = useSelector((state) => state.history.history)

  return (
    <div className="history">
            <h1>Searched History</h1>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>
                        <a> {item.word} </a>
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default HistoryPage