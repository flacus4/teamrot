module.exports = () => {

    const data = {
        tasks: [],
    }

    for (let i = 0; i < 10; i++) {
        data.tasks.push({
            id: i,
            error: 12,
            module: "Camera-Station",
            description: "",
            status: "neu"
        })
    }
    console.log(tasks)
    return data
}