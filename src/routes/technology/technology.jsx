import { useEffect } from 'react'
import './technology.css'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import data from '../../data.json'
import { Nav } from '../../components'

export default () => {
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

                <section className='tech_container'>
                    <Outlet />
                </section>
            </section>
        </section>
    )
}

export function Tech() {
    const { id: techId } = useParams()
    const { name, images, description } = data.technology.find(item => item.id === techId)

    return (
        <div className='tech_item'>
            <section className='itemContent'>
                <Nav
                    data={ data.technology }
                    className={ 'techNav' }
                    parent={ 'tech' }
                    numLabel
                />

                <div className='tech_text'>
                    <h3 className='nav_text heading3'>the terminologies</h3>
                    <h4 className='tech_name'>{ name }</h4>
                    <p className='tech_desc'>{ description }</p>
                </div>
            </section>

            <div className='tech_img'>
                <img className='mobile_img' src={ images.landscape } alt={ name } />
                <img className='desktop_img' src={ images.portrait } alt={ name } />
            </div>
        </div >
    )
}