import Form from 'react-bootstrap/Form';

function List({tareas}) {
    console.log("Props recibidas en List:", tareas);

    if (!Array.isArray(tareas)) {
        return <p>No hay tareas disponibles.</p>;
      }
    return (
        <>
            {tareas.map((tarea) => (
                <div key={`default-${tarea.id}`} className="mb-3">
                    <Form.Check // prettier-ignore
                        type={'checkbox'}
                        id={`${tarea.id}`}
                        label={`${tarea.text}`} 
                    />
                </div>
            ))}
        </>
    );
}
export default List;