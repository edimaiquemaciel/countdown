import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CountdownContext } from "../context/CountdownContext";

import "./Home.css";

function Home() {

    const {setEvent} = useContext(CountdownContext);
    const navigate = useNavigate();

    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [image, setImage] = useState();
    const [color, setColor] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        const eventObject = {
            title,
            date,
            image,
            color,
        };

        setEvent(eventObject);
        navigate("/countdown");
        
    }


    return (
        <div className="home">
            <h2>Monte a sua contagem regressiva!</h2>
            <form onSubmit={handleSubmit} className="countdown-form">
                <label>
                    <span>Título:</span>
                    <input type="text" name="title" placeholder="Digite o título do evento" onChange={(e) => setTitle(e.target.value)}  required/>
                </label>
                <label>
                    <span>Data do evento:</span>
                    <input type="date" name="date" onChange={(e) => setDate(e.target.value)} required/>
                </label>
                <label>
                    <span>Imagem:</span>
                    <input type="text" name="image" placeholder="Insira a URL da imagem" onChange={(e) => setImage(e.target.value)}/>
                </label>
                <label id="label-color">
                    <span>Cor do tema:</span>
                    <input type="color" name="color" onChange={(e) => setColor(e.target.value)} required/>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default Home
