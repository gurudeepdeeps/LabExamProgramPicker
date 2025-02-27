const programs = {
    "Sorting Algorithm": "Write a program to implement quicksort.",
    "Linked List Operations": "Write a program to perform insertion and deletion in a linked list.",
    "Binary Search Tree Implementation": "Write a program to insert, delete, and search in a BST.",
    "Graph Traversal": "Write a program to implement BFS and DFS.",
    "Stack and Queue Implementation": "Write a program to implement stack and queue using arrays.",
    "Fibonacci Series using Recursion": "Write a recursive program to generate Fibonacci numbers.",
    "Matrix Multiplication": "Write a program to multiply two matrices.",
    "File Handling in C": "Write a C program to read and write to a file.",
    "Database Connection in Java": "Write a Java program to connect to MySQL and perform CRUD operations.",
    "Web Scraping with Python": "Write a Python program to scrape data from a website using BeautifulSoup."
};

let programsPicked = false;

function pickPrograms() {
    if (programsPicked) return;
    programsPicked = true;

    document.getElementById("question").style.display = "none";
    const shuffled = Object.keys(programs).sort(() => 0.5 - Math.random());
    const selectedPrograms = shuffled.slice(0, 2);
    
    const container = document.getElementById("programs");
    container.innerHTML = "";
    selectedPrograms.forEach((program, index) => {
        const div = document.createElement("div");
        div.classList.add("program-card");
        div.innerText = program;
        setTimeout(() => div.classList.add("show"), index * 300);
        div.onclick = function() {
            document.getElementById("question").innerText = programs[program];
            document.getElementById("question").style.display = "block";
        };
        container.appendChild(div);
    });
}
