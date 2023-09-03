import pic from '../styles/images/lainey.png'
import '../styles/About.css';

//Export the About page
export default function About() {
    return (
        <article className="about-article">
            <div className="info">
                <div className="title">
                    <h1>Lainey Creighton</h1>
                    <h2>Software Developer</h2>
                </div>
                <div className="bio">
                    <p>Hello, I'm Lainey Creighton, a passionate software developer with a strong foundation in hospitality and events management. With over eight years of experience in customer-centric environments, I'm now pursuing a full stack certification from UC Berkeley to dive into the dynamic world of software development. I'm driven by curiosity, excited to merge creative problem-solving with precise programming, and dedicated to embracing challenges in this evolving industry.
                    </p>
                </div>
            </div>
            <div className='pic'>
                <img src={pic} alt='lainey in santa monica' />
            </div>
        </article>
    )
}