const ejs = require("ejs");
const fs = require("fs");

const walkSync = require("walk-sync")

const interpol = {
    widgets: {

    }
}

for (const file of fs.readdirSync("./widgets")) {
    interpol.widgets[file.replace(".html", "")] = fs.readFileSync("./widgets/" + file).toString("utf8")
}

fs.rmdirSync("./dist", { recursive: true })
fs.mkdirSync("./dist")

for (const item of walkSync("./web")) {
    if (item.endsWith(".ejs")) {
        const content = fs.readFileSync("./web/" + item).toString("utf8")
        const template = ejs.compile(content)
        const html = template(interpol)
        fs.writeFileSync("./dist/" + item.slice(0, -4) + ".html", html)
    } else if (item.endsWith(".ecss")) {
        
    } else {
        if (item.endsWith("/")) {
            fs.mkdirSync("./dist/" + item)
        } else {
            const content = fs.readFileSync("./web/" + item).toString("utf8")
            fs.writeFileSync("./dist/" + item, content)
        }
    }
}

// const interpol = require("interpol");


// for (const file of files) {
//     if (file.endsWith(".ejs")) {
//         const data = fs.readFileSync(data).toString("utf8");

//         const template = ejs.compile(data);
//         const html = template(template, interpol)

//         fs.writeFileSync("./dist/")
//     }
// }