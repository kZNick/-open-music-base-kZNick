const categoryTodos = document.getElementById("categoryTodos")
const categoryPop = document.getElementById("categoryPop")
const categoryMPB = document.getElementById("categoryMPB")
const categoryForro = document.getElementById("categoryForro")
const categorySamba = document.getElementById("categorySamba")
const categoryBaiao = document.getElementById("categoryBaiao")
const categoryRap = document.getElementById("categoryRap")
const categoryHipHop = document.getElementById("categoryHipHop")
const categoryRock = document.getElementById("categoryRock")
const categoryReggae = document.getElementById("categoryReggae")
const categoryCountry = document.getElementById("categoryCountry")
const categoryGospel = document.getElementById("categoryGospel")

const allcategory = document.querySelectorAll(".buttons-genre")
const productsfound = document.querySelector(".products-found")

allcategory.forEach(bnt =>{
    bnt.addEventListener("click",()=>{
        productsfound.innerHTML = " "
        const filter = bnt.innerHTML 
        if(filter === "Todos"){
         renderingProducts(productsMain, range.value)
        }
        const musicsFilters = filterallmusic(filter)
        console.log(filter)
        renderingProducts(musicsFilters,range.value)
        
    })
})

function filterallmusic(Text) {
    const filtermusic = productsMain.filter(music => music.category.includes(Text))
    console.log(filtermusic)
    return filtermusic
}

//deixar botoes ativos quando clicar

categoryTodos.addEventListener("click",()=>{
        if(categoryTodos.classList.contains("buttons-genre-dark")){
            categoryTodos.classList.remove("buttons-genre-dark-fixe")
            categoryPop.classList.remove("buttons-genre-dark-fixe")
            categoryMPB.classList.remove("buttons-genre-dark-fixe")
            categoryForro.classList.remove("buttons-genre-dark-fixe")
            categorySamba.classList.remove("buttons-genre-dark-fixe")
            categoryBaiao.classList.remove("buttons-genre-dark-fixe")
            categoryRap.classList.remove("buttons-genre-dark-fixe")
            categoryHipHop.classList.remove("buttons-genre-dark-fixe")
            categoryRock.classList.remove("buttons-genre-dark-fixe")
            categoryReggae.classList.remove("buttons-genre-dark-fixe")
            categoryCountry.classList.remove("buttons-genre-dark-fixe")
            categoryGospel.classList.remove("buttons-genre-dark-fixe")
            categoryTodos.classList.add("buttons-genre-dark-fixe")
    }else{
        categoryTodos.classList.remove("buttons-genre-fixe")
        categoryPop.classList.remove("buttons-genre-fixe")
        categoryMPB.classList.remove("buttons-genre-fixe")
        categoryForro.classList.remove("buttons-genre-fixe")
        categorySamba.classList.remove("buttons-genre-fixe")
        categoryBaiao.classList.remove("buttons-genre-fixe")
        categoryRap.classList.remove("buttons-genre-fixe")
        categoryHipHop.classList.remove("buttons-genre-fixe")
        categoryRock.classList.remove("buttons-genre-fixe")
        categoryReggae.classList.remove("buttons-genre-fixe")
        categoryCountry.classList.remove("buttons-genre-fixe")
        categoryGospel.classList.remove("buttons-genre-fixe")
        categoryTodos.classList.add("buttons-genre-fixe")
    }
})

