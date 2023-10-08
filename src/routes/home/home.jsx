import data from '../../data.json'
import './home.css'

const Home = () => {
    return (
        <div className='homePage page'>
            <div className='hero'>

                <section className='hero_txt'>
                    <h2 className='subtitle hero_txt_title'>so you want to travel to <span className='hero_txt_lg'>space</span>
                    </h2>

                    <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                </section>
                <div className='btn_container'>
                    <button className='ctaBtn'>explore</button>
                </div>
            </div>
        </div>
    )
}
export default Home