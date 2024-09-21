import React from 'react'

const TableRender = () => {
    const arr=[{name: 'jap',age: 18}, {name: 'japjyot',age: 19},{name: 'jasnee',age: 22}]
  return (
    <div>
        <table>
            <thead>
                <th>name</th>
                <th>Age</th>
            </thead>
            <tbody>
                {
                    arr.map((student,index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                        </tr>
                        
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default TableRender