categoryPop.addEventListener("click",()=>{
    if(categoryPop.classList.contains("buttons-genre-dark")){
        categoryTodos.classList.remove("buttons-genre-dark-fixe")
        categoryPop.classList.remove("buttons-genre-dark-fixe")
        categoryMPB.classList.remove("buttons-genre-dark-fixe")
        categoryForro.classList.remove("buttons-genre-dark-fixe")
        categorySamba.classList.remove("buttons-genre-dark-fixe")
        categoryBaiao.classList.remove("buttons-genre-dark-fixe")
        categoryRap.classList.remove("buttons-genre-dark-fixe")
        categoryHipHop.classList.remove("buttons-genre-dark-fixe")
        categoryRock.classList.remove("buttons-genre-dark-fixe")
        categoryReggae.classList.remove("buttons-genre-dark-fixe")
        categoryCountry.classList.remove("buttons-genre-dark-fixe")
        categoryGospel.classList.remove("buttons-genre-dark-fixe")
        categoryPop.classList.add("buttons-genre-dark-fixe")
}else{
    categoryTodos.classList.remove("buttons-genre-fixe")
    categoryPop.classList.remove("buttons-genre-fixe")
    categoryMPB.classList.remove("buttons-genre-fixe")
    categoryForro.classList.remove("buttons-genre-fixe")
    categorySamba.classList.remove("buttons-genre-fixe")
    categoryBaiao.classList.remove("buttons-genre-fixe")
    categoryRap.classList.remove("buttons-genre-fixe")
    categoryHipHop.classList.remove("buttons-genre-fixe")
    categoryRock.classList.remove("buttons-genre-fixe")
    categoryReggae.classList.remove("buttons-genre-fixe")
    categoryCountry.classList.remove("buttons-genre-fixe")
    categoryGospel.classList.remove("buttons-genre-fixe")
    categoryPop.classList.add("buttons-genre-fixe")
}
})

categoryMPB.addEventListener("click",()=>{
    if(categoryMPB.classList.contains("buttons-genre-dark")){
        categoryTodos.classList.remove("buttons-genre-dark-fixe")
        categoryPop.classList.remove("buttons-genre-dark-fixe")
        categoryMPB.classList.remove("buttons-genre-dark-fixe")
        categoryForro.classList.remove("buttons-genre-dark-fixe")
        categorySamba.classList.remove("buttons-genre-dark-fixe")
        categoryBaiao.classList.remove("buttons-genre-dark-fixe")
        categoryRap.classList.remove("buttons-genre-dark-fixe")
        categoryHipHop.classList.remove("buttons-genre-dark-fixe")
        categoryRock.classList.remove("buttons-genre-dark-fixe")
        categoryReggae.classList.remove("buttons-genre-dark-fixe")
        categoryCountry.classList.remove("buttons-genre-dark-fixe")
        categoryGospel.classList.remove("buttons-genre-dark-fixe")
        categoryMPB.classList.add("buttons-genre-dark-fixe")
}else{
    categoryTodos.classList.remove("buttons-genre-fixe")
    categoryPop.classList.remove("buttons-genre-fixe")
    categoryMPB.classList.remove("buttons-genre-fixe")
    categoryForro.classList.remove("buttons-genre-fixe")
    categorySamba.classList.remove("buttons-genre-fixe")
    categoryBaiao.classList.remove("buttons-genre-fixe")
    categoryRap.classList.remove("buttons-genre-fixe")
    categoryHipHop.classList.remove("buttons-genre-fixe")
    categoryRock.classList.remove("buttons-genre-fixe")
    categoryReggae.classList.remove("buttons-genre-fixe")
    categoryCountry.classList.remove("buttons-genre-fixe")
    categoryGospel.classList.remove("buttons-genre-fixe")
    categoryMPB.classList.add("buttons-genre-fixe")
}
})

categoryForro.addEventListener("click",()=>{
    if(categoryForro.classList.contains("buttons-genre-dark")){
        categoryTodos.classList.remove("buttons-genre-dark-fixe")
        categoryPop.classList.remove("buttons-genre-dark-fixe")
        categoryMPB.classList.remove("buttons-genre-dark-fixe")
        categoryForro.classList.remove("buttons-genre-dark-fixe")
        categorySamba.classList.remove("buttons-genre-dark-fixe")
        categoryBaiao.classList.remove("buttons-genre-dark-fixe")
        categoryRap.classList.remove("buttons-genre-dark-fixe")
        categoryHipHop.classList.remove("buttons-genre-dark-fixe")
        categoryRock.classList.remove("buttons-genre-dark-fixe")
        categoryReggae.classList.remove("buttons-genre-dark-fixe")
        categoryCountry.classList.remove("buttons-genre-dark-fixe")
        categoryGospel.classList.remove("buttons-genre-dark-fixe")
        categoryForro.classList.add("buttons-genre-dark-fixe")
}else{
    categoryTodos.classList.remove("buttons-genre-fixe")
    categoryPop.classList.remove("buttons-genre-fixe")
    categoryMPB.classList.remove("buttons-genre-fixe")
    categoryForro.classList.remove("buttons-genre-fixe")
    categorySamba.classList.remove("buttons-genre-fixe")
    categoryBaiao.classList.remove("buttons-genre-fixe")
    categoryRap.classList.remove("buttons-genre-fixe")
    categoryHipHop.classList.remove("buttons-genre-fixe")
    categoryRock.classList.remove("buttons-genre-fixe")
    categoryReggae.classList.remove("buttons-genre-fixe")
    categoryCountry.classList.remove("buttons-genre-fixe")
    categoryGospel.classList.remove("buttons-genre-fixe")
    categoryForro.classList.add("buttons-genre-fixe")
}
})

categorySamba.addEventListener("click",()=>{
    if(categorySamba.classList.contains("buttons-genre-dark")){
        categoryTodos.classList.remove("buttons-genre-dark-fixe")
        categoryPop.classList.remove("buttons-genre-dark-fixe")
        categoryMPB.classList.remove("buttons-genre-dark-fixe")
        categoryForro.classList.remove("buttons-genre-dark-fixe")
        categorySamba.classList.remove("buttons-genre-dark-fixe")
        categoryBaiao.classList.remove("buttons-genre-dark-fixe")
        categoryRap.classList.remove("buttons-genre-dark-fixe")
        categoryHipHop.classList.remove("buttons-genre-dark-fixe")
        categoryRock.classList.remove("buttons-genre-dark-fixe")
        categoryReggae.classList.remove("buttons-genre-dark-fixe")
        categoryCountry.classList.remove("buttons-genre-dark-fixe")
        categoryGospel.classList.remove("buttons-genre-dark-fixe")
        categorySamba.classList.add("buttons-genre-dark-fixe")
}else{
    categoryTodos.classList.remove("buttons-genre-fixe")
    categoryPop.classList.remove("buttons-genre-fixe")
    categoryMPB.classList.remove("buttons-genre-fixe")
    categoryForro.classList.remove("buttons-genre-fixe")
    categorySamba.classList.remove("buttons-genre-fixe")
    categoryBaiao.classList.remove("buttons-genre-fixe")
    categoryRap.classList.remove("buttons-genre-fixe")
    categoryHipHop.classList.remove("buttons-genre-fixe")
    categoryRock.classList.remove("buttons-genre-fixe")
    categoryReggae.classList.remove("buttons-genre-fixe")
    categoryCountry.classList.remove("buttons-genre-fixe")
    categoryGospel.classList.remove("buttons-genre-fixe")
    categorySamba.classList.add("buttons-genre-fixe")
}
})

categoryBaiao.addEventListener("click",()=>{
    if(categoryBaiao.classList.contains("buttons-genre-dark")){
        categoryTodos.classList.remove("buttons-genre-dark-fixe")
        categoryPop.classList.remove("buttons-genre-dark-fixe")
        categoryMPB.classList.remove("buttons-genre-dark-fixe")
        categoryForro.classList.remove("buttons-genre-dark-fixe")
        categorySamba.classList.remove("buttons-genre-dark-fixe")
        categoryBaiao.classList.remove("buttons-genre-dark-fixe")
        categoryRap.classList.remove("buttons-genre-dark-fixe")
        categoryHipHop.classList.remove("buttons-genre-dark-fixe")
        categoryRock.classList.remove("buttons-genre-dark-fixe")
        categoryReggae.classList.remove("buttons-genre-dark-fixe")
        categoryCountry.classList.remove("buttons-genre-dark-fixe")
        categoryGospel.classList.remove("buttons-genre-dark-fixe")
        categoryBaiao.classList.add("buttons-genre-dark-fixe")
}else{
    categoryTodos.classList.remove("buttons-genre-fixe")
    categoryPop.classList.remove("buttons-genre-fixe")
    categoryMPB.classList.remove("buttons-genre-fixe")
    categoryForro.classList.remove("buttons-genre-fixe")
    categorySamba.classList.remove("buttons-genre-fixe")
    categoryBaiao.classList.remove("buttons-genre-fixe")
    categoryRap.classList.remove("buttons-genre-fixe")
    categoryHipHop.classList.remove("buttons-genre-fixe")
    categoryRock.classList.remove("buttons-genre-fixe")
    categoryReggae.classList.remove("buttons-genre-fixe")
    categoryCountry.classList.remove("buttons-genre-fixe")
    categoryGospel.classList.remove("buttons-genre-fixe")
    categoryBaiao.classList.add("buttons-genre-fixe")
}
})

categoryRap.addEventListener("click",()=>{
    if(categoryRap.classList.contains("buttons-genre-dark")){
        categoryTodos.classList.remove("buttons-genre-dark-fixe")
        categoryPop.classList.remove("buttons-genre-dark-fixe")
        categoryMPB.classList.remove("buttons-genre-dark-fixe")
        categoryForro.classList.remove("buttons-genre-dark-fixe")
        categorySamba.classList.remove("buttons-genre-dark-fixe")
        categoryBaiao.classList.remove("buttons-genre-dark-fixe")
        categoryRap.classList.remove("buttons-genre-dark-fixe")
        categoryHipHop.classList.remove("buttons-genre-dark-fixe")
        categoryRock.classList.remove("buttons-genre-dark-fixe")
        categoryReggae.classList.remove("buttons-genre-dark-fixe")
        categoryCountry.classList.remove("buttons-genre-dark-fixe")
        categoryGospel.classList.remove("buttons-genre-dark-fixe")
        categoryRap.classList.add("buttons-genre-dark-fixe")
}else{
    categoryTodos.classList.remove("buttons-genre-fixe")
    categoryPop.classList.remove("buttons-genre-fixe")
    categoryMPB.classList.remove("buttons-genre-fixe")
    categoryForro.classList.remove("buttons-genre-fixe")
    categorySamba.classList.remove("buttons-genre-fixe")
    categoryBaiao.classList.remove("buttons-genre-fixe")
    categoryRap.classList.remove("buttons-genre-fixe")
    categoryHipHop.classList.remove("buttons-genre-fixe")
    categoryRock.classList.remove("buttons-genre-fixe")
    categoryReggae.classList.remove("buttons-genre-fixe")
    categoryCountry.classList.remove("buttons-genre-fixe")
    categoryGospel.classList.remove("buttons-genre-fixe")
    categoryRap.classList.add("buttons-genre-fixe")
}
})

categoryHipHop.addEventListener("click",()=>{
    if(categoryHipHop.classList.contains("buttons-genre-dark")){
        categoryTodos.classList.remove("buttons-genre-dark-fixe")
        categoryPop.classList.remove("buttons-genre-dark-fixe")
        categoryMPB.classList.remove("buttons-genre-dark-fixe")
        categoryForro.classList.remove("buttons-genre-dark-fixe")
        categorySamba.classList.remove("buttons-genre-dark-fixe")
        categoryBaiao.classList.remove("buttons-genre-dark-fixe")
        categoryRap.classList.remove("buttons-genre-dark-fixe")
        categoryHipHop.classList.remove("buttons-genre-dark-fixe")
        categoryRock.classList.remove("buttons-genre-dark-fixe")
        categoryReggae.classList.remove("buttons-genre-dark-fixe")
        categoryCountry.classList.remove("buttons-genre-dark-fixe")
        categoryGospel.classList.remove("buttons-genre-dark-fixe")
        categoryHipHop.classList.add("buttons-genre-dark-fixe")
}else{
    categoryTodos.classList.remove("buttons-genre-fixe")
    categoryPop.classList.remove("buttons-genre-fixe")
    categoryMPB.classList.remove("buttons-genre-fixe")
    categoryForro.classList.remove("buttons-genre-fixe")
    categorySamba.classList.remove("buttons-genre-fixe")
    categoryBaiao.classList.remove("buttons-genre-fixe")
    categoryRap.classList.remove("buttons-genre-fixe")
    categoryHipHop.classList.remove("buttons-genre-fixe")
    categoryRock.classList.remove("buttons-genre-fixe")
    categoryReggae.classList.remove("buttons-genre-fixe")
    categoryCountry.classList.remove("buttons-genre-fixe")
    categoryGospel.classList.remove("buttons-genre-fixe")
    categoryHipHop.classList.add("buttons-genre-fixe")
}
})

