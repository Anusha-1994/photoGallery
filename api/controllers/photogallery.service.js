const fs = require("fs")
const dataStore = require("../photoStore.json")

exports.get_photos = (async (request, response) => {

    try {
        return response.status(200).send({
            result: dataStore
        });

    } catch (error) {
        return response.status(500).send({
            result: "something went wrong"
        });
}
})

exports.update_photos = (async (request, response) => {

    try {
        let foundIndex = dataStore.findIndex(data => data.id == request.body.id);
        dataStore[foundIndex] = { ...dataStore[foundIndex],...request.body};
        fs.writeFile("photoStore.json", JSON.stringify(dataStore), function (err) {
            if (err) return response.status(500).send({result: "something went wrong"});
            return response.status(200).send({result: "Success"});
        });
    } catch (error) {
        return response.status(500).send({
            result: "something went wrong"
        });
    }
})


