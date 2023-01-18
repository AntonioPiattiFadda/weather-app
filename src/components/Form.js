import React, {useEffect, useState} from 'react';

const Form = ({newLocation}) => {
    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('CITY', city)
        if(city === "" || !city) return;
        newLocation(city);
    }
    useEffect(() =>{
        setCity(localStorage.getItem('CITY') || '')
    },[])

    return(

        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mx-auto">
                    <input value={city} type="text" className="form-control" placeholder="Ciudad" onChange={(e) =>setCity(e.target.value)}/>
                    <button className="btn btn-primary input-group-text" type="submit">Buscar</button>
                </div>
            </form>
        </div>

    );
}

export default Form;