categoryRock.addEventListener("click",()=>{
    if(categoryRock.classList.contains("buttons-genre-dark")){
        categoryTodos.classList.remove("buttons-genre-dark-fixe")
        categoryPop.classList.remove("buttons-genre-dark-fixe")
        categoryMPB.classList.remove("buttons-genre-dark-fixe")
        categoryForro.classList.remove("buttons-genre-dark-fixe")
        categorySamba.classList.remove("buttons-genre-dark-fixe")
        categoryBaiao.classList.remove("buttons-genre-dark-fixe")
        categoryRap.classList.remove("buttons-genre-dark-fixe")
        categoryHipHop.classList.remove("buttons-genre-dark-fixe")
        categoryRock.classList.remove("buttons-genre-dark-fixe")
        categoryReggae.classList.remove("buttons-genre-dark-fixe")
        categoryCountry.classList.remove("buttons-genre-dark-fixe")
        categoryGospel.classList.remove("buttons-genre-dark-fixe")
        categoryRock.classList.add("buttons-genre-dark-fixe")
}else{
    categoryTodos.classList.remove("buttons-genre-fixe")
    categoryPop.classList.remove("buttons-genre-fixe")
    categoryMPB.classList.remove("buttons-genre-fixe")
    categoryForro.classList.remove("buttons-genre-fixe")
    categorySamba.classList.remove("buttons-genre-fixe")
    categoryBaiao.classList.remove("buttons-genre-fixe")
    categoryRap.classList.remove("buttons-genre-fixe")
    categoryHipHop.classList.remove("buttons-genre-fixe")
    categoryRock.classList.remove("buttons-genre-fixe")
    categoryReggae.classList.remove("buttons-genre-fixe")
    categoryCountry.classList.remove("buttons-genre-fixe")
    categoryGospel.classList.remove("buttons-genre-fixe")
    categoryRock.classList.add("buttons-genre-fixe")
}
})

categoryReggae.addEventListener("click",()=>{
    if(categoryReggae.classList.contains("buttons-genre-dark")){
        categoryTodos.classList.remove("buttons-genre-dark-fixe")
        categoryPop.classList.remove("buttons-genre-dark-fixe")
        categoryMPB.classList.remove("buttons-genre-dark-fixe")
        categoryForro.classList.remove("buttons-genre-dark-fixe")
        categorySamba.classList.remove("buttons-genre-dark-fixe")
        categoryBaiao.classList.remove("buttons-genre-dark-fixe")
        categoryRap.classList.remove("buttons-genre-dark-fixe")
        categoryHipHop.classList.remove("buttons-genre-dark-fixe")
        categoryRock.classList.remove("buttons-genre-dark-fixe")
        categoryReggae.classList.remove("buttons-genre-dark-fixe")
        categoryCountry.classList.remove("buttons-genre-dark-fixe")
        categoryGospel.classList.remove("buttons-genre-dark-fixe")
        categoryReggae.classList.add("buttons-genre-dark-fixe")
}else{
    categoryTodos.classList.remove("buttons-genre-fixe")
    categoryPop.classList.remove("buttons-genre-fixe")
    categoryMPB.classList.remove("buttons-genre-fixe")
    categoryForro.classList.remove("buttons-genre-fixe")
    categorySamba.classList.remove("buttons-genre-fixe")
    categoryBaiao.classList.remove("buttons-genre-fixe")
    categoryRap.classList.remove("buttons-genre-fixe")
    categoryHipHop.classList.remove("buttons-genre-fixe")
    categoryRock.classList.remove("buttons-genre-fixe")
    categoryReggae.classList.remove("buttons-genre-fixe")
    categoryCountry.classList.remove("buttons-genre-fixe")
    categoryGospel.classList.remove("buttons-genre-fixe")
    categoryReggae.classList.add("buttons-genre-fixe")
}
})

categoryCountry.addEventListener("click",()=>{
    if(categoryCountry.classList.contains("buttons-genre-dark")){
        categoryTodos.classList.remove("buttons-genre-dark-fixe")
        categoryPop.classList.remove("buttons-genre-dark-fixe")
        categoryMPB.classList.remove("buttons-genre-dark-fixe")
        categoryForro.classList.remove("buttons-genre-dark-fixe")
        categorySamba.classList.remove("buttons-genre-dark-fixe")
        categoryBaiao.classList.remove("buttons-genre-dark-fixe")
        categoryRap.classList.remove("buttons-genre-dark-fixe")
        categoryHipHop.classList.remove("buttons-genre-dark-fixe")
        categoryRock.classList.remove("buttons-genre-dark-fixe")
        categoryReggae.classList.remove("buttons-genre-dark-fixe")
        categoryCountry.classList.remove("buttons-genre-dark-fixe")
        categoryGospel.classList.remove("buttons-genre-dark-fixe")
        categoryCountry.classList.add("buttons-genre-dark-fixe")
}else{
    categoryTodos.classList.remove("buttons-genre-fixe")
    categoryPop.classList.remove("buttons-genre-fixe")
    categoryMPB.classList.remove("buttons-genre-fixe")
    categoryForro.classList.remove("buttons-genre-fixe")
    categorySamba.classList.remove("buttons-genre-fixe")
    categoryBaiao.classList.remove("buttons-genre-fixe")
    categoryRap.classList.remove("buttons-genre-fixe")
    categoryHipHop.classList.remove("buttons-genre-fixe")
    categoryRock.classList.remove("buttons-genre-fixe")
    categoryReggae.classList.remove("buttons-genre-fixe")
    categoryCountry.classList.remove("buttons-genre-fixe")
    categoryGospel.classList.remove("buttons-genre-fixe")
    categoryCountry.classList.add("buttons-genre-fixe")
}
})

categoryGospel.addEventListener("click",()=>{
    if(categoryGospel.classList.contains("buttons-genre-dark")){
        categoryTodos.classList.remove("buttons-genre-dark-fixe")
        categoryPop.classList.remove("buttons-genre-dark-fixe")
        categoryMPB.classList.remove("buttons-genre-dark-fixe")
        categoryForro.classList.remove("buttons-genre-dark-fixe")
        categorySamba.classList.remove("buttons-genre-dark-fixe")
        categoryBaiao.classList.remove("buttons-genre-dark-fixe")
        categoryRap.classList.remove("buttons-genre-dark-fixe")
        categoryHipHop.classList.remove("buttons-genre-dark-fixe")
        categoryRock.classList.remove("buttons-genre-dark-fixe")
        categoryReggae.classList.remove("buttons-genre-dark-fixe")
        categoryCountry.classList.remove("buttons-genre-dark-fixe")
        categoryGospel.classList.remove("buttons-genre-dark-fixe")
        categoryGospel.classList.add("buttons-genre-dark-fixe")
}else{
    categoryTodos.classList.remove("buttons-genre-fixe")
    categoryPop.classList.remove("buttons-genre-fixe")
    categoryMPB.classList.remove("buttons-genre-fixe")
    categoryForro.classList.remove("buttons-genre-fixe")
    categorySamba.classList.remove("buttons-genre-fixe")
    categoryBaiao.classList.remove("buttons-genre-fixe")
    categoryRap.classList.remove("buttons-genre-fixe")
    categoryHipHop.classList.remove("buttons-genre-fixe")
    categoryRock.classList.remove("buttons-genre-fixe")
    categoryReggae.classList.remove("buttons-genre-fixe")
    categoryCountry.classList.remove("buttons-genre-fixe")
    categoryGospel.classList.remove("buttons-genre-fixe")
    categoryGospel.classList.add("buttons-genre-fixe")
}
})