import workHistory from '../ExData'
import './style.ex.css'
function Experience() {
    return (
        <div id="Experience" className="">
            <section  id='experience' className='my-28 px-5 h-screen'>
                <header className='text-5xl font-bold pt-10 border-b-2 border-gray-300 pb-3'>
                    <h2>Experience</h2>
                </header>
                <div className=''>
                    <div className="main-cont">
                        <section id="cd-timeline" className="cd-container">
                            {workHistory && workHistory.map((work) => (
                                <div key={work?.companyName} className="cd-timeline-block">
                                    <div className="cd-timeline-img cd-picture"></div>
                                    <div className="cd-timeline-content">
                                        <h1 className="uppercase font-bold text-2xl pl-3 pt-2 flex">{work?.companyName}
                                        </h1>
                                        <h4 className="uppercase font-bold text-base pl-3 pt-2">{work?.role}</h4>
                                        <div className='pl-2'>
                                            {work?.workDes && work.workDes.map((x, index) => (
                                                <h4 key={index} className='text-base pt-2'>
                                                    <span className="text-2xl"></span> {x}
                                                </h4>
                                            ))}
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Experience
