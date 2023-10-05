import { useEffect } from 'react'
import './technology.css'
import { useNavigate, useParams } from 'react-router-dom'

const Technology = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        if (!id) navigate('/tech/1')
    }, [id])

    return (
        <section className='techPage'>
            <section>
                <h1 className="subtitle page_title">
                    <span className='subtitleNum'>03</span> Space Launch 101
                </h1>

                <div>
                    <h2></h2>
                </div>
            </section>
        </section>
    )
}
export default Technology