import { Outlet, useNavigate, useParams } from 'react-router-dom'
import './crew.css'
import data from '../../data.json'
import { Nav } from '../../components'
import { useEffect } from 'react'


export default () => {
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        if (!id) navigate('/crew/1')
    }, [id])

    return (
        <section className='crewPage'>
            <h1 className="subtitle page_title">
                <span className='subtitleNum'>02</span>meet your crew
            </h1>
            <section className='crew_container'>
                <Outlet />
            </section>
        </section>
    )
}

export function CrewMember() {
    const { id: crewId } = useParams()
    const { name, images, role, bio } = data.crew.find(member => member.id === crewId)

    return (
        <div className='crew_member'>
            <section className='memberContent'>
                <div className='memberContent_text'>
                    <h2 className='member_role'>{ role }</h2>
                    <h3 className='member_name'>{ name }</h3>
                    <p className='member_bio'>{ bio }</p>
                </div>

                <Nav
                    data={ data.crew }
                    className={ 'crewNav' }
                />
            </section>

            <div className='crew_member_img'>
                <img src={ images.png } alt={ name } />
            </div>
        </div >
    )
}