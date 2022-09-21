const Figures = [ // this is the figure model, we consider it as our database since we have almost nothing to register inside the database

// we could use the mongodb database to store the data and mongoose to manage the data
    {
        id: 1 ,
        type: "circle" , 
        perimeterFormular: "2 x PI x radius" ,
        perimeterDescription: "The circumference of the circle is equal to the length of its boundary. This means that the perimeter of a circle is equal to its circumference. perimeter (circumference) is 2πr" ,
        areaDescription: "The circumference of the circle is equal to the length of its boundary. This means that the perimeter of a circle is equal to its circumference. The area of a circle is πr2" ,
        areaFormular: "PI x radius x radius" ,
        imageUrl: "https://www.kindpng.com/picc/m/201-2011139_math-clipart-math-equation-circle-math-vector-png.png" , 
        description: "Calculate the perimeter or area of a circle."
    } , 
    {
        id: 2,
        type: "rectangle" , 
        perimeterFormular: "(2 x L) + (2 x W)" ,
        perimeterDescription: "All rectangles are also parallelograms, but not all parallelograms are rectangles. The perimeter P of a rectangle is given by the formula, P=2l+2w , where l is the length and w is the width of the rectangle" ,
        areaDescription: "The area A of a rectangle is given by the formula, A=lw , where l is the length and w is the width." ,
        areaFormular: "L x W" ,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1k0-ez1ZOCkZDtlsEJuUQJsff89VwT3J-4g&usqp=CAU" , 
        description: "Calculate the perimeter or area of a rectangle."
    } ,
    {
        id: 3,
        type: "square" ,
        perimeterFormular: "4 x (L)" ,
        areaFormular: "L x L" , 
        perimeterDescription: "the perimeter of square is the total length of its boundary. It can be found by adding all four sides of the square or by multiplying any one side by 4. The formula to find perimeter of a square is (4 × side) units." ,
        areaDescription: "The square area is calculated by using the formula: Area = (side × side) square units" ,
        imageUrl: "https://cdn1.byjus.com/wp-content/uploads/2020/01/Area-of-a-Square-Formula.png" , 
        description: "Calculate the perimeter or area of a square."
    } , 
    {
        id: 4,
        type: "triangle" , 
        perimeterFormular: "(2 x L) + (2 x W)" ,
        areaFormular: "L x W" ,
        perimeterDescription: "The perimeter of a triangle can be calculated by adding the lengths of all the three sides of the triangle" ,
        areaDescription: "How to Find the Area and Perimeter of a Triangle? The area of a triangle can be calculated with the help of the formula: A = 1/2 (b × h). " ,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Pythagoras_similar_triangles.svg/330px-Pythagoras_similar_triangles.svg.png" , 
        description: "Calculate the perimeter or area of a triangle."
    }
]

export default Figures