import resume from '../styles/files/lainey-creighton-resume.pdf'
import '../styles/Work.css';

//Export the Work page
export default function Work() {
    return (
        <div className='work'>
            <div className='skills'>
                <h4>Skills</h4>
                <ul className='skills-list'>
                    <li><b>Programming Languages:</b> JavaScript</li>
                    <li><b>Browser Based:</b> HTML, CSS, jQuery, Responsive Design,
                        Bootstrap, PWAs, Local Storage, Session Storage, IndexedDB,
                        React.js
                    </li>
                    <li><b>Databases:</b> MySQL, Sequelize, NoSQL, MongoDB</li>
                    <li><b>Server Side Development:</b> User Authentication, Template Engines, MERN Stack - MongoDB, Express.js, React.js, Node.js</li>
                    <li><b>API Design:</b> Client-Server Model, API, Rest, JSON, AJAX(Fetch API), HTTP request methods, GraphQL</li>
                    <li><b>Deployment and Delivery:</b> Heroku, Git, GitHub Pages, Continuous Integration</li>
                    <li><b>Testing:</b> API Testing, Test-Driven Development(TDD), Postman</li>
                    <li><b>Computer Science:</b> Algorithms, Performance, Time Complexity, Big O Notation, Data Structures</li>
                    <li><b>Other:</b> Agile/Scrum Methodology, ORM, OOP, MVC</li>
                </ul>
            </div>
            <div className='resume'>
                <h3>
                    <a href={resume} download="lainey-creighton-resume.pdf">
                        Lainey Creighton Resume
                    </a>
                </h3>
            </div>
        </div>
    )
}