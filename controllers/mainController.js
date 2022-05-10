
const controller = {
    index: (req, res) => {
        return res.render('index');
    },
    register: (req, res) => {
        return res.render('registro');
    },
    login: (req, res) => {
        return res.send('Login');
    },
    list: (req, res) => {
        return res.send('userList');
    }
}

module.exports = controller;