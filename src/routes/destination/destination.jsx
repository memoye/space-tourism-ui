import './destination.css'
import data from '../../data.json'
import { NavBar } from '../../components'
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'




export default () => {
    const navigate = useNavigate()
    const { name } = useParams()

    useEffect(() => {
        if (!name) navigate('/dest/moon')
    }, [name])

    return (
        <section className='destPage'>
            <div className='destPageContent'>
                <h1 className="subtitle page_title">
                    <span className='subtitleNum'>01</span> pick your destination
                </h1>
                <section className='destination_container'>
                    <Outlet />
                </section>
            </div>
        </section>
    )
}

export function DestinationCard() {
    const { name: destName } = useParams()
    const { name, images, description, distance, travel } = data.destinations.find(destination => destination.name.toLowerCase() === destName)
    const navigate = useNavigate()

    return (
        <div className='destination'>

            <div className='destination_img'>
                <img src={ images.png } alt={ name } />
            </div>
            <section className='destination_txt'>
                <NavBar
                    className={ 'destinationNav' }
                >
                    <ul>
                        { data.destinations
                            .map(destination => (
                                <li key={ destination.name }
                                    onClick={ () => {
                                        navigate(`/dest/${destination.name.toLowerCase()}`)
                                    } }
                                >
                                    <NavLink
                                        to={ `/dest/${destination.name.toLowerCase()}` }
                                        className={ `nav_text ${({ isActive }) => isActive ? 'active' : ''}` }
                                    >
                                        { destination.name }
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </NavBar>
                <h2 className='destination_name'>{ name }</h2>
                <p className='destination_desc'>{ description }</p>
                <hr />
                <div className='destination_foot'>
                    <div className='foot_item'>
                        <h3 className="subheading2">avg distance</h3>
                        <p className='foot_item_value'>{ distance }</p>
                    </div>

                    <div className='foot_item'>
                        <h3 className="subheading2">est. travel time</h3>
                        <p className='foot_item_value'>{ travel }</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
