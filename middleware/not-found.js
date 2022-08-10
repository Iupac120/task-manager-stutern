
const notFound = (req,res)=>{
    res.status(404).json({message:"routes does not exist"})
}

module.exports = notFound