import fs from "fs/promises";
import fsn from "fs";
import path from "path";
const basepath = "//home//bhanu//Desktop//nodejs//clutterex";

let files = await fs.readdir(basepath);
for(const item of files){
    console.log("Running for: " , item);
    let ext = item.split(".")[item.split(".").length - 1]
    if(ext != "js" && ext != "json" && item.split(".").length > 1){
        if(fsn.existsSync(path.join(basepath, ext))){
            await fs.rename(path.join(basepath , item) , path.join(basepath, ext , item))
        }
        else{
            await fs.mkdir(ext)
            await fs.rename(path.join(basepath , item) , path.join(basepath, ext , item))
        }
    }
}