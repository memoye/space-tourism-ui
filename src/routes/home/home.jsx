import data from '../../data.json'
import './home.css'

const Home = () => {
    console.log(data)
    return (
        <section className='homePage'>
            <section className='hero'>
                <section className='hero_txt'>
                    <h1 className='subtitle hero_txt_title'>so you want to travel to <span className='hero_txt_lg'>space</span>
                    </h1>

                    <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                </section>
                <div className='btn_container'>
                    <button className='ctaBtn'>explore</button>
                </div>
            </section>
        </section>
    )
}
export default Home