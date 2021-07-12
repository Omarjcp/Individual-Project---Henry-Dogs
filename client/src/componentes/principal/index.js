
import { Link } from 'react-router-dom';


export const Principal = () => {
    return (
        <div>

            <div>

                <div>
                    <input 
                        placeholder='Buscar por raza...'
                    />
                </div>

                <div>
                    <select name="filtrado">
                        <option disabled selected>Ordenar por</option>
                        <option value="1">Mayor peso</option>
                        <option value="2">Menos peso</option>
                        <option value="3">Raza A-Z</option>
                        <option value="4">Raza Z-A</option>
                    </select>
                </div>

                <div>


                        <h4>Filtrar por:</h4>

                            <div style={{display:'flex', flexDirection:'column'}}>
                                <span>Temperamentos</span>
                                <label><a href='#'>triste</a></label>
                                <label><a href='#'>enojon</a></label>
                                <label><a href='#'>feliz</a></label>
                            </div>

                            <div style={{display:'flex', flexDirection:'column'}}>
                                <span>Razas</span>
                                <label><a href='#'>pudul</a></label>
                                <label><a href='#'>pitbul</a></label>
                                <label><a href='#'>chauchau</a></label>
                            </div>

                </div>
                
            </div>
            
            <div style={{display:'flex',  alignItems:'center', flexDirection:'column' ,border:'1px solid black', width:'15rem' }}>
                <img src="https://i2.wp.com/thehappening.com/wp-content/uploads/2018/12/sombreros-perritos-7.jpg?fit=1024%2C694&ssl=1" style={{height:'10rem', width:'10rem'}}></img>
                <h3>Raza del perrito</h3>
                <span>Nombre</span>
                <h4>Temperamento del perrito</h4>
                <span>Temperamentos de perrito</span>

                {/* <Link to={`/raza/${raza.id}`}> */}
				    <button>Detalle de raza</button>
			    {/* </Link> */}
                
            </div>

            <div style={{display:'flex',  alignItems:'center', flexDirection:'column' ,border:'1px solid black', width:'15rem' }}>
                <img src="https://i2.wp.com/thehappening.com/wp-content/uploads/2018/12/sombreros-perritos-7.jpg?fit=1024%2C694&ssl=1" style={{height:'10rem', width:'10rem'}}></img>
                <h3>Raza del perrito</h3>
                <span>Nombre</span>
                <h4>Temperamento del perrito</h4>
                <span>Temperamentos de perrito</span>

                <Link to={`/raza/1`}>
				    <button>Detalle de raza</button>
			    </Link>
            </div>

        </div>
    )
}