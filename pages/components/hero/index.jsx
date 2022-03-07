import {useEffect, useState} from "react";
import axios from 'axios';

export default function Hero() {
    const [quote, setQuote] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect( () => {
        fetchRandomQuote()
    }, [])

    const fetchRandomQuote = async () => {
        setLoading(true)
        const result = await axios(
            'https://tronalddump.io/random/quote',
        );
        setQuote(result.data)
        setLoading(false)
    }

    return(
        <div className="backgroundImageTrump">
            <div className="center flex-column">
                <h1 className="center">Dump Trump Quotes</h1>
                <div className="boxpadding center">
                    <div className="glassmorphismCard center quoteStyle">
                        {isLoading ?
                            <p>Loading...</p>
                            :
                            <blockquote className="quoteText">{quote.value}</blockquote>
                        }
                    </div>
                </div>
                <div className="boxpadding">
                    <button onClick={fetchRandomQuote} className="center button button1">generate</button>
                </div>
            </div>
        </div>
    )
}