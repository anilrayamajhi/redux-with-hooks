import React, {useState} from "react";

export function ContactForm({submitContactForm}) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [jobtitle, setJobtitle] = useState("");
    const [website, setWebsite] = useState("");
    const [question, setQuestion] = useState("");

    let canBeSubmitted = () => {
        if ((!firstname || firstname.trim().length === 0) ||
        (!lastname || lastname.trim().length === 0) ||
        (!phone || phone.trim().length === 0) ||
        (!email || email.trim().length === 0) ||
        (!company || company.trim().length === 0) || 
        (!jobtitle || jobtitle.trim().length === 0) 
        ) { 
            return false; 
        }
        return true;
    }

    let handleChange = (event) => {
        switch (event.target.name) {
            case 'firstname': 
                setFirstname(event.target.value)
                break;
            case 'lastname':
                setLastname(event.target.value)
                break;
            case 'phone':
                setPhone(event.target.value)
                break;
            case 'email':
                setEmail(event.target.value)
                break;
            case 'company':
                setCompany(event.target.value)
                break;
            case 'jobtitle':
                setJobtitle(event.target.value)
                break;
            case 'website':
                setWebsite(event.target.value)
                break;
            case 'question':
                setQuestion(event.target.value)
                break;
            default:
                break;
        }
    }

    let handleSubmit = (event) => {
        alert('You are submitting for ' + firstname + " " + lastname);
        event.preventDefault();

        if (typeof submitContactForm === 'function') {
            submitContactForm({firstname, lastname, phone, email, company, jobtitle, website, question});
        }
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <input name="firstname" type="text" placeholder="First Name" value={firstname} onChange={handleChange}/>
            <input name="lastname" type="text" placeholder="Last Name" value={lastname} onChange={handleChange}/>
            <input name="phone" type="text" placeholder="Phone" value={phone} onChange={handleChange}/>
            <input name="email" type="email" placeholder="Email" value={email} onChange={handleChange}/>
            <input name="company" type="text" placeholder="Company" value={company} onChange={handleChange}/>
            <input name="jobtitle" type="text" placeholder="Job Title" value={jobtitle} onChange={handleChange}/>
            <input name="website" type="text" placeholder="Existing Website URL?" value={website} onChange={handleChange}/>
            <textarea name="question" placeholder="How may we help you?" value={question} onChange={handleChange} />
            <button type="submit" className="eq-button" disabled={!canBeSubmitted()}>
                {canBeSubmitted() ? (
                    <span>Let's get Talking</span>
                ) : (
                    <span>Please fill in the form</span>
                )}
            </button>
        </form>
    );
}