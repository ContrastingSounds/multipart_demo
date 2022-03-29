const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

const test_file = 'test_image.jpeg'

const upload = async () => {
    try {
        let file = fs.createReadStream(test_file);

        const form = new FormData();
        form.append('file', file);
        
        const resp = await axios.post('http://1547be13e4b1.ngrok.io/upload', form, {
            headers: {
                ...form.getHeaders(),
            }
        });

        if (resp.status === 200) {
            return 'Upload complete';
        }
    } catch(err) {
        return new Error(err.message);
    }
}

upload().then(resp => console.log(resp));