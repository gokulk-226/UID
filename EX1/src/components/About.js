import React from 'react';
import './About.css';


const About = () => {
    return (
        <section className="about">
            <div className="about-content">
                <h2>About KEC</h2>
                <p>Kongu Engineering College, one of the foremost multi-professional research-led Institutions, is internationally recognized as a leader in professional and career-oriented education. It provides an integral, inter-disciplinary education - a unique intersection between theory and practice, passion and reason. The College offers courses of study that are on the frontiers of knowledge and it connects the spiritual and practical dimensions of intellectual life, in a stimulating environment that fosters rigorous scholarship and a supportive community.</p>
                <p>This Institute is a great possession of the committed Trust called 'The Kongu Vellalar Institute of Technology Trust' in Erode District, Tamilnadu. The noble Trust has taken the institute to greater heights since its inception in 1983 and has established the college as a forum for imparting value-based education for men and women.</p>
                <p>The word 'Kongu' refers to a region of the southern state of India and the term 'Kongu Vellalar' specifically means the agricultural community, predominated in the west of Tamilnadu, which was deprived of educational facilities in those days. To achieve technical excellence in their rural areas, 41 philanthropists from different walks of life who realized the need for technical education for their region's economic strides, collectively formed a Trust called 'The Kongu Vellalar Institute of Technology Trust' and they promoted and developed equality of opportunity for the rich and the poor.</p>
                <p>Affiliated to Anna University Chennai, the college has completed more than three decades of dedicated service to the people of India and abroad in the field of Technical Education. The Institution has an area of 167 acres of land richly endowed with beautiful greenery. The college, with its state-of-the-art infrastructural facilities and excellent academic records, has earned recognition as one of the reputed educational institutions for men and women in India.</p>
                <p>Tamilnadu Government G.O. Ms. No. 1294 dated 29.9.1984<br />
                AICTE, New Delhi approval No. F.No.45-46/91-AICTE/586 dated 19.4.1993</p>
                <h3>Other Institutions of the KVIT Trust</h3>
                <ul>
                    <li>Kongu Polytechnic College, Perundurai.</li>
                    <li>Kongu Arts & Science College, Nanjanapuram, Erode.</li>
                    <li>Kongu School of Architecture, Perundurai.</li>
                    <li>Kongu Naturopathy and Yoga Medical College & Hospital, Perundurai.</li>
                    <li>Kongu Private Industrial Training Institute, Perundurai.</li>
                    <li>Kongu National Matriculation School, Erode.</li>
                </ul>
            </div>
            <div className="about-image">
                <img src="https://www.kongu.ac.in/images/aboutkec.jpg" alt="Kongu Engineering College" />
            </div>
        </section>
    );
};

export default About;
