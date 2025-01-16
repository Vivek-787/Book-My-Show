




async function main() {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(3000);
    //console.log("listening on port 3000")
} 

main()