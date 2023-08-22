import { useState } from "react";

export default function AddTemplateForm({setTemplateData, templateData}) {

    const [formData, setFormData] = useState({
        "title": "",
        "cost": "",
        // ID : useID? or server
        "description": "",
        "thumbnail": "7164-m.jpg",
        "image": "7164-b.jpg"
    })


    // Submits data to endpoint and updates Template context with response
    const submitTemplate = (e) => {
        e.preventDefault()
        // Example POST method implementation:
        async function postData(url = "", data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data), // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
        }

        postData("/api/v1/templates/addTemplate", formData).then((response) => {
            templateData.push(response.data)
            console.log(templateData, templateData)
            setTemplateData(templateData)
        });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    return (
        <div>
            <form onSubmit={submitTemplate}>
                <label for="title">Title</label>
                <input type="text" id="title" name="title" required minLength="4" maxLength="8" size="10" value={formData.title} onChange={handleInputChange} />
                <br />
                <label for="description">Description</label>
                <input type="text" id="description" name="description" required minLength="4" maxLength="8" size="10" value={formData.description} onChange={handleInputChange} />
                <br />
                <label for="cost">Cost</label>
                <input type="number" id="cost" name="cost" min="10" max="100" value={formData.cost} onChange={handleInputChange} />
                <br />
                <label for="large-image">Large Image - size 800*800</label>
                <input type="file" id="large-image" name="large-image" accept="image/jpeg" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

