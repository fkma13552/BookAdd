import React, {useState, useEffect} from "react";
import './App.css';
import Header from "../header";
import SearchPanel from "../search-panel";
import BookStatusFilter from "../book-status-filter";
import BookList from "../book-list";
import BookAddForm from "../book-add-form";
import {useHttp} from "../../hooks/http.hook";

function App() {
    const {request} = useHttp();
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("noFilter");
    const [data, changeData] = useState([]);

    async function refreshBooks(){
        const data = await request('/books')
        changeData(data);
    }

    useEffect(()=>{
        refreshBooks();
    }, [ ]);

    const allTweets = data.length;

    function deleteBook(id){
        request(`/books/${id}`, 'DELETE');
        refreshBooks();
    }

    function addBook(name, author) {
        const newItem = {
            label: name,
            author: author,
            important: false,
            liked: false
        }
        request('/books', "POST", JSON.stringify(newItem),
            {"Content-Type": "application/json"});
        refreshBooks();

    }

    function toggleImportant(id) {
        const index = data.findIndex(elem => elem.id === id);
        const newItem = {...data[index], important: !data[index].important}
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        changeData(newArr);
    }

    function toggleLike(id) {
        const index = data.findIndex(elem => elem.id === id);
        const newItem = {...data[index], liked: !data[index].liked}
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        changeData(newArr);
    }
    let liked = data.filter(item => item.liked).length;
    let booksToShow = filterBooks(searchBook(data, query), filter);

    function searchBook(items, query) {
        if(query.length === 0){
            return items
        }
        return items.filter( (item) => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1 || item.author.toLowerCase()
                .indexOf(query.toLowerCase()) > -1
        });
    }

    function filterBooks(items, filter) {
        switch (filter){
            case 'like':
                return items.filter(item => item.liked)

            case 'noFilter':
                return items
        }
    }

    return (
      <div className="app">
        <Header liked={liked} allTwets={allTweets}/>
        <div className="search-panel d-flex">
            <SearchPanel onType={(query) => setQuery(query)}/>
            <BookStatusFilter filter={filter} filterSelect={(chosenFilter) => setFilter(chosenFilter)} />
        </div>
        <BookList posts={booksToShow} deleteTweet={deleteBook} toggleImportant={toggleImportant} toggleLike={toggleLike}/>
        <BookAddForm addBook={addBook}/>
      </div>
  );
}

export default App;
