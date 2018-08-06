# Roger's MyReads Project

To get this running on your local machine, open terminal and run the following commands. This assumes you have 
npm installed on your machine. If you don't you can [get it here](https://www.npmjs.com/get-npm).

1. `git clone https://github.com/rogergraves/reactnd-project-myreads-starter`
2. `cd reactnd-project-myreads-starter`
3. `npm install`
4. `npm start`

## Where This Came From
This repo was forked from [https://github.com/udacity/reactnd-project-myreads-starter/](https://github.com/udacity/reactnd-project-myreads-starter/).
The main differences between between the original and this version are the following: 
```bash
├── .gitignore - Added JetBrain's RubyMine files (`idea` folder and files) 
├── README.md - Personalized this README that you are currently reading.
└── src
      ├── App.js # Extracted HTML from here to Book.js, Shelf.js and Search.js. Added router and BooksAPI functionality.
(NEW) ├── Book.js # Component for showing a book. 
(NEW) ├── Search.js # Component for entering search terms and seeing the books returned from the BookAPI's search. 
(NEW) ├── Shelf.js # Component for showing books in a particular shelf ('Currently Reading', 'Want to Read' or 'Read'). 
      └── index.js # Added BrowserRouter from react-router-dom
```

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms:

`Android`, `Art`, `Artificial Intelligence`, `Astronomy`, `Austen`, `Baseball`, `Basketball`, `Bhagat`, `Biography`, `Brief`, `Business`, `Camus`, `Cervantes`, `Christie`, `Classics`, `Comics`, `Cook`, `Cricket`, `Cycling`, `Desai`, `Design`, `Development`, `Digital Marketing`, `Drama`, `Drawing`, `Dumas`, `Education`, `Everything`, `Fantasy`, `Film`, `Finance`, `First`, `Fitness`, `Football`, `Future`, `Games`, `Gandhi`, `Homer`, `Horror`, `Hugo`, `Ibsen`, `Journey`, `Kafka`, `King`, `Lahiri`, `Larsson`, `Learn`, `Literary Fiction`, `Make`, `Manage`, `Marquez`, `Money`, `Mystery`, `Negotiate`, `Painting`, `Philosophy`, `Photography`, `Poetry`, `Production`, `Programming`, `React`, `Redux`, `River`, `Robotics`, `Rowling`, `Satire`, `Science Fiction`, `Shakespeare`, `Singh`, `Swimming`, `Tale`, `Thrun`, `Time`, `Tolstoy`, `Travel`, `Ultimate`, `Virtual Reality`, `Web Development`, `iOS`


## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing
This repository was for a Udacity class project, so probably will not accept pull requests.
