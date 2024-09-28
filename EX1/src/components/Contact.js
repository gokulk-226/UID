import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="contact-section">
                <h2>Contact Us</h2>
                <form className="contact-form">
                    <label>Name:</label>
                    <input type="text" name="name" />
                    <label>Email:</label>
                    <input type="email" name="email" />
                    <label>Message:</label>
                    <textarea name="message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </section>

            <section className="contact-section">
                <h2>Administration/Reception</h2>
                <p>KONGU ENGINEERING COLLEGE<br />
                Perundurai, Erode-638 060, Tamilnadu, India<br />
                Phone: 04294 - 226555, 226666, 226500</p>
            </section>

            <section className="contact-section">
                <h2>Principal</h2>
                <p>Phone: 04294 - 220583<br />
                Fax: 04294 - 220087<br />
                E-mail: <a href="mailto:principal@kongu.ac.in">principal@kongu.ac.in</a></p>
            </section>

            <section className="contact-section">
                <h2>Admission Enquiry</h2>
                <p>Phone: 04294-226515 / 04294-226517<br />
                Mobile: 9965277765 / 9443020583</p>
            </section>

            <section className="contact-section">
                <h2>Placement & Training Cell</h2>
                <p>Placement Officer<br />
                Phone: 04294 - 226644, 226564<br />
                Fax: 04294 - 220087<br />
                E-mail: <a href="mailto:placement@kongu.ac.in">placement@kongu.ac.in</a>, <a href="mailto:placement@kongu.edu">placement@kongu.edu</a></p>
            </section>

            <section className="contact-section">
                <h2>Industry Institute Partnership Cell</h2>
                <p>Chief Co-ordinator<br />
                Phone: 04294-225777 (DIRECT), 226642<br />
                Telefax: 04294 - 225777(DIRECT)<br />
                Mobile No.: +91 9952460698<br />
                E-mail: <a href="mailto:keciipc@kongu.ac.in">keciipc@kongu.ac.in</a></p>
            </section>

            <section className="contact-section hostel">
                <h2>Hostel</h2>
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name of the Faculty / Designation</th>
                            <th>Mobile Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Dr.K.Kannan<br />Associate Warden (All Hostels)</td>
                            <td>9842823432</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Major Dr.P.S.Raghavendran<br />Sr.Deputy Warden (Boys Hostels)</td>
                            <td>9486905006</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Dr.S.Kalaiselvi<br />Sr.Deputy Warden (Girls Hostels)</td>
                            <td>9865046699</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Mr.K.M.Prakash<br />Assistant Manager</td>
                            <td>9965902006</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Ms.J.Balasaraswathi<br />Matron, Ladies Hostel</td>
                            <td>9600162009</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Contact;
