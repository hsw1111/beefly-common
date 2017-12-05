
const mapUtils = {

    mapToArray(map) {
        let array = [];
        for (let key in map) {
            array.push({
                key, value: map[key]
            })
        }
        return array
    }

};

export default mapUtils