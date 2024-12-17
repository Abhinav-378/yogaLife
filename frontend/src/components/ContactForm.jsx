import React, { useState } from 'react';

// Todo : include a loading animation in the form while sending the data

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        query: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                alert('Query sent successfully!');
                setFormData({ name: '', email: '', query: '' }); // Reset form
            } else {
                alert('Failed to send query. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Please try again later.');
        }
    };

    return (
        <div className="p-6 bg-gray-100 rounded-md shadow-md w-full max-w-md mx-auto">
            <h1 className="text-xl font-semibold mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border rounded p-2 w-full"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border rounded p-2 w-full"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-medium">Query</label>
                    <textarea
                        name="query"
                        value={formData.query}
                        onChange={handleChange}
                        className="border rounded p-2 w-full"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
