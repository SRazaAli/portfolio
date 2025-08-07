import { useState } from "react"
import emailjs from '@emailjs/browser';
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("success");
    const [alertMessage, setAlertMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const generateAlert = (type, message) => {
        setAlertType(type);
        setAlertMessage(message)
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await emailjs.send(
                "service_cvle389",
                "template_myorecm",
                {
                    from_name: formData.name,
                    to_name: "Syed Muhammad Raza Ali",
                    from_email: formData.email,
                    to_email: "asyedraza85632@gmail.com",
                    message: formData.message
                },
                "tm12gIUs8cHQ6Xzj5"
            )
            setIsLoading(false);
            setFormData({ name: "", email: "", message: "" });
            generateAlert("success", "Your message has been sent successfully");
        }
        catch (error) {
            setIsLoading(false);
            console.log(error)
            generateAlert("danger", "There was an error");
        }
    }
    return (
        <section
            id="contact"
            className='relative flex items-center c-space section-spacing '>
            <Particles
                className="absolute inset-0 -z-50"
                quantity={100}
                ease={80}
                color={"#ffffff"}
                refresh
            />
            {showAlert && <Alert type={alertType} message={alertMessage} />}

            <div className='flex flex-col items-center justify-content-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary '>
                <div className='flex flex-col items-start w-full gap-5 mb-10'>
                    <h2 className='text-heading'>Let's Talk</h2>
                    <p className='font-normal text-neutral-400'>Whether you're loking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help</p>
                </div>
                <form
                    action=""
                    className='w-full '
                    onSubmit={handleSubmit}>
                    <div className='mb-5'>
                        <label
                            htmlFor="name"
                            className='field-label'>
                            Full Name
                        </label>
                        <input
                            type="text"
                            id='name'
                            name='name'
                            onChange={handleChange}
                            value={formData.name}
                            className='field-input field-input-focus'
                            placeholder='John Doe'
                            autoComplete='name'
                            required />

                    </div>

                    <div className='mb-5'>
                        <label
                            htmlFor="email"
                            className='field-label'>
                            Email
                        </label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            onChange={handleChange}
                            value={formData.email}
                            className='field-input field-input-focus'
                            placeholder='JohnDoe@gmail.com'
                            autoComplete='email'
                            required />

                    </div>

                    <div className='mb-5'>
                        <label
                            htmlFor="message"
                            className='field-label'>
                            Message
                        </label>
                        <textarea
                            type="text"
                            id='message'
                            name='message'
                            rows={4}
                            onChange={handleChange}
                            value={formData.message}
                            className='field-input field-input-focus'
                            placeholder='Share your thoughts...'
                            autoComplete='message'
                            required />

                    </div>
                    <button
                        className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation'
                    >{isLoading ? "Sending..." : "Send"}</button>
                    {/* service_cvle389 */}
                    {/* template_myorecm */}
                </form>
            </div>

        </section>
    )
}

export default Contact
