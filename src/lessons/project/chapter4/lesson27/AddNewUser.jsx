import { useState } from "react";

const AddNewuser = (props) => {
    const [id, setId] = useState('');
    const [username, setUsername] = useState('');
    const [image, setImage] = useState(null);
    const { addNew } = props;

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

    const handleOnchangeImage = async (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            let strToReplace = await toBase64(event.target.files[0]);
            let strImage = strToReplace.replace(/^data:image\/[a-z]+;base64,/, "");
            setImage(strImage);
        }
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        if (!id || !username || !image) {
            toast.error('Invalid input');
            return;
        }
        addNew({ id, username, image });
    }

    return (
        <div className="add-new-user">
            <h5>Add new user:</h5>
            <form>
                <div className="col-6 mt-2">
                    <label className="form-label">ID:</label>
                    <input type="text" className="form-control" onChange={e => setId(e.target.value)} />
                </div>
                <div className="col-6 mt-2">
                    <label className="form-label">Username:</label>
                    <input type="text" className="form-control" placeholder="Your name..."
                        onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="col-6 mt-2">
                    <label className="form-label">Image:</label>
                    <input type="file" className="form-control" placeholder="image.jpg"
                        onChange={e => handleOnchangeImage(e)} />
                </div>
                <div className="col-6 mt-3">
                    <button type="submit" className="btn btn-primary"
                        onClick={handleCreateUser}>Save</button>
                </div>
            </form>
        </div>
    )
}
export default AddNewuser